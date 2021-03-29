import { Component, Input, OnInit } from '@angular/core';
import { MyCartService } from 'src/app/mycart/mycart.service';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private myCartService: MyCartService) { }

  ngOnInit(): void {
  }

  onAddToCart(){
    this.myCartService.addToCart(this.item);
  }

}
