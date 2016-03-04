import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {LocationService} from '../services/location.service';

declare var google: any;

@Component({
    selector: 'map-result',
    styles: [`
  #mapResult {
        height: 100%;
      }
  `],
    template: `
        <div id="mapResult"></div>
  `
})
export class MapResult {
    private neighborhoods: any;
    private markers = [];
    private map: any;

    constructor(public locationService: LocationService) {
        // this.neighborhoods = [
        //     { lat: 52.511, lng: 13.447 },
        //     { lat: 52.549, lng: 13.422 },
        //     { lat: 52.497, lng: 13.396 },
        //     { lat: 52.517, lng: 13.394 }
        // ];
    }

    ngOnInit() {
        this.map = new google.maps.Map(document.getElementById('mapResult'), {
            zoom: 12,
            center: { lat: 52.520, lng: 13.410 }
        });
        
        this.locationService.locations.subscribe((results: any) => {
            this.neighborhoods = results;
            this.search();
        });
    }

    search() {
        this.clearMarkers();
        for (var i = 0; i < this.neighborhoods.length; i++) {
            this.addMarkerWithTimeout(this.neighborhoods[i], i * 200);
        }
    }

    addMarkerWithTimeout(position, timeout) {
        window.setTimeout(() => {
            this.markers.push(new google.maps.Marker({
                position: position,
                map: this.map,
                animation: google.maps.Animation.DROP
            }));
        }, timeout);
    }

    clearMarkers() {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        this.markers = [];
    }
}
