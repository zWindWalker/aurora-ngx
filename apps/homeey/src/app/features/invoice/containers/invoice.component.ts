import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

    invoice =   {
        project_name: 'Demo Project 101',
        // project_id: 'XXX',
        total: 16908.81,
        room_list: [
            {
                name: 'Living Room',
                subtotal: 15879.82,
                product_list: [
                    {
                        categories: ['Kitchen', 'Chair'],
                        image: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/65596fam_XXX_v1.tif&wid=650&cvt=jpeg',
                        name: 'Brinley Dining Collection',
                        unit_price: 74.999,
                        note: `REMOVE EXISTING FINISH <br>AVAILABILITY <br>ETA <br>NOTE: XXX`,
                        quantity: 40,
                        subtotal: 3279.96,
                        component_type: 'multiple',
                        specification_list: [
                            {
                                name: 'carcass',
                                image: 'https://www.richelieu.com/documents/docsGr/117/826/4/1178264/1340843_300.jpg',
                                label: 'Melamine Ember H53',
                                unit_price: 20,
                                quantity: 2,
                                subtotal: 40
                            },
                            {
                                name: 'front type',
                                image: 'https://www.richelieu.com/documents/docsGr/117/826/4/1178264/1340843_300.jpg',
                                label: 'Melamine Ember H53',
                                unit_price: 20,
                                quantity: 2,
                                subtotal: 40
                            },
                            {
                                name: 'FRONT MATERIAL',
                                image: 'https://www.richelieu.com/documents/docsGr/101/456/5/1014565/1288559_700.jpg',
                                label: 'Walnut Veneer',
                                unit_price: 20,
                                quantity: 2,
                                subtotal: 40
                            },
                            {
                                name: 'HANDLE',
                                image: 'https://www.richelieu.com/documents/docsGr/118/291/4/1182914/1345388_700.jpg',
                                label: 'White Oak',
                                unit_price: 20,
                                quantity: 2,
                                subtotal: 40
                            },
                            {
                                name: 'DRAWER MOTION',
                                image: 'https://www.richelieu.com/documents/docsGr/101/456/5/1014565/1288559_700.jpg',
                                label: 'Walnut Veneer',
                                unit_price: 20,
                                quantity: 2,
                                subtotal: 40
                            },
                            {
                                name: 'HINGE MOTION',
                                image: 'https://www.richelieu.com/documents/docsGr/101/456/5/1014565/1288559_700.jpg',
                                label: 'Walnut Veneer',
                                unit_price: 20,
                                quantity: 2,
                                subtotal: 40
                            },
                            {
                                name: 'ACCESSORIES',
                                image: 'https://www.richelieu.com/documents/docsGr/117/826/8/1178268/1340847_300.jpg',
                                label: 'Melamine Haze H57',
                                unit_price: 20,
                                quantity: 2,
                                subtotal: 40
                            }
                        ],
                        specification_subtotal: 280
                    },
                    {
                        categories: ['home room', 'Bed room'],
                        image: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/68282_XXX_v1.tif&wid=650&cvt=jpeg',
                        name: 'Wood Keaton Kitchen Island',
                        unit_price: 899.99,
                        note: `REMOVE EXISTING FINISH <br>AVAILABILITY <br>ETA <br>NOTE: XXX`,
                        quantity: 14,
                        subtotal: 12599.86,
                        component_type: 'single',
                    }
                ]
            },
            {
                name: 'Bedroom',
                subtotal: 749.99,
                product_list: [
                    {
                        categories: ['Kitchen', 'Chair'],
                        image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/69447_XXX_v1.tif&wid=650&cvt=jpeg",
                        name:  "Forest Green Samara Sofa",
                        unit_price: 74.999,
                        note: `REMOVE EXISTING FINISH <br>AVAILABILITY <br>ETA <br>NOTE: XXX`,
                        quantity: 1,
                        subtotal: 749.99,
                        component_type: 'single'
                    }
                ]
            }
        ],
        all_room_subtotal: 16629.81,
        shipping_location: [
            {
                name: 'Nagarey',
                fee: 20
            },
            {
                name: 'Fabelio',
                fee: 50
            },
            {
                name: 'Juno Home',
                fee: 9
            }
        ],
        shipping_fee: 0,
        tax_fee: 200,
        payment_type: 'single', // single or divided
        status: 'draft' // draft or final
    };

    constructor() {
    }

    ngOnInit() {
    }

}
