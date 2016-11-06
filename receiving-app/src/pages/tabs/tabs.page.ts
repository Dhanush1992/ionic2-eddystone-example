import { Component } from '@angular/core';

import { ChangingStatsPage, PropertyDefinitionsPage, RawDataPage } from '../';

@Component({
    templateUrl: 'tabs.page.html'
})
export class TabsPage {
    tab1Root: any = ChangingStatsPage;
    tab2Root: any = RawDataPage;
    tab3Root: any = PropertyDefinitionsPage;

    constructor() {

    }
}