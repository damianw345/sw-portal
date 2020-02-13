import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import Utils from '../../utils';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {


  constructor(private location: Location) {
  }

  breadcrumbs: Breadcrumb[] = [];
  private rootBreadcrumb: Breadcrumb = {
    label: 'Home',
    url: ''
  };

  private static buildBreadcrumb(label: string, url: string): Breadcrumb {
    return {
      label,
      url
    };
  }

  private static removePaginationFrom(urlPart): string {
    return urlPart.replace(/\?.*/, '');
  }

  ngOnInit(): void {

    this.location.onUrlChange(url => {

      const urlParts = [...new Set(url.split(/\//))];

      this.breadcrumbs = urlParts
        .map(urlPart => BreadcrumbComponent.removePaginationFrom(urlPart))
        .map((urlPart, i, origUrlParts) => {
          if (!urlPart) {
            return this.rootBreadcrumb;
          }
          return BreadcrumbComponent.buildBreadcrumb(
            Utils.firstLetterToUppercase(urlPart),
            origUrlParts.slice(0, i + 1).join('/')
          );
        });
      if (this.breadcrumbs.some((breadcrumb: Breadcrumb) => breadcrumb.url === '/login')) {
        // fixme - temporary workaround for hiding breadcrumbs when logging in
        this.breadcrumbs = [];
      }
    });
  }
}
