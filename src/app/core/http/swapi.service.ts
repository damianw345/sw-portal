import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableResults } from '../model/pageable-results';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private endpoint = 'api/swapi';

  constructor(private http: HttpClient) { }

  getResources(type: string, pageId): Observable<PageableResults> {
    return this.http.get<PageableResults>(`${this.endpoint}/${type}?page=${pageId}`);
  }

  getResource(type: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/${type}/${id}`);
  }

}
