import { Injectable } from '@angular/core';
import { Item } from '../shared/item.model';

@Injectable()
export class ShoppingItemService{
    
    items: Item[] = 
    [
        new Item('Watch', 'This is nice'),
        new Item('Mouse', 'This is nice'),
        new Item('Watch', 'This is nice'),
        new Item('Mouse', 'This is nice'),
        new Item('Watch', 'This is nice'),
        new Item('Mouse', 'This is nice'),
    ];

    getItems(){
        return this.items.slice();
    }
}