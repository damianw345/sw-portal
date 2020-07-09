import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

const range = (start: number, end: number) =>
  Array.from({ length: end - start }, (_v, k) => k + start);

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input()
  currentPage: number;
  @Input()
  totalPages: number;
  @Input()
  resourceType: string;

  @Output()
  pageNumberChange = new EventEmitter<string>();

  pages: Array<number>;
  currentPages: Array<number>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.pages = range(1, this.totalPages + 1);

    if (this.currentPage >= 0 && this.totalPages) {
      this.currentPages = this.getPagesNumbers();
    }
  }

  public pageNumberChanged(event: any): void {
    this.pageNumberChange.emit(event.target.innerText);
  }

  private getPagesNumbers(): Array<number> {
    const pageNumbers = [];

    const currentPage = this.currentPage;
    const totalPages = this.totalPages;
    const pages = this.pages;

    const min = currentPage - 2;
    const max = currentPage + 2;

    if (min <= 0) {
      pageNumbers.push(...pages.slice(0, 5));
    } else if (max > totalPages) {
      pageNumbers.push(...pages.slice(-5, pages.length));
    } else {
      pageNumbers.push(...pages.slice(min - 1, max));
    }
    return pageNumbers;
  }
}
