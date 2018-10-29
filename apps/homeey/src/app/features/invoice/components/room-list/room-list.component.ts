import {Component, Input, OnInit} from '@angular/core';
import {rotate} from '../../animations/rotate.animation';
import {QuotationService} from '../../services/quotation.service';

@Component({
    selector: 'room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.scss'],
    animations: [rotate]
})
export class RoomListComponent implements OnInit {
    @Input('data') room_list: any = [];


    constructor(private qtnServ: QuotationService) {
    }

    ngOnInit() {
    }

    toggleDetail = index => {
        this.room_list[index].show_detail = !this.room_list[index].show_detail;
    };

}
