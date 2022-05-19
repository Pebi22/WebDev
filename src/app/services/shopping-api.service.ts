import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShoppingListItem } from 'src/models/shoppingListItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShoppingApiService {
  private shoppingUrl = 'http://localhost:3004/shoppinglistitems';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  //GET list of all item from server
  getShoppingList(): Observable<ShoppingListItem[]> {
    return this.http.get<ShoppingListItem[]>(this.shoppingUrl);
  }
  //GET specific item via id from server
  getShoppingListItem(id: number): Observable<ShoppingListItem> {
    const url = `${this.shoppingUrl}/${id}`;
    return this.http.get<ShoppingListItem>(url);
  }
  //UPDATE item on the server
  updateShoppListItem(item: ShoppingListItem): Observable<any> {
    const url = `${this.shoppingUrl}/${item.id}`;
    return this.http.put(url, item, this.httpOptions);
  }
  //ADD new item to the server
  addShopListItem(item: ShoppingListItem): Observable<ShoppingListItem> {
    return this.http.post<ShoppingListItem>(
      this.shoppingUrl,
      item,
      this.httpOptions
    );
  }
  //DELETE an item from the server
  deleteShopListItem(id: number): Observable<ShoppingListItem> {
    const url = `${this.shoppingUrl}/${id}`;

    return this.http.delete<ShoppingListItem>(url, this.httpOptions);
  }
}
