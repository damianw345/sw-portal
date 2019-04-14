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
  next: string;
  @Input()
  prev: string;

  constructor() {
  }

  ngOnInit() {
  }

}
