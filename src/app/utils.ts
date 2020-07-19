import * as jwtDecode from 'jwt-decode';
import { JwtJson } from './core/model/jwt-json';

export default class Utils {

  static defaultImageUrl = 'assets/img/placeholder.jpg';

  static mapResourceType(resourceType: string): string {
    return resourceType === 'characters' ? 'people' : resourceType;
  }

  static getDecodedJwtJson(token: string): JwtJson | null {
    try {
      return jwtDecode(token);
    } catch (err) {
      console.error('Error during parsing token: ', err);
      return null;
    }
  }

  static camelCaseToSentenceCase(str: string) {
    const result = str.replace(/([A-Z])/g, (substring: string) => ` ${substring.toLowerCase()}`);
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}
