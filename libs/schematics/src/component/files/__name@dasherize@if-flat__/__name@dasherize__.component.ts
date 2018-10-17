import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit, OnDestroy {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    constructor() {
    }


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///



    ngOnInit() {

    }

    ngOnDestroy(): void {
    }



    ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
