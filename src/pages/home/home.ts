import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isCarroSolicitado: boolean;

  constructor(public navCtrl: NavController) {
    this.isCarroSolicitado = false;
  }

  confirmarCorrida() {
    this.isCarroSolicitado = true;
  }

  cancelarCorrida() {
    this.isCarroSolicitado = false;
  }
}
