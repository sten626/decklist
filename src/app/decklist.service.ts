import { inject, Injectable } from '@angular/core';
import { DecklistFormData } from './decklist-form-data';
import { BehaviorSubject, distinctUntilChanged, map, tap } from 'rxjs';
import { DecklistParser } from './decklist-parser.service';

@Injectable({
  providedIn: 'root',
})
export class DecklistService {
  private decklistParser = inject(DecklistParser);
  private formData = new BehaviorSubject<DecklistFormData | null>(null);

  mainDeck$ = this.formData
    .pipe(
      map((formData) => formData?.mainDeck),
      distinctUntilChanged(),
      map((mainDeck) => this.decklistParser.parse(mainDeck || '', ''))
    )
    .subscribe((deck) => console.log(deck));

  formUpdated(formData: DecklistFormData) {
    this.formData.next(formData);
  }
}
