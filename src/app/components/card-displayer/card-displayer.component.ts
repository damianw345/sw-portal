import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../core/http/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { PageableResults } from '../../core/model/pageable-results';
import Utils from '../../utils';
import { BasicResource } from '../../core/model/swapi/basic-resource';

@Component({
  selector: 'app-card-displayer',
  templateUrl: './card-displayer.component.html',
  styleUrls: ['./card-displayer.component.scss']
})
export class CardDisplayerComponent implements OnInit {

  pageResults: BasicResource[];
  resourceType: string;
  totalItems: number;
  currentPage: number;
  totalPages: number;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.updatePageItems();
  }

  onPageNumberChanged(clicked: string) {
    let pageId: number;
    if (clicked === '<') {
      pageId = this.currentPage - 1;
    } else if (clicked === '>') {
      pageId = this.currentPage + 1;
    } else {
      pageId = +clicked;
    }
    this.updatePageItems(pageId);
  }

  private updatePageItems(pageId = 1): void {
    this.resourceType = this.route.snapshot.url[0].path;
    const path = Utils.mapResourceType(this.resourceType);

    this.swapiService.getResources(path, pageId).subscribe((pageableResults: PageableResults) => {
      this.pageResults = pageableResults.content;
      this.totalItems = pageableResults.totalElements;
      this.currentPage = pageId;
      this.totalPages = pageableResults.totalPages;
    });
  }
}
