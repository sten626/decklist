import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormFieldAppearance,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
export class DeckFormComponent {
  appearance: MatFormFieldAppearance = 'outline';
  deckForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    event: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
    deckName: new FormControl(''),
    designer: new FormControl(''),
    mainDeck: new FormControl(''),
    sideboard: new FormControl(''),
    sortOrder: new FormControl('colour'),
  });
}
