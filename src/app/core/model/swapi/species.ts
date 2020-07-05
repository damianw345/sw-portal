import { BasicResource } from './basic-resource';

export interface Species extends BasicResource {
  classification: string;
  designation: string;
  averageHeight: string;
  skinColors: string;
  hairColors: string;
  eyeColors: string;
  averageLifespan: string;
  homeWorld: number;
  language: string;
  people: number[];
  films: number[];
}
