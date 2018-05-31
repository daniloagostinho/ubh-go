import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapRef: ElementRef

  public map;

  lat: any;
  lng: any;
  isCarroSolicitado: boolean;

  constructor(private geolocation: Geolocation) {

  }

  ionViewDidLoad() {
  }


  ngOnInit() {
    this.map = this.createMap();
    this.geoLocaticacao();
  }

  createMap(location = new google.maps.LatLng(-23.550520, -46.633309)) {
    let mapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    //let mapEl = this.mapRef.nativeElement;
    let mapEl = document.getElementById('map');
    let map = new google.maps.Map(mapEl, mapOptions);
  }

  geoLocaticacao() {
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      console.log(this.lat = geoposition.coords.latitude)
      console.log(this.lng = geoposition.coords.longitude);

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  confirmarCorrida() {
    this.isCarroSolicitado = true;
  }

  cancelarCorrida() {
    this.isCarroSolicitado = false;
  }

}
