import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlSideBarComponent } from './Components/ControlSideBar/ControlSideBar.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { MenuSideComponent } from './Components/MenuSide/MenuSide.component';
import { NavBarComponent } from './Components/NavBar/NavBar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuSideComponent,
    ControlSideBarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
