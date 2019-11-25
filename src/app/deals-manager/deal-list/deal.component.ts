import { Deal, Sort } from '../../model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {
  
  public sort: Sort;
  
  @Input() public dealList: Deal[];
  @Output() public favDealEvent = new EventEmitter<Deal>();
  @Output() public sortEvent = new EventEmitter<Sort>();

  constructor() {}

  ngOnInit() {
  }

  setSort() {
      this.sortEvent.emit(this.sort);
  }

  addFavoriteDeal() {
    this.favDealEvent.emit();
  }
}
