import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-sort',
  templateUrl: './shop-sort.component.html',
  styleUrls: ['./shop-sort.component.css'],
})
export class ShopSortComponent implements OnInit {
  @Output() onSortEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  //sends sortOption to parent (shop-list-component)
  sortList(sortoption: string) {
    this.onSortEvent.emit(sortoption);
  }
}
