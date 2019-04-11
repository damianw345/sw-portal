import { ResourceCardComponent } from './../resource-card/resource-card.component';
import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PageableResults } from '../pageable-results';

@Component({
  selector: 'app-card-displayer',
  templateUrl: './card-displayer.component.html',
  styleUrls: ['./card-displayer.component.css']
})
export class CardDisplayerComponent implements OnInit {

  results: object[];

  constructor(
    private swapiService: SwapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // const path = this.route.snapshot.url[0].path;
    const path = this.getSwapiPath(this.route.snapshot.url[0].path);
    // this.swapiService.getResource(path, 1).subscribe(next => console.info(next.name));

    // this.resources$ = this.swapiService.getResources(path).subscribe(result => result.);
    this.swapiService.getResources(path).subscribe(pageableResults => this.results = pageableResults.results);
  }

  private getSwapiPath(path: string): string {
    return path === 'characters' ? 'people' : path;
  }
}
