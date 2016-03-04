import {Injectable, Inject, Injector, EventEmitter} from "angular2/core";
import {Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http'

@Injectable()
export class LocationService { 
    
    // local states
    locations: Subject<any> = new BehaviorSubject<any>([]);
    
    search(){
        var neighborhoods = [
            { lat: 52.511, lng: 13.447, name: 'poga', desc: 'choga', price: 1 },
            { lat: 52.549, lng: 13.422, name: 'poga', desc: 'choga', price: 2 },
            { lat: 52.497, lng: 13.396, name: 'poga', desc: 'choga', price: 3 },
            { lat: 52.517, lng: 13.394, name: 'poga', desc: 'choga', price: 4 }
        ];
        this.locations.next(neighborhoods);
    }
}