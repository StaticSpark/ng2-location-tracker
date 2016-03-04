import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {LocationService} from '../services/location.service';

@Component({
  selector: 'search-form',
  template: `
    <div class="row">
        <div class="col-lg-12">
            <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" (click)="search()" >Go!</button>
            </span>
            </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
  `
})
export class SearchForm {
  
  constructor(private locationService: LocationService) {

  }

  search(){
      console.info("searching...");
      this.locationService.search();
  }
  ngOnInit() {
  }

}
