import { Injectable } from '@angular/core';

const cardRegex = /^\s*(\d+)x*\s(.+?)\s*$/; // Unsure if there are any other common formats anymore..
const sideboardStartRegex = /^\s*Sideboard/i; // Tappedout looks like MTGO, except sideboard begins with "Sideboard:"; Salvation, same, but no colon

@Injectable({
  providedIn: 'root',
})
export class DecklistParser {
  parse(mainString: string, sideString: string) {
    const mainLines = mainString.split('\n');
    const sideLines = sideString.split('\n');

    const main: string[] = [];
    const side: string[] = [];
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
      // TODO: Get card data
      currentList.push(`${quantity} ${cardName}`);
    }

    console.log(main);
    console.log(side);
    console.log(unrecognized);
    console.log(unparseable);
  }
}
