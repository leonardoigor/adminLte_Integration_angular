import { Component, OnInit } from '@angular/core';
import { GlobalObservable } from 'src/app/Shared/global_observable';
import { Settings } from 'src/app/Shared/settings';

@Component({
  selector: 'app-ControlSideBar',
  templateUrl: './ControlSideBar.component.html',
  styleUrls: ['./ControlSideBar.component.scss'],
})
export class ControlSideBarComponent implements OnInit {
  success = 'success';
  public isOn: boolean = true;
  data: Settings = new Settings();
  // observable: GlobalObservable<Settings>;

  constructor(private observable: GlobalObservable<Settings>) {}

  public onToggle() {
    if (this.data) {
      this.isOn = !this.isOn;
      this.data.theme.isBlackTheme = this.isOn;
      this.observable.sendMessage(this.data);
      this.toggleSidebar();
    }
  }

  public toggleSidebar() {
    if (this.isOn) {
      this.setAttr(
        'switch-sidebar-isDark',
        'bootstrap-switch-on',
        'bootstrap-switch-off'
      );
    } else {
      this.setAttr(
        'switch-sidebar-isDark',
        'bootstrap-switch-off',
        'bootstrap-switch-on'
      );
    }
  }

  public setAttr(id: string, classToAdd: string, classToRemove: string) {
    document.getElementById(id)?.classList.remove(classToRemove);
    document.getElementById(id)?.classList.add(classToAdd);
  }
  ngOnInit() {
    this.observable.getMessage().subscribe((data) => {
      this.data = data;
      this.isOn = data?.theme.isBlackTheme;
      this.toggleSidebar();
    });
  }
}
