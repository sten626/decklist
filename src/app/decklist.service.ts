import { inject, Injectable } from '@angular/core';
import { DecklistFormData } from './decklist-form-data';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { DecklistParser } from './decklist-parser.service';

@Injectable({
  providedIn: 'root',
})
export class DecklistService {
  private decklistParser = inject(DecklistParser);
  private formData = new BehaviorSubject<DecklistFormData | null>(null);

  cardLists$ = this.formData
    .pipe(
      map((formData) => [formData?.mainDeck, formData?.sideboard]),
      distinctUntilChanged(),
      map(([mainDeck, sideboard]) =>
        this.decklistParser.parse(mainDeck || '', sideboard || '')
      )
    )
    .subscribe((deck) => console.log(deck));

  formUpdated(formData: DecklistFormData) {
    this.formData.next(formData);
  }
}
