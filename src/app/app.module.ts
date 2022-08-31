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
import { EclipticComponent } from './ecliptic/ecliptic.component';
import { LoopingCondorComponent } from './looping-condor/looping-condor.component';
import { BrubnarComponent } from './brubnar/brubnar.component';
import { VespadianComponent } from './vespadian/vespadian.component';
import { Ecliptic2Component } from './ecliptic2/ecliptic2.component';
import { TimeflightComponent } from './timeflight/timeflight.component';


@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent,
    NavbarComponent,
    AboutMeComponent,
    NephilaComponent,
    ChryseComponent,
    SurvivalBallComponent,
    EclipticComponent,
    LoopingCondorComponent,
    BrubnarComponent,
    VespadianComponent,
    Ecliptic2Component,
    TimeflightComponent
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
