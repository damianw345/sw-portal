import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../core/http/swapi.service';
import Utils from '../../utils';
import { BasicResource } from '../../core/model/swapi/basic-resource';
import { map } from 'rxjs/operators';

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

    this.swapiService.getResourcesByIds(Utils.mapResourceType(resourceType), +id)
      .pipe(
        map((results: BasicResource[]) => results[0])
      ).subscribe((result: BasicResource) => {
      this.resourceName = result.name;
      this.resourceDetailsToShow = this.getResourceDetailsToShow(result);
    });
  }

  private getResourceDetailsToShow(resourceDetails) {
    return Object.entries(resourceDetails)
      .filter(([_, value]) => !Array.isArray(value))
      .filter(([key, _]) => !['id', 'name', 'created', 'edited'].includes(key))
      .map(entry => [Utils.camelCaseToSentenceCase(entry[0]), entry[1]]);
  }

  setDefaultPicture() {
    this.imageUrl = Utils.defaultImageUrl;
  }
}
