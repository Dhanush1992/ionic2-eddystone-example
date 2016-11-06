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

  /*
  scanning for beacons must be done after platform ready
  cordova plugins will only work when running app on a device
  */
  startScan(init?) {
    this.platform.ready().then(readySource => {
      this.readySource = readySource;
      if (readySource !== "cordova") {
        this.events.publish('beaconData', 'cordova not present', null);

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
    /*
      make sure to add plugin with ionic add cordova-plugin-name for
      evothings global object to be available
      make sure any evothing related functions are only invoked after platform ready
    */
    evothings.eddystone.startScan(
      (beacon) => {
        this.events.publish('beaconData', null, beacon);
        if (loading) loading.dismiss();
      },
      (error) => {
        this.events.publish('beaconData', error, null);
        if (loading) loading.dismiss();
      }
    );
  }

  stopScanning() {
    if (this.readySource !== 'cordova') return;
    evothings.eddystone.stopScan();
  }

}