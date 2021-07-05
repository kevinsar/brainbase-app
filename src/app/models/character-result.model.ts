export interface CharacterResults {
  thumbnail: { path: string; extension: string };
  id: number;
  name: string;
  comics: { available: number };
  description: string;
}
