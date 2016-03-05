import {Injectable, Inject, Injector, EventEmitter} from "angular2/core";
import {Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http';
import {Config} from './config';

@Injectable()
export class LocationService { 
    
    // local states
    locations: Subject<any> = new BehaviorSubject<any>([]);

    constructor(private http: Http) {
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