import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {
  ChangingStatsPage,
  PropertyDefinitionsPage,
  RawDataPage,
  TabsPage
} from '../pages';
import { ScanBeaconsCardComponent } from '../shared';
import { BeaconService } from '../services';

@NgModule({
  declarations: [
    MyApp,
    ChangingStatsPage,
    PropertyDefinitionsPage,
    RawDataPage,
    TabsPage,
    ScanBeaconsCardComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChangingStatsPage,
    PropertyDefinitionsPage,
    RawDataPage,
    TabsPage,
    ScanBeaconsCardComponent
  ],
  providers: [BeaconService]
})
export class AppModule { }
