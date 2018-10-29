import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Input() data: any = null;
    @Input() index: Number = 0;

    comment_modal_visiable: Boolean = false;

    constructor() {
    }

    ngOnInit() {
    }


}
