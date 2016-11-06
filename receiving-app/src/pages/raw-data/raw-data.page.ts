import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { BeaconService } from '../../services';
import { EddystoneBeaconUID } from '../../interfaces';

@Component({
    selector: 'raw-data-page',
    templateUrl: 'raw-data.page.html'
})
export class RawDataPage {
    beacon: EddystoneBeaconUID;
    scanError: string;

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
    }

}