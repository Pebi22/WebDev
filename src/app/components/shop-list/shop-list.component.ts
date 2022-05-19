import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingApiService } from 'src/app/services/shopping-api.service';
import { ShoppingListItem } from 'src/models/shoppingListItem';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  shoppingItems: ShoppingListItem[] = [];

  //filter string for displaying only done/open or all items in list
  filter: 'all' | 'open' | 'done' = 'all';

  constructor(private ShoppingApiService: ShoppingApiService) {}

  //calls server for list of items - only called in ngOnInit
  getShoppingList(): void {
    this.ShoppingApiService.getShoppingList().subscribe(
      (shoppingItems) => (this.shoppingItems = shoppingItems)
    );
  }

  //adds item to server
  addItem(newItem: ShoppingListItem): void {
    this.ShoppingApiService.addShopListItem(newItem).subscribe((item) => {
      this.shoppingItems.push(item);
    });
  }
  //deletes item from server
  removeItem(id: number): void {
    this.shoppingItems = this.shoppingItems.filter((item) => item.id !== id);
    this.ShoppingApiService.deleteShopListItem(id).subscribe();
  }
  //updates item on server
  updateItem(item: ShoppingListItem): void {
    this.ShoppingApiService.updateShoppListItem(item).subscribe();
  }
  //receives sortOption from display buttons and sets filter for displaying items
  sortList(sortOption: string) {
    switch (sortOption) {
      case 'done':
        this.filter = 'done';

        break;
      case 'open':
        this.filter = 'open';
        break;

      case 'all':
        this.filter = 'all';
        break;

      default:
        break;
    }
  }

  ngOnInit(): void {
    this.getShoppingList();
  }
}
