export default class Utils {

  static defaultImageUrl = 'assets/img/placeholder.jpg';

  static mapResourceType(resourceType: string): string {
    return resourceType === 'characters' ? 'people' : resourceType;
  }
}
