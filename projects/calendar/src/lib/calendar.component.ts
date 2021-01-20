import { Component, OnInit, ViewChild } from "@angular/core";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";

@Component({
  selector: 'lib-calendar',
  template: `
  <google-map height="400px" width="750px" [center]="center" [zoom]="zoom" (mapClick)="addMarker($event)"
	(mapMousemove)="move($event)" (mapRightclick)="removeLastMarker()">

</google-map>
  `,
  styles: []
})

export class CalendarComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  center = { lat: 24, lng: 12 };
  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;
  display?: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit() {
   
  }

  addMarker(event: google.maps.MouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  move(event: google.maps.MouseEvent) {
    this.display = event.latLng.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

}
