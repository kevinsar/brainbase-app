export interface CharacterDetails {
  thumbnail: { path: string; extension: string };
  id: number;
  name: string;
  comics: { available: number; items: { resourceURI: string; name: string } };
  description: string;
}
