import { Deal, Sort, SortNameType, SortOrderType } from '../model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { compareNumber, compareText } from '../utils/compare.utils';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'assets/data/';

  constructor(private httpClient: HttpClient) {}

  public getDealList$(): Observable<Deal[]> {
    return this.httpClient.get<Deal[]>(this.apiUrl+'deals.json');
  }

  public searchDeals$(query: string, favoriteDeals: Deal[], sort: Sort): Observable<Deal[]> {
    return this.getDealList$().pipe(
      map((res: Deal[]) => {
        let dealList: Deal[];
        for (const deal of res) {
          
          /*let dealFound = this.searchCriteria(deal, query); // SEARCH CRITERIA
          if(!dealFound) break;*/
          
          for(const fav of favoriteDeals) {
            if(deal.id === fav.id) { deal.fav = true }
          }
          dealList.push(deal);
        }
        /*if(dealList.length > 1){
          dealList = this.sortValues(dealList, sort); // SORT
        }*/
        return dealList;
      })

    )
  }

  /*
  private searchCriteria(deal, query) {
    const regExp = new RegExp(query, 'g');
    if(deal.name.match(regExp) || deal.address.match(regExp) 
      || deal.price.toString().match(regExp) || deal.type.toString().match(regExp) 
      || deal.dueDate.match(regExp) || query === '') {
        return deal;
    }
    return null;
  }

  private sortValues(dealList, sort) {
    if(sort.sortNameType === SortNameType.PRICE) {
      dealList.sort((a, b) => compareNumber(a.price, b.price, sort.sortOrderType));
    }else if(sort.sortNameType === SortNameType.DEAL_TYPE) {
      dealList.sort((a, b) => compareNumber(a.type, b.type, sort.sortOrderType));
    }else if(sort.sortNameType === SortNameType.DUE_DATE) {
      dealList.sort((a, b) => compareText(a.dueDate, b.dueDate, sort.sortOrderType));
    }
    return dealList;
  }*/

  
}
