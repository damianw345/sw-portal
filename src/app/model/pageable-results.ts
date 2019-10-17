import {BasicResource} from './basic-resource';

class Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

class Links {
  first: { href: string };
  self: { href: string };
  next?: { href: string };
  prev?: { href: string };
  last: { href: string };
}

export class Content {
  content: BasicResource;
}

class Embedded {
  documentList: Array<Content>;
}

export class PageableResults {
  _embedded: Embedded;
  _links: Links;
  page: Page;
}
