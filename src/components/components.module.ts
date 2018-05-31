import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { IonicPageModule } from 'ionic-angular';
import { PikupComponent } from './pikup/pikup';
@NgModule({
	declarations: [MapComponent,
    PikupComponent],
	imports: [
    IonicPageModule.forChild(MapComponent),

  ],
  entryComponents: [
    MapComponent,
    PikupComponent
  ],
	exports: [MapComponent,
    PikupComponent]
})
export class ComponentsModule {}
