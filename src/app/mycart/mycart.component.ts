import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { MyCartService } from './mycart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: 
  [
    './mycart.component.css', 
    '../shopping-place/shopping-item/shopping-item.component.css'
  ]
})
export class MycartComponent implements OnInit {

  items: Item[] = [];

  constructor(private myCartSerice: MyCartService) { }

  ngOnInit(): void {
    this.items = this.myCartSerice.getItems();
  }

  onRemoveFromCart(index: number){
    console.log(index);
    this.items.splice(index, 1);
  }

}
