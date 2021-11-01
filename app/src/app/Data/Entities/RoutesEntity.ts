export class RoutesEntity {
  public name: string;
  public path: string;

  public constructor(data: { name: string; path: string }) {
    this.name = data.name;
    this.path = data.path;
  }

  static fromJson(json: { name: string; path: string }): RoutesEntity {
    return new RoutesEntity({
      name: json.name,
      path: json.path,
    });
  }
}
