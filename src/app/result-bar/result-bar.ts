import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {LocationService} from '../services/location.service';

@Component({
    selector: 'result-bar',
    styles: [`
    .list-group-item.row{
        background: #EAEEFF;
        border-radius: 0;
    }
    .result-bar .panel-body{
        height: 355px;
        overflow: scroll;
    }
    `],
    template: `
        <div class="col-lg-4 result-bar">
            <div class="panel panel-default">
                <div class="panel-heading">Match Found</div>
                <div class="panel-body">
                    <div class="list-group">
                        <a href="#" class="list-group-item row" *ngFor="#location of locationService.locations|async">
                            <div class="col-lg-4">
                                <img style="width: 100%;" [src]="location.images" />
                            </div>
                            <div class="col-lg-8">
                                <label>{{location.title}}</label>
                                <p class="list-group-item-text">\${{location.price}}</p>
                            </div>
                        </a>
                    </div>  
                </div>
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
