import { BasicResource } from './basic-resource';

export interface Film extends BasicResource {

  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  characters: number[];
  planets: number[];
  starships: number[];
  vehicles: number[];
  species: number[];

}
