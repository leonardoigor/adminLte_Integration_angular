export class Theme {
  public primary = '#00BCD4';
  public accent = '#FF5252';
  public warn = '#F44336';
  public background = '#EEEEEE';
  public isBlackTheme: boolean = true;

  public getColor(name: string): string {
    switch (name) {
      case 'primary':
        return this.primary;
      case 'accent':
        return this.accent;
      case 'warn':
        return this.warn;
      case 'background':
        return this.background;
      default:
        return this.primary;
    }
  }

  public static getInstance(): Theme {
    return new Theme();
  }
}
