import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from './panels/panels.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NephilaComponent } from './nephila/nephila.component';
import { ChryseComponent } from './chryse/chryse.component';
import { SurvivalBallComponent } from './survival-ball/survival-ball.component';
import { EclipticComponent } from './ecliptic/ecliptic.component';
import { LoopingCondorComponent } from './looping-condor/looping-condor.component';
import { BrubnarComponent } from './brubnar/brubnar.component';
import { VespadianComponent } from './vespadian/vespadian.component';
import { Ecliptic2Component } from './ecliptic2/ecliptic2.component';
import { TimeflightComponent } from './timeflight/timeflight.component';


const routes: Routes = [
  {path: '', component: PanelsComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'nephila', component: NephilaComponent},
  {path: 'chryse', component: ChryseComponent},
  {path: 'superSurvivalBall', component: SurvivalBallComponent},
  {path: 'ecliptic', component: EclipticComponent},
  {path: 'loopingCondor', component: LoopingCondorComponent},
  {path: 'brubnar', component: BrubnarComponent},
  {path: 'vespadian', component: VespadianComponent},
  {path: 'ecliptic2', component: Ecliptic2Component},
  {path: 'timeflight', component: TimeflightComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

