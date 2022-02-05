import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  getResourceTypeFromPath(): string {
    return this.activatedRoute.firstChild.snapshot.url[0].path;
  }

  getIdFromPath(): string {
    return this.activatedRoute.firstChild.snapshot.url[1].path;
  }
}
