# ionic2-eddystone-example
example of using evothings/cordova-eddystone plugin with ionic 2

## To Run Demo:
1. Start mock beacon server run 'node outgoing-beacon/index.js'
2. From receiving-app folder run 'npm install'
3. Then from the same folder run 'ionic run android' (I have only tested this example so far on android)
   (make sure you have the ionic cli installed globally and latest version 'npm install -g ionic')
4. Mock beacon data can then be viewed in the ionic 2 app

## To Setup Plugin in Your App
To use a cordova based plugin that is not part of the ionic collection you need to:

1. Add the plugin via 'ionic add cordova-plugin-name'
2. Declare the global variable under src/declaratations.d.ts so that the compiler does not throw an error
3. Only use the plugin after the platform ready promise is returned

Declaration example in src/declarations.d.ts
```typescript
declare var evothings: any;
```
Basic example of running plugin in a Service after platform ready promise is returned
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

Currently it only works if you run the mockbeacon server before you run the ionic app (will fix this issue later). 
