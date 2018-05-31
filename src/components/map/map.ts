import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {
  isCarroSolicitado: boolean;

  public map;
  @ViewChild('map') mapRef: ElementRef
  constructor() {

  }

  ngOnInit() {
    this.map = this.createMap();
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

  confirmarCorrida() {
    this.isCarroSolicitado = true;
  }

  cancelarCorrida() {
    this.isCarroSolicitado = false;
  }

}
