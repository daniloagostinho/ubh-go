import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { LoadingController, NavController } from 'ionic-angular';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapRef: ElementRef;

  @Input() isPickupRequested: boolean;

  public map;


  constructor(
    private geolocation: Geolocation,
    public nav: NavController,
    public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
  }


  ngOnInit() {
    this.map = this.createMap();
    this.geoLocaticacao().subscribe(location => {
      this.centerLocation(location);
    })
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
    let loading = this.loadingCtrl.create({
      content: 'Localizando seu carro..'
    });

    loading.present();

    let options = {timeout: 1000., enableHighAccuracy: true}

    let locationObs = Observable.create(observable => {
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
        let lat = geoposition.coords.latitude;
        let lng = geoposition.coords.longitude;

        let location = new google.maps.LatLng(lat, lng);
        console.log('verifica se esta funcionando geo >>> ', location);

        observable.next(location);

        loading.dismiss();

       }).catch((error) => {
         console.log('Error getting location', error);
         loading.dismiss();
       });
    });

    return locationObs;
  }

  centerLocation(location) {
    if(location) {
      this.map.panTo(location);
    } else {
      this.geoLocaticacao().subscribe(currentLocation => {
        this.map.panTo(currentLocation);
      })
    }
  }
}
