import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuroraUiModule} from '@aurora-ngx/ui';
import {AuroraFormsModule} from '@aurora-ngx/forms';

@NgModule({
    imports: [
        CommonModule,
        AuroraUiModule,
        AuroraFormsModule
    ],
    exports: [
        CommonModule,
        AuroraUiModule,
        AuroraFormsModule
    ]
})
export class SharedModule {
}
