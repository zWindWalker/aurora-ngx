import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class QuotationService {
    catalogue: Subject<any> = new Subject();
    show_catalogue_modal: Subject<any> = new Subject();
    current_sub_catorary = null;

    constructor() {
    }

    toggleCatalogueModal = (i = null) => {
        this.show_catalogue_modal.next(true);
        this.current_sub_catorary = i;
    };

    submitCatalogue = (catalogue) => {
        this.catalogue.next({
            index: this.current_sub_catorary,
            data: catalogue
        });
        this.toggleCatalogueModal();
    };
}
