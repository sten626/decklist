import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface CardDataJsonValue {
  b: string;
  c?: string;
  m: number;
  n: string;
  t: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private jsonUrl = 'decklist-cards.json';
  private cards: Record<string, CardDataJsonValue> = {};

  constructor(private http: HttpClient) {
    this.http
      .get<Record<string, CardDataJsonValue>>(this.jsonUrl)
      .subscribe((data) => {
        this.cards = data;
      });
  }

  getCard(name: string): CardDataJsonValue | null {
    // TODO: replace 'ae'?
    if (Object.hasOwn(this.cards, name)) {
      return this.cards[name];
    }

    return null;
  }
}
