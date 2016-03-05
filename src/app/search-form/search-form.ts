import {Component} from 'angular2/core';
import {Observable} from 'rxjs';
import {FORM_DIRECTIVES, Control, FormBuilder, ControlGroup, AbstractControl, Validators} from 'angular2/common';
import {LocationService} from '../services/location.service';

@Component({
    selector: 'search-form',
    styles: [`
        .search-form-container{
            position:relative;
        }

        .sugg-container{
            position: absolute;
            top: 35px;
            z-index: 2;
            padding-right: 30px;
            width: 100%;
        }
        .suggestion{
            background-color: rgba(0, 0, 0, .7);
            width: 100%;
            color: #fff;
            font-weight: bold;
        }
        
        .suggestion li{
            padding-left: 15px;
        }
        
        .suggestion li:hover{
            cursor: pointer;
            background: #ccc;
            color: #fff;
        }
    `],
    template: `
    <div class="row">
        <div class="col-lg-12 search-form-container">
            <form [ngFormModel]="myForm">
                <div class="input-group">
                    <input type="text" class="form-control" [ngFormControl]="myForm.controls['term']" [(ngModel)]="searchTerm" placeholder="type: manikdi, mirpur etc.">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button" (click)="search()" >Go!</button>
                    </span>
                </div><!-- /input-group -->
                <div class="sugg-container">
                    <ul *ngIf="zones" class="list-unstyled suggestion">
                        <li *ngFor="#zone of zones" (click)="select(zone)" >{{zone}}</li>
                    </ul>
                </div>
            </form>
        </div><!-- /.col-lg-6 -->
        <!--<div class="col-lg-12">
        <label>term is {{searchTerm}}</label>
        </div>-->
    </div><!-- /.row -->
  `
})
export class SearchForm {
    public searchTerm: string;
    private userSelected: boolean;
    myForm: ControlGroup;
    term: AbstractControl;
    zones: any;
    constructor(fb: FormBuilder, private locationService: LocationService) {
        this.myForm = fb.group({
            'term': ['', Validators.required]
        });
        this.term = this.myForm.controls['term'];
        
        this.userSelected = false;
    }

    search() {
        this.locationService.searchLocation(this.searchTerm);
    }

    select(zone){
        this.searchTerm = zone;
        this.userSelected = true;
        this.zones = [];
    }

    ngOnInit() {
        this.term.valueChanges
         .debounceTime(400)
         .filter((term) => {
             let userAction = this.userSelected;
             if (this.userSelected) {
                 this.userSelected = false;
             } 
             return Boolean(term) && !userAction; 
         })
         .distinctUntilChanged()
         .switchMap(term => this.locationService.searchZone(term))
         .subscribe(items => {console.log('items are ', items); this.zones = items['data'];});
//         this.term.valueChanges.debounceTime(400).distinctUntilChanged().subscribe(
// (value: string) => {
// console.log('sku changed to:', value);
// }
// );
    }

}
