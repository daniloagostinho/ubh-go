import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { IonicPageModule } from 'ionic-angular';
import { PikupComponent } from './pikup/pikup';
import { IntroComponent } from './intro/intro';

@NgModule({
	declarations: [MapComponent,
    PikupComponent,
    IntroComponent],
	imports: [
    IonicPageModule.forChild(MapComponent),

  ],
  entryComponents: [
    MapComponent,
    PikupComponent,
    IntroComponent
  ],
	exports: [MapComponent,
    PikupComponent,
    IntroComponent]
})
export class ComponentsModule {}
