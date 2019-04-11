import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private baseUrl = "https://swapi.co/api";

  constructor(private http: HttpClient) { }

  getResources(type: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${type}/`);
  }

  getResource(type: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${type}/${id}`);
  }

}
