import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingListItem } from 'src/models/shoppingListItem';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css'],
})
export class ShopFormComponent implements OnInit {
  @Output() onItemAddEvent = new EventEmitter<ShoppingListItem>();
  model = new ShoppingListItem(0, '', 1, false);
  constructor() {}

  //button to sent new Item from form to parent (shop-list-component)
  onAdd() {
    this.onItemAddEvent.emit(this.model);
    this.model = new ShoppingListItem(0, '', 1, false);
  }

  ngOnInit(): void {}
}
