import { Component, Input, OnInit } from '@angular/core';
import Utils from '../utils';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.css']
})
export class ResourceCardComponent implements OnInit {

  @Input()
  itemId: number;
  @Input()
  itemName: string;
  @Input()
  resourceType: string;

  private pictureUrl: string;

  constructor() {
  }

  ngOnInit() {
    this.pictureUrl = `assets/img/${this.resourceType}/${this.itemId}.jpg`;
  }

  setDefaultPicture() {
    this.pictureUrl = Utils.defaultImageUrl;
  }

}
