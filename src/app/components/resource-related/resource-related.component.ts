import { Component, Input, OnInit } from '@angular/core';
import { SwapiService } from '../../core/http/swapi.service';
import { PageableResults } from '../../core/model/pageable-results';
import { Observable } from 'rxjs';
import Utils from '../../utils';

@Component({
  selector: 'app-resource-related',
  templateUrl: './resource-related.component.html',
  styleUrls: ['./resource-related.component.scss']
})
export class ResourceRelatedComponent implements OnInit {

  @Input() resourceIds: string[]
  @Input() resourceType: string

  constructor(private swapiService: SwapiService) {
  }

  ngOnInit(): void {
    this.getPage$(1).subscribe(page => console.log(page));
  }

  getPage$(pageId: number): Observable<PageableResults> {
    return this.swapiService.getResourcesByIds$(Utils.mapResourceType(this.resourceType), this.resourceIds, pageId);
  }

}
