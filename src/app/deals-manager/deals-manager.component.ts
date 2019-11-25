import { Deal } from '../model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DealsManagerService } from './store/deals-manager.service';

@Component({
  selector: 'app-deals-manager',
  templateUrl: './deals-manager.component.html',
  styleUrls: ['./deals-manager.component.scss']
})
export class DealsManagerComponent implements OnInit {
  public dealList$: Observable<Deal[]>;
  
  constructor(private service: DealsManagerService) {}

  ngOnInit() {
    this.dealList$ = this.service.getDealsList$();
    this.service.searchDefaultDeals();
  }
}
