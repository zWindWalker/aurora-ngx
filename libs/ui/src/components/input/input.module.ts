import {NgModule} from '@angular/core';
import {AuroraInputComponent} from './input.component';

@NgModule({
    declarations: [
        AuroraInputComponent
    ],
    exports: [
        AuroraInputComponent
    ],
    entryComponents: [AuroraInputComponent]
})
export class InputModule {
}
