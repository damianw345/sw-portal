import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input()
  cardName: string;

  @Input()
  color: string;

  ngOnInit() {
  }

}
