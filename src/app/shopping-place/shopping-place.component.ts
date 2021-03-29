import { Component, OnInit } from '@angular/core';

import { Item } from '../shared/item.model'
import { ShoppingItemService } from './shopping-items.service';

@Component({
  selector: 'app-shopping-place',
  templateUrl: './shopping-place.component.html',
  styleUrls: ['./shopping-place.component.css']
})
export class ShoppingPlaceComponent implements OnInit {

  items: Item[] = [];

  constructor( private shItemService: ShoppingItemService) { }

  ngOnInit(): void {
    this.items = this.shItemService.getItems();
  }

}
