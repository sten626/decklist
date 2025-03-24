import { TestBed } from '@angular/core/testing';

import { DecklistParserService } from './decklist-parser.service';

describe('DecklistParserService', () => {
  let service: DecklistParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecklistParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
