import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OAuthRedirectionUrlService {

  private GITHUB_CALLBACK_URL = 'api/oauth2/authorize/github?redirect_uri=';
  private GOOGLE_CALLBACK_URL = 'api/oauth2/authorize/google?redirect_uri=';
  private FACEBOOK_CALLBACK_URL = 'api/oauth2/authorize/facebook?redirect_uri=';

  constructor(private location: Location) {
  }

  public buildGithubRedirectionUrl(): string {
    return this.buildRedirectionUrl(this.GITHUB_CALLBACK_URL);
  }

  public buildGoogleRedirectionUrl(): string {
    return this.buildRedirectionUrl(this.GOOGLE_CALLBACK_URL);
  }

  public buildFacebookRedirectionUrl(): string {
    return this.buildRedirectionUrl(this.FACEBOOK_CALLBACK_URL);
  }

  private buildRedirectionUrl(callbackUrl: string) {
    const baseUrl = window.location.href.replace(this.location.path(), '/');
    return callbackUrl + baseUrl + 'oauth2/callback';
  }
}
