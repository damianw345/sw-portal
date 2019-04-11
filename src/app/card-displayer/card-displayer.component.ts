import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-card-displayer',
  templateUrl: './card-displayer.component.html',
  styleUrls: ['./card-displayer.component.css']
})
export class CardDisplayerComponent implements OnInit {

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getResource('people', 1).subscribe(next => console.info(next.name));
  }

}
