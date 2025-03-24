export type SortOrder = 'alpha' | 'colour' | 'mv' | 'original' | 'type';

export interface DecklistFormData {
  firstName: string;
  lastName: string;
  dciNum: string;
  event: string;
  date: string;
  location: string;
  deckName: string;
  designer: string;
  mainDeck: string;
  sideboard: string;
  sortOrder: SortOrder;
}
