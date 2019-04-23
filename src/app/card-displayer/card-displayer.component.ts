import {Component, OnInit} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {ActivatedRoute} from '@angular/router';
import {BasicResource} from '../model/basic-resource';

@Component({
  selector: 'app-card-displayer',
  templateUrl: './card-displayer.component.html',
  styleUrls: ['./card-displayer.component.css']
})
export class CardDisplayerComponent implements OnInit {

  pageResults: BasicResource[];
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

  private updatePageItems(pageId = 1): void {
    this.resourceType = this.route.snapshot.url[0].path;
    const path = this.getSwapiPath(this.resourceType);

    this.swapiService.getResources(path, pageId).subscribe(pageableResults => {
      this.pageResults = pageableResults.results;
      this.totalItems = pageableResults.count;

      this.currentPage = pageId;

      this.next = pageableResults.next;
      this.prev = pageableResults.previous;
      this.totalPages = this.getTotalPages(10, this.totalItems);
    });
  }

  private getIdFromUrl(url: string): number {
    url = url.slice(0, -1); // remove trailing slash
    return +url.substring(url.lastIndexOf('/') + 1); // get id
  }

  private getCurrentPageNumberFromUrl(url: string): number {
    return +url.substring(url.lastIndexOf('=') + 1);
  }

  private getSwapiPath(path: string): string {
    return path === 'characters' ? 'people' : path;
  }

  private getNameOrTitle(result: BasicResource): string {
    return result.name || result.title;
  }

  private getTotalPages(itemsPerPage: number, totalItems: number): number {
    const floor = Math.floor(totalItems / itemsPerPage);
    return totalItems % itemsPerPage === 0 ? floor : floor + 1;
  }

}
