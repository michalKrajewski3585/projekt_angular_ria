import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
    slider
  ]
})
export class AppComponent {
  title = 'projectAngular';
  author = 'Michał Krajewski';
  index = "63954";
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
