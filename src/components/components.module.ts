import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [MapComponent],
	imports: [
    IonicPageModule.forChild(MapComponent),

  ],
  entryComponents: [
    MapComponent
  ],
	exports: [MapComponent]
})
export class ComponentsModule {}
