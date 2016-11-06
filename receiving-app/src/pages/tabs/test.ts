import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class BeaconService {
    constructor(private platform: Platform) {
        this.startScan();
    }

    startScan() {
        this.platform.ready().then(readySource => {
            if (readySource === 'cordova') {
                evothings.eddystone.startScan(
                    (beacon) => {
                        // do something with beacon data
                    },
                    (error) => {
                        // do something with error
                    }
                );
            };
        });
    }
}
