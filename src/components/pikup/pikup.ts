import { Component } from '@angular/core';

/**
 * Generated class for the PikupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pikup',
  templateUrl: 'pikup.html'
})
export class PikupComponent {

  text: string;

  constructor() {
    console.log('Hello PikupComponent Component');
    this.text = 'Hello World';
  }

}
