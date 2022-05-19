import { Pipe, PipeTransform } from '@angular/core';

import { ShoppingListItem } from 'src/models/shoppingListItem';

@Pipe({
  name: 'filterview',
})
export class FilterviewPipe implements PipeTransform {
  transform(
    shoppingList: ShoppingListItem[],
    sortOption: string
  ): ShoppingListItem[] {
    switch (sortOption) {
      case 'done':
        return shoppingList.filter((item) => item.done === true);
      case 'open':
        return shoppingList.filter((item) => item.done === false);
      default:
        return shoppingList;
    }
  }
}
