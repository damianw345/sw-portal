import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
