import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from './panels/panels.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NephilaComponent } from './nephila/nephila.component';
import { ChryseComponent } from './chryse/chryse.component';
import { SurvivalBallComponent } from './survival-ball/survival-ball.component';
import { EclipticComponent } from './ecliptic/ecliptic.component';


const routes: Routes = [
  {path: '', component: PanelsComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'nephila', component: NephilaComponent},
  {path: 'chryse', component: ChryseComponent},
  {path: 'superSurvivalBall', component: SurvivalBallComponent},
  {path: 'ecliptic', component: EclipticComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

