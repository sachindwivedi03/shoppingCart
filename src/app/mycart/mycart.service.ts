import { Injectable } from '@angular/core';
import { Item } from '../shared/item.model';

@Injectable()
export class MyCartService{

    cartList: Item[] = [];

    constructor(){}

    addToCart(item: Item){
        this.cartList.push(item);
    }

    getItems(){
        return this.cartList;
    }

}