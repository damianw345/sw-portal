import {Component, OnInit} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {ActivatedRoute} from '@angular/router';
import {BasicResource} from '../model/basic-resource';
import {Content} from '../model/pageable-results';

@Component({
  selector: 'app-card-displayer',
  templateUrl: './card-displayer.component.html',
  styleUrls: ['./card-displayer.component.css']
})
export class CardDisplayerComponent implements OnInit {

  pageResults: Content[];
  resourceType: string;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  next: string;
  prev: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.updatePageItems();
  }

  private onPageNumberChanged(clicked: string) {
    let pageId = 0;
    if (clicked === '<') {
      pageId = this.currentPage - 1;
    } else if (clicked === '>') {
      pageId = this.currentPage + 1;
    } else {
      pageId = +clicked;
    }
    this.updatePageItems(pageId);
  }

  private updatePageItems(pageId = 0): void {
    this.resourceType = this.route.snapshot.url[0].path;
    const path = this.getSwapiPath(this.resourceType);

    this.swapiService.getResources(path, pageId).subscribe(pageableResults => {
      this.pageResults = pageableResults._embedded.documentList;
      this.totalItems = pageableResults.page.totalElements;

      this.currentPage = pageId;

      this.next = pageableResults._links.next ? pageableResults._links.next.href : null;
      this.prev = pageableResults._links.prev ? pageableResults._links.prev.href : null;
      this.totalPages = pageableResults.page.totalPages;
    });
  }

  private getIdFromUrl(url: string): number {
    url = url.slice(0, -1); // remove trailing slash
    return +url.substring(url.lastIndexOf('/') + 1); // get id
  }

  private getSwapiPath(path: string): string {
    return path === 'characters' ? 'people' : path;
  }

  private getNameOrTitle(result: BasicResource): string {
    return result.name || result.title;
  }
}
