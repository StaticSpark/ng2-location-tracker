import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {SearchForm} from '../search-form/search-form';
import {ResultBar} from '../result-bar/result-bar';
import {MapResult} from '../map-result/map-result';

@Component({
  selector: 'home',
  styles: [ require('./home.css').toString() ],
  template: require('./home.html'),
  directives: [SearchForm, ResultBar, MapResult]
})
export class Home {
  data = { value: '' };
  
  constructor() {

  }

  ngOnInit() {
    console.log('hello Home component');
  }

}
