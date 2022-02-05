import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../core/http/swapi.service';
import Utils from '../../utils';
import { BasicResource } from '../../core/model/swapi/basic-resource';
import { PathService } from '../../core/service/path.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resource-detail-card',
  templateUrl: './resource-detail-card.component.html',
  styleUrls: ['./resource-detail-card.component.scss']
})
export class ResourceDetailCardComponent implements OnInit {

  resourceTypes = [
    'films',
    'starships',
    'vehicles',
    'species',
    'characters',
    'planets  '
  ];

  id: string;
  resourceType: string;
  resource$: Observable<BasicResource>;

  imageUrl: string;

  constructor(private swapiService: SwapiService,
              private pathService: PathService) {
  }

  private get _imageUrl(): string {
    return `assets/img/${this.resourceType}/${this.id}.jpg`;
  }

  ngOnInit() {
    this.resourceType = this.pathService.getResourceTypeFromPath();
    this.id = this.pathService.getIdFromPath();
    this.imageUrl = this._imageUrl;

    this.resource$ = this.swapiService.getResourceById$(Utils.mapResourceType(this.resourceType), this.id);
  }

  getResourceDetailsToShow(resourceDetails: any) {
    return Object.entries(resourceDetails)
      .filter(([_, value]) => !Array.isArray(value))
      .filter(([key, _]) => !['id', 'name', 'created', 'edited'].includes(key))
      .map(entry => [Utils.camelCaseToSentenceCase(entry[0]), entry[1]]);
  }

  setErrorPicture() {
    this.imageUrl = Utils.defaultImageUrl;
  }
}
