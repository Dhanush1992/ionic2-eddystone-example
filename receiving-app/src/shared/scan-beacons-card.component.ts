import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BeaconService } from '../services';

@Component({
  selector: 'scan-beacons-card',
  template: `
    <ion-card>
      <ion-card-header>No Beacons Found</ion-card-header>
      <ion-card-content>
        <span *ngIf="scanError">Error: {{scanError}}</span>
        <button ion-button full (click)="beaconScan()">
          <span *ngIf="scanError">Try Again</span>
          <span *ngIf="!scanError">Scan for Beacons</span>
        </button>
      </ion-card-content>
    </ion-card>
    `
})
export class ScanBeaconsCardComponent {
  @Input() scanError;
  constructor(
    private navCtrl: NavController,
    private beaconService: BeaconService
  ) { }

  beaconScan() {
    this.beaconService.startScan();
  }
}