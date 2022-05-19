import { ShoppingListItem } from 'src/models/shoppingListItem';

export const SHOPPINGLISTITEMS: ShoppingListItem[] = [
  {
    id: 1,
    title: 'Mehl',
    description: 'Mehl glatt',
    amount: 500,
    unit: 'gramm',
    done: false,
  },
  {
    id: 2,
    title: 'Milch',
    amount: 0.5,
    unit: 'liter',
    done: true,
  },
  {
    id: 3,
    title: 'Eier',
    amount: 8,
    done: false,
  },
  {
    id: 4,
    title: 'Mineralwasser',
    amount: 2,
    unit: 'liter',
    done: true,
  },
  {
    id: 5,
    title: 'Cola',
    amount: 1.5,
    unit: 'liter',
    done: true,
  },
];
