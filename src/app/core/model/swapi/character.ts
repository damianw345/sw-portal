import { BasicResource } from './basic-resource';

export interface Character extends BasicResource {

  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeWorld: string;
  films: number[];
  species: number[];
  vehicles: number[];
  starships: number[];
}
