import {NgModule} from '@angular/core';

import {AuroraButtonComponent} from "./button.component";


@NgModule({
    declarations: [
        AuroraButtonComponent
    ],
    exports: [
        AuroraButtonComponent
    ]
})
export class ButtonModule {
}
