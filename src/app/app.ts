import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {Home} from './home/home';
import {LocationService} from './services/location.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS, LocationService ],
  directives: [ ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [`
    
  `],
  template: `
    <div class="container">
        <h1 class="text-center">location tracker</h1>
        <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/home', component: Home, name: 'Home' }
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
])
export class App {
  constructor() {

  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
