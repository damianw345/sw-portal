import * as jwtDecode from 'jwt-decode';
import { JwtJson } from './core/model/jwt-json';

export default class Utils {

  static defaultImageUrl = 'assets/img/placeholder.jpg';

  static mapResourceType(resourceType: string): string {
    return resourceType === 'characters' ? 'people' : resourceType;
  }

  static replaceUnderscoresAndFirstLetterToUppercase(input: string): string {
    return input.charAt(0).toUpperCase() +
      input.substring(1).replace(/_/g, ' ');
  }

  static getDecodedJwtJson(token: string): JwtJson | null {
    try {
      return jwtDecode(token);
    } catch (err) {
      console.error('Error during parsing token: ', err);
      return null;
    }
  }
}
