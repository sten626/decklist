import { Component } from '@angular/core';
import { DeckFormComponent } from './deck-form/deck-form.component';
import { PreviewComponent } from './preview/preview.component';
import { StatusComponent } from './status/status.component';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [DeckFormComponent, PreviewComponent, StatusComponent],
  providers: [],
})
export class AppComponent {
  title = 'decklist';
}
