export interface BasicResource {
  id: number;
  created: Date;
  edited: Date;
  name: string;
  films: number[];
  starships: number[];
  vehicles: number[];
  species: number[];
  characters: number[];
  planets: number[];
}
