import { BasicResource } from './basic-resource';

export interface Film extends BasicResource {
  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
}
