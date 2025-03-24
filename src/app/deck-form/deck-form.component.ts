import { Component } from '@angular/core';
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
    sortOrder: new FormControl('colour'),
  });
}
