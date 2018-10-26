import {NgModule} from '@angular/core';
import {AuroraRadioComponent} from './radio.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    declarations: [
        AuroraRadioComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        AuroraRadioComponent
    ],
    entryComponents: [AuroraRadioComponent]
})
export class RadioModule {
}
