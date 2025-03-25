import { Injectable } from '@angular/core';
import { CardService } from './card.service';

const cardRegex = /^\s*(\d+)x*\s(.+?)\s*$/; // Unsure if there are any other common formats anymore..
const sideboardStartRegex = /^\s*Sideboard/i; // Tappedout looks like MTGO, except sideboard begins with "Sideboard:"; Salvation, same, but no colon

interface CardData {
  name: string;
  quantity: number;
  color?: string;
  mv: number;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class DecklistParser {
  constructor(private cardService: CardService) {}

  parse(
    mainString: string,
    sideString: string
  ): [CardData[], CardData[], string[], string[]] {
    const mainLines = mainString.split('\n');
    const sideLines = sideString.split('\n');

    const main: CardData[] = [];
    const side: CardData[] = [];
    const unrecognized: string[] = [];
    const unparseable: string[] = [];
    let currentList = main;

    for (const line of [...mainLines, 'Sideboard', ...sideLines]) {
      // check for sideboard switch statement
      if (sideboardStartRegex.test(line)) {
        currentList = side;
        continue;
      }

      // check line against card regexes
      let match = cardRegex.exec(line);

      if (match === null) {
        if (line.trim()) {
          // Don't bother adding whitespace
          unparseable.push(line);
        }
        continue;
      }

      const quantity = parseInt(match[1]);
      const cardName = match[2];
      const cardData = this.cardService.getCard(cardName);

      if (!cardData) {
        unrecognized.push(cardName);
        continue;
      }

      console.log(cardData);
      currentList.push({
        name: cardData.n,
        quantity,
        color: cardData.c,
        mv: cardData.m,
        type: cardData.t,
      });
    }

    return [main, side, unrecognized, unparseable];
  }
}
