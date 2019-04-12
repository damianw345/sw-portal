import { BasicResource } from './basic-resource';

export class PageableResults {
  count: number;
  next?: string;
  previous?: string;
  results?: BasicResource[];
}
