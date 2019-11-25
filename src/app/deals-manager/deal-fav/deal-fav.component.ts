import { Deal } from '../../model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'item-deal-fav',
  templateUrl: './deal-fav.component.html',
  styleUrls: ['./deal-fav.component.scss']
})
export class DealFavComponent implements OnInit {
  
  @Input() public dealItem: Deal;
  @Output() public buy = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {
  }
}
