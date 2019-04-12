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

  results: BasicResource[];
  resourceType: string;

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.resourceType = this.route.snapshot.url[0].path;
    const path = this.getSwapiPath(this.resourceType);

    this.swapiService.getResources(path).subscribe(pageableResults => this.results = pageableResults.results);
  }

  private getIdFromUrl(url: string): number {
    url = url.slice(0, -1); // remove trailing slash
    return +url.substring(url.lastIndexOf('/') + 1); // get id
  }

  private getSwapiPath(path: string): string {
    return path === 'characters' ? 'people' : path;
  }
}
