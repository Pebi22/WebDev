export class ShoppingListItem {
  id: number;
  title: string;
  description?: string;
  amount: number;
  unit?: string;
  done: boolean;

  constructor(id: number, title: string, amount: number, done: boolean) {
    this.id = id;
    this.title = title;
    this.amount = amount;
    this.done = done;
  }
}
