import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelsComponent } from './panels/panels.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NephilaComponent } from './nephila/nephila.component';
import { ChryseComponent } from './chryse/chryse.component';
import { SurvivalBallComponent } from './survival-ball/survival-ball.component';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    NavbarComponent,
    AboutMeComponent,
    NephilaComponent,
    ChryseComponent,
    SurvivalBallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
