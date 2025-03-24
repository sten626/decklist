import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DecklistService } from '../decklist.service';
import { DecklistFormData, SortOrder } from '../decklist-form-data';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'dl-deck-form',
  imports: [
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './deck-form.component.html',
  styleUrl: './deck-form.component.scss',
})
export class DeckFormComponent implements OnInit {
  appearance: MatFormFieldAppearance = 'outline';
  deckForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dciNum: new FormControl(''),
    event: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
    deckName: new FormControl(''),
    designer: new FormControl(''),
    mainDeck: new FormControl(''),
    sideboard: new FormControl(''),
    sortOrder: new FormControl<SortOrder>('colour'),
  });

  constructor(private decklistService: DecklistService) {}

  ngOnInit() {
    this.deckForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        const formData: DecklistFormData = {
          firstName: value.firstName || '',
          lastName: value.lastName || '',
          dciNum: value.dciNum || '',
          event: value.event || '',
          date: value.date || '',
          location: value.location || '',
          deckName: value.deckName || '',
          designer: value.designer || '',
          mainDeck: value.mainDeck || '',
          sideboard: value.sideboard || '',
          sortOrder: value.sortOrder || 'colour',
        };

        this.decklistService.formUpdated(formData);
      });
  }
}
