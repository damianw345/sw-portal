import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  private rootBreadcrumb: Breadcrumb = {
    label: 'Home',
    url: ''
  };

  breadcrumbs: Breadcrumb[] = [this.rootBreadcrumb];

  constructor(public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.breadcrumbs = [...new Set(
      this.breadcrumbs.concat(...this.urlSegmentsToBreadcrumbs(this.activatedRoute.snapshot.url)))
    ];
  }

  private urlSegmentsToBreadcrumbs(urlSegments: UrlSegment[]): Breadcrumb[] {
    return urlSegments.map((curr, i, all) => {
      const url = all.slice(0, i + 1).map(prev => prev.path).join('/');

      return this.buildBreadcrumb(curr.path, `/${url}`);
    });
  }

  private buildBreadcrumb(label: string, url: string): Breadcrumb {
    return {
      label,
      url
    };
  }
}
