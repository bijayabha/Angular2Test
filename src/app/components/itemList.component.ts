import { Component } from '@angular/core';

@Component({
     selector: 'itemList',
     templateUrl: './itemList.component.html'
})
  
export class ItemListComponent {
     name : string;
     email : string;
     address: address;
     orders: string[];
     showOrders: boolean;
               
    constructor(){
        this.name = 'Bijaya';
        this.email = 'bijaya.bhandari@softroi.fi';
        this.address = {
            street: 'Erkinpellontie 13 B',
            city: 'Joensuu',
            country: 'Finland'
                
          }
        this.orders = ['Laptop', 'Shoes', 'Watch'];
        this.showOrders = true;
     }
}

interface address{
    street: string;
    city: string;
    country: string;
}


