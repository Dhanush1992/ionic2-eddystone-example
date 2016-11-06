import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, LoadingController, Events } from 'ionic-angular';

import { EddystoneBeaconUID } from '../../interfaces';

@Component({
    selector: 'raw-data-page',
    templateUrl: 'raw-data.page.html'
})
export class RawDataPage {
    beacon: EddystoneBeaconUID;
    scanError: string;
    ready: boolean = false
    loading: any;

    constructor(
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private ref: ChangeDetectorRef,
        private events: Events,
    ) { }

    ionViewWillEnter() {
        if (!this.ready) {
            this.loading = this.loadingCtrl.create({
                content: "Loading...",
            });
            this.loading.present();
        }
        // see beacon.service.ts for data publish event
        this.events.subscribe('beaconData', (beaconData) => {
            this.scanError = beaconData[0];
            if (this.scanError) {
                this.loading.dismiss(); return;
            };
            /*
                Triggering change detection manually every second to show latest
                beacon. (otherwise view will only update on new navigation or chagne of tabs)
            */
            setTimeout(() => {
                if (!this.scanError) {
                    this.beacon = beaconData[1];
                    this.ref.detectChanges();
                    if (!this.ready) {
                        this.loading.dismiss();
                        this.ready = true;
                    };
                };
            }, 1000)
        });
    }

    ionViewWillLeave() {
        this.events.unsubscribe('beacon');
    }
}