import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {LocationService} from '../services/location.service';

@Component({
    selector: 'result-bar',
    template: `
        <div class="col-lg-4">
            <h1>Match Found</h1>
            <div class="list-group">
                <a href="#" class="list-group-item active" *ngFor="#location of locationService.locations|async">
                    <h4 class="list-group-item-heading">{{location.name}}</h4>
                    <p class="list-group-item-text">{{location.desc}} {{location.price}}</p>
                </a>
            </div>        
        </div><!-- /.col-lg-4 -->
  `
})
export class ResultBar {

    // private results: any;

    constructor(private locationService: LocationService) {

    }

    ngOnInit() {
        // this.locationService.locations.subscribe((results: any) => {
        //     this.results = results;
        // });
    }

}
