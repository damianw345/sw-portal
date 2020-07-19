import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableResults } from '../model/pageable-results';
import { BasicResource } from '../model/swapi/basic-resource';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private endpoint = 'api/swapi';

  constructor(private http: HttpClient) {
  }

  getResources(type: string, pageId): Observable<PageableResults> {
    return this.http.get<PageableResults>(`${this.endpoint}/${type}?page=${pageId}`);
  }

  getResourcesByIds(type: string, ids: number): Observable<BasicResource[]> {
    return this.http.get<BasicResource[]>(`${this.endpoint}/${type}/${ids}`);
  }

}
