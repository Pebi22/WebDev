import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingListItem } from 'src/models/shoppingListItem';
import { ShoppingApiService } from 'src/app/services/shopping-api.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent implements OnInit {
  @Input() shoppingListItem!: ShoppingListItem;
  @Output() onItemDeleteEvent = new EventEmitter<number>();
  @Output() onItemUpdateEvent = new EventEmitter<ShoppingListItem>();
  constructor(shopingApi: ShoppingApiService) {}

  ngOnInit(): void {}

  //toggles item done/open
  toggleCompleted() {
    this.shoppingListItem.done = !this.shoppingListItem.done;

    this.onItemUpdateEvent.emit(this.shoppingListItem);
  }
  //deletes Item
  btnDelete(): void {
    this.onItemDeleteEvent.emit(this.shoppingListItem.id);
  }
}
