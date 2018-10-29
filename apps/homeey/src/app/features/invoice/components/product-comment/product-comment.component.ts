import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'product-comment',
    templateUrl: './product-comment.component.html',
    styleUrls: ['./product-comment.component.scss']
})
export class ProductCommentComponent implements OnInit, OnDestroy {

    ///-----------------------------------------------  Variables   -----------------------------------------------///
    @Input() visible: Boolean = false;
    @Output() close = new EventEmitter();

    value = null
    comment_list = [
        {
            id: '001',
            text: 'Comment 1'
        },
        {
            id: '002',
            text: 'Comment 2'
        },
        {
            id: '003',
            text: 'Comment 3'
        },
        {
            id: '004',
            text: 'Comment 4'
        }
    ];

    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler(event: KeyboardEvent) {
        this.onClose();
    }

    constructor(
        private eRef: ElementRef,
        private cd: ChangeDetectorRef
    ) {
    }

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


    ngOnInit() {

    }

    ngOnDestroy(): void {
    }


    ///-----------------------------------------------  Main Functions  -----------------------------------------------///

    newComment = e => {
        this.comment_list.push({
            id: '00x',
            text: this.value
        });

    };

    onClose = () => {
        this.close.emit();
    };
}
