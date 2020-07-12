import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../core/http/swapi.service';
import Utils from '../../utils';
import { BasicResource } from '../../core/model/swapi/basic-resource';

@Component({
  selector: 'app-resource-detail-card',
  templateUrl: './resource-detail-card.component.html',
  styleUrls: ['./resource-detail-card.component.scss']
})
export class ResourceDetailCardComponent implements OnInit {

  private resourceName: string;
  private imageUrl: string;

  resourceDetailsToShow: any;

  constructor(private swapiService: SwapiService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    const resourceType = this.activatedRoute.snapshot.url[0].path;
    const id = this.activatedRoute.snapshot.url[1].path;
    this.imageUrl = `assets/img/${resourceType}/${id}.jpg`;

    this.swapiService.getResource(Utils.mapResourceType(resourceType), +id)
      .subscribe((resource: BasicResource) => {
        this.resourceName = resource.name;
        this.resourceDetailsToShow = this.getResourceDetailsToShow(resource);
      });
  }

  private getResourceDetailsToShow(resourceDetails) {
    return Object.entries(resourceDetails)
      .filter(([_, value]) => !Array.isArray(value))
      .filter(([key, _]) => !['name', 'title', 'created', 'edited', 'url', 'homeworld'].includes(key))
      .map(entry => [Utils.replaceUnderscoresAndFirstLetterToUppercase(entry[0]), entry[1]]);
  }

  setDefaultPicture() {
    this.imageUrl = Utils.defaultImageUrl;
  }
}
