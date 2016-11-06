import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'property-definitions-page',
    templateUrl: 'property-definitions.page.html'
})
export class PropertyDefinitionsPage {
    properties = [
        {
            header: 'Address',
            content: 'Uniquely identiifies the device. The format of the address depends on the host platform. \
            On Android this is the MAC address of the device, on iOS it is a temporary UUID'
        },
        {
            header: 'Rssi',
            content: 'Received signal strength indicator (RSSI), a negative integer reporting the signal strength in decibels. May have the value of 127, which means undefined RSSI value.'
        },
        {
            header: 'txPower',
            content: 'A signed integer, the signal strength in decibels, factory-measured at a range of \
            0 meters.'
        },
        {
            header: 'Voltage',
            content: 'Device\'s battery voltage, in millivolts, or 0 (zero) if device is not battery-powered.'
        },
        {
            header: 'Temperature',
            content: 'Device\'s ambient temperature in 256:ths of degrees Celcius, or 0x8000 if device has no thermometer.'
        },
        {
            header: 'Adv_cnt',
            content: 'Count of advertisement frames sent since device\'s startup.'
        },
        {
            header: 'Dsec_cn',
            content: 'Time since device\'s startup, in deci-seconds (10 units equals 1 second).'
        },
        {
            header: 'Nid',
            content: '10-byte namespace ID.'
        }, {
            header: 'Bid',
            content: '6-byte beacon ID'
        }
    ];
    constructor(private navCtrl: NavController) { }
}