import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { BeaconService } from '../../services';
import { EddystoneBeaconUID } from '../../interfaces';

@Component({
  selector: 'changing-stats-page',
  templateUrl: 'changing-stats.page.html'
})
export class ChangingStatsPage {
  beacon: EddystoneBeaconUID;
  scanError: string;
  keys = ['voltage', 'temperature', 'adv_cnt', 'dsec_cnt']

  constructor(
    private navCtrl: NavController,
    private beaconService: BeaconService,
    private events: Events
  ) { }

  ionViewDidLoad() {
    this.events.subscribe('beacon', (error, beacon) => {
      this.scanError = error;
      if (!this.scanError) this.beacon = beacon;
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('beacon');
    this.beaconService.stopScanning();
  }

}
