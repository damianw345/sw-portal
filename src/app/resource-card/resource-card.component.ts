import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.css']
})
export class ResourceCardComponent implements OnInit {

  itemId: number;
  itemName: string;
  resourceType: string;

  constructor() { }

  ngOnInit() {
  }

}
