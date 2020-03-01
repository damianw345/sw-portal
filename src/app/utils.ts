import * as jwtDecode from 'jwt-decode';
import { JwtJson } from './core/model/JwtJson';

export default class Utils {

  static defaultImageUrl = 'assets/img/placeholder.jpg';

  static mapResourceType(resourceType: string): string {
    return resourceType === 'characters' ? 'people' : resourceType;
  }

  static replaceUnderscoresAndFirstLetterToUppercase(input: string): string {
    return input.charAt(0).toUpperCase() +
      input.substring(1).replace(/_/g, ' ');
  }

  static firstLetterToUppercase(s: string): string {
    return s[0].toUpperCase() + s.slice(1);
  }

  static getDecodedJwtJson(token: string): JwtJson | null {
    try {
      return jwtDecode(token);
    } catch (err) {
      console.log('Error during parsing token: ', err);
      return null;
    }
  }
}
