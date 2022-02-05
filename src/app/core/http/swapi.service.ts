import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableResults } from '../model/pageable-results';
import { BasicResource } from '../model/swapi/basic-resource';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private endpoint = 'api/swapi';

  constructor(private http: HttpClient) {
  }

  getResources$(type: string, pageId: number): Observable<PageableResults> {
    return this.http.get<PageableResults>(`${this.endpoint}/${type}?page=${pageId}`);
  }

  getResourceById$(type: string, id: string): Observable<BasicResource> {
    return this.getResourcesByIds$(type, [id], 1).pipe(
      map((paged: PageableResults) => paged.content[0])
    );
  }

  getResourcesByIds$(type: string, ids: string[], pageId: number): Observable<PageableResults> {
    return this.http.get<PageableResults>(`${this.endpoint}/${type}/${ids}?page=${pageId}`);
  }
}
