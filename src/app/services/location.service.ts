import {Injectable, Inject, Injector, EventEmitter} from "angular2/core";
import {Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http';
import {Config} from './config';

@Injectable()
export class LocationService { 
    
    // local states
    locations: Subject<any>;

    constructor(private http: Http) {
        
        this.locations = new BehaviorSubject<any>([
            {lat: 23.826, lng: 90.391, zone: 'manikdi', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 200},
            {lat: 23.83381, lng: 90.36945, zone: 'mirpur-11', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 50},
            {lat: 23.816, lng: 90.391, zone: 'manikdi', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 200},
            {lat: 23.845, lng: 90.36945, zone: 'mirpur-11', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 50},
            {lat: 23.856, lng: 90.391, zone: 'manikdi', images:'assets/img/rooms/1.jpg', title: 'Lorem Ipsum is simply ...', price: 200},
            {lat: 23.865, lng: 90.36945, zone: 'mirpur-11', images:'assets/img/rooms/2.jpg', title: 'Lorem Ipsum is simply ...', price: 50}
        ]);
    }

    searchLocation(searchTerm) {
        let body = JSON.stringify({ "term": searchTerm });
        let options = { "headers": new Headers({ "Content-Type": "application/json" }) };
        this.http.post(Config.reqDomain + "/search", body, options)
            .map((res) => res.json())
            .subscribe(
            res => { console.log('res is ', res); this.locations.next(res.data); },
            err => { throw err; },
            () => console.log('Search Complete'));
    }

    searchZone(input) {
        console.log('zone query is ', input);
        return this.http
                .get(Config.reqDomain + "/search/"+input)
                .map((request) => request.json());
        // return input;
    }
}