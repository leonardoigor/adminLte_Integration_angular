import { Theme } from './theme';

export class Settings {
  public isLoading: boolean = false;
  public theme: Theme;

  constructor() {
    this.theme = new Theme();
  }
}
