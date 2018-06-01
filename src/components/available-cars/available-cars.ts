import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../providers/car/car';
import * as SlidingMarker from 'marker-animate-unobtrusive';

@Component({
  selector: 'available-cars',
  templateUrl: 'available-cars.html'
})
export class AvailableCarsComponent implements OnInit {
  @Input() map: google.maps.Map;
  @Input() isPickupRequested: boolean;

  public carMarkers: Array<google.maps.Marker>;

  constructor(private carService: CarService) {
  }


  ngOnInit() {

  }

  fetchAndRefreshCars() {
    this.carService.getCars(9,9)
      .subscribe(carsData => {

        if (!this.isPickupRequested) {
          (<any>carsData).cars.forEach( car => {
            this.updateCarMarker(car);
          })
        }
      })
  };

  addCarMarker(car) {
    let carMarker = new SlidingMarker({
      map: this.map,
      position: new google.maps.LatLng(car.coord.lat, car.coord.lng),
      icon: '../../../www/img/car-icon.png'
    });

    carMarker.setDuration(2000);
    carMarker.setEasing('linear');

    carMarker.set('id', car.id); // MVCObject()

    this.carMarkers.push(carMarker);
  }


  updateCarMarker(car) {
    for (var i=0, numOfCars=this.carMarkers.length; i < numOfCars; i++) {
      // find car and update it
      if ((<any>this.carMarkers[i]).id === (<any>car).id) {
        this.carMarkers[i].setPosition(new google.maps.LatLng(car.coord.lat, car.coord.lng));
        return;
      }

    }


}

}
