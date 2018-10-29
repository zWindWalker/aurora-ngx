import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceComponent} from './containers/invoice.component';
import {RouterModule} from '@angular/router';
import {RoomListComponent} from './components/room-list/room-list.component';
import {ProductComponent} from './components/room-list/product/product.component';
import {QuotationService} from './services/quotation.service';
import {ProductCommentComponent} from './components/product-comment/product-comment.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: InvoiceComponent,
            }
        ])
    ],
    declarations: [
        InvoiceComponent,
        RoomListComponent,
        ProductComponent,
        ProductCommentComponent
    ],
    providers: [QuotationService]
})
export class InvoiceModule {
}
