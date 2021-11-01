import { Component, OnInit } from '@angular/core';
import { RoutesEntity } from 'src/app/Data/Entities/RoutesEntity';
import { RoutesList } from 'src/app/Data/Entities/RoutesList';
import { GlobalObservable } from 'src/app/Shared/global_observable';
import { Settings } from 'src/app/Shared/settings';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css'],
})
export class NavBarComponent implements OnInit {
  // observable: GlobalObservable<Settings>;
  data: Settings;
  routes: RoutesEntity[];

  constructor(private observable: GlobalObservable<Settings>) {
    this.routes = RoutesList;
    this.data = new Settings();
    // this.observable = new GlobalObservable<Settings>(this.data);
    // this.observable.subscribe((data) => {
    //   this.data = data;
    //   this.checkTheme();
    // });
    // this.checkTheme();
    this.observable.getMessage().subscribe((data) => {
      this.data = data;
      this.checkTheme();
    });
    this.observable.sendMessage(this.data);
  }

  ngOnInit() {}

  public changeThemeT(): void {
    if (this.data) {
      this.data.theme.isBlackTheme = !this.data.theme.isBlackTheme;
      // this.observable.setDataAndNotify(this.data);
      this.observable.sendMessage(this.data);
    }
  }

  public checkTheme(): void {
    if (this.data) {
      if (this.data.theme.isBlackTheme) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }
}
