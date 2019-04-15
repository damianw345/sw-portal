import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input()
  currentPage: number;
  @Input()
  totalPages: number;
  @Input()
  resourceType: string;

  constructor() {
  }

  ngOnInit() {
  }

  private getRelativePagesNumbers(): Array<number> {
    let pageNumbers = [];

    switch (this.currentPage) {
      // boundary cases
      case 1:
        pageNumbers = [0, 1, 2, 3, 4];
        break;
      case 2:
        pageNumbers = [0, 1, 2, 3];
        break;
      case this.totalPages - 1:
        pageNumbers = [-3, -2, -1, 0];
        break;
      case this.totalPages:
        pageNumbers = [-4, -3, -2, -1, 0];
        break;

      // middle case
      default:
        pageNumbers = [-2, -1, 0, 1, 2];
    }

    return pageNumbers;
  }

}
