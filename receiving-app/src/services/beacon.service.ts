import { Injectable } from '@angular/core';
import { Events, Platform, AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class BeaconService {
  private readySource: string;

  constructor(
    private platform: Platform,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private events: Events
  ) {
    this.startScan(true);
  };

  startScan(init?) {
    this.platform.ready().then(readySource => {
      this.readySource = readySource;
      if (readySource !== "cordova") {
        let alert = this.alertCtrl.create({
          title: 'Beacon scanning will only work on a real device',
          buttons: ['Dismiss']
        });
        alert.present();
        return;
      }

      // initial scan
      if (init) {
        this.emitScanResults(); return;
      }

      // user initiated scan
      let loading = this.loadingCtrl.create({
        content: 'Searching ...'
      });

      loading.present().then(() => {
        this.emitScanResults(loading);
      });
    });
  }

  emitScanResults(loading?) {
    evothings.eddystone.startScan(
      (beacon) => {
        this.events.publish('beacon', null, beacon);
        if (loading) loading.dismiss();
      },
      (error) => {
        this.events.publish('beacon', error);
        if (loading) loading.dismiss();
      }
    );
  }

  stopScanning() {
    if (this.readySource !== 'cordova') return;
    evothings.eddystone.stopScan();
  }

}