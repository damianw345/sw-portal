import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwapiService} from '../swapi.service';
import Utils from '../utils';

@Component({
  selector: 'app-resource-detail-card',
  templateUrl: './resource-detail-card.component.html',
  styleUrls: ['./resource-detail-card.component.css']
})
export class ResourceDetailCardComponent implements OnInit {

  private resourceName: string;
  private imageUrl: string;
  private resourceDetailsToShow: any;

  constructor(private swapiService: SwapiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    const resourceType = this.activatedRoute.snapshot.url[0].path;
    const id = this.activatedRoute.snapshot.url[1].path;
    this.imageUrl = `assets/img/${resourceType}/${id}.jpg`;

    this.swapiService.getResource(Utils.mapResourceType(resourceType), +id)
      .subscribe(resource => {
        this.resourceName = resource.name ? resource.name : resource.title;
        this.resourceDetailsToShow = this.getResourceDetailsToShow(resource);
      });
  }

  private getResourceDetailsToShow(resourceDetails) {
    return Object.entries(resourceDetails)
      .filter(([_, value]) => !Array.isArray(value))
      .filter(([key, _]) => !['name', 'title', 'created', 'edited', 'url', 'homeworld'].includes(key))
      .map(entry => [this.replaceUnderscoresAndFirstLetterToUppercase(entry[0]), entry[1]]);
  }

  private replaceUnderscoresAndFirstLetterToUppercase(input: string): string {
    return input.charAt(0).toUpperCase() +
      input.substring(1).replace(/_/g, ' ');
  }

  setDefaultPicture() {
    this.imageUrl = Utils.defaultImageUrl;
  }
}
