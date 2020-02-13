import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageableResults } from '../model/pageable-results';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private baseUrl = 'http://localhost:28080/api/swapi';

  constructor(private http: HttpClient) { }

  getResources(type: string, pageId): Observable<PageableResults> {
    return this.http.get<PageableResults>(`${this.baseUrl}/${type}?page=${pageId}`);
  }

  getResource(type: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${type}/${id}`);
  }

}
