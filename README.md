# ionic2-eddystone-example
example of using evothings/cordova-eddystone plugin with ionic 2

## To Run:
1. Start mock beacon server run 'node outgoing-beacon/index.js'
2. From receiving-app folder run 'npm install'
3. Then from the same folder run ionic run android or ionic run ios  
   (make sure you have the ionic cli installed globally and latest version 'npm install -g ionic')
4. Mock beacon data can then be viewed in the ionic 2 app

## Notes
To use a cordova based plugin that is not part of the ionic collection you need to add the plugin via ionic add 'cordove-plugin-name'
Make sure to use the global variable only after the platform ready promis is returned

Basic Example when using cordova plugin global variable in a service

```typescript
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
```

Since this is a an example testing out a cordova eddystone plugin, it will not work / display data if you try ionic serve.

This is just a basic example which has only been tested with https://github.com/don/node-eddystone-beacon as the mock beacon. 

