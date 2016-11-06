export interface EddystoneBeaconUID {
    name: string;
    address: string,
    rssi: number,
    scanRecord: string,
    advertisementData: Object,
    __isConnected: boolean,
    txPower: number,
    nid: Object,
    bid: Object,
    voltage: number,
    temperature: number,
    adv_cnt: number,
    dsec_cnt: number
}