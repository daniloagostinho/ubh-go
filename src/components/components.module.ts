import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { IonicPageModule } from 'ionic-angular';
import { PikupComponent } from './pikup/pikup';
import { AvailableCarsComponent } from './available-cars/available-cars';
@NgModule({
	declarations: [MapComponent,
    PikupComponent,
    AvailableCarsComponent],
	imports: [
    IonicPageModule.forChild(MapComponent),

  ],
  entryComponents: [
    MapComponent,
    PikupComponent,
    AvailableCarsComponent
  ],
	exports: [MapComponent,
    PikupComponent,
    AvailableCarsComponent]
})
export class ComponentsModule {}
