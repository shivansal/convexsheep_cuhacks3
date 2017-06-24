import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition } from '@ionic-native/google-maps';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement;
  map:any;

  constructor(private googleMaps: GoogleMaps, public navCtrl: NavController, public platform: Platform) { }


  ionViewDidLoad() {
    this.initMap();
    //this.tmp();
  }

 initMap(){
    let latLng = new google.maps.LatLng(37.322998,-122.032182)

    let mapOptions ={
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);


 }




}
