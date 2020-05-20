import { Component, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quinns-games-angular';
  ngAfterViewInit(): void {
      // @ts-ignore
      twttr.widgets.load();
  }
  
}


