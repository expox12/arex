import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as DealsManagerActions from './deals-manager.actions';
import { Deal, Sort, defaultSort, getDeals } from '../../model';
import * as DealsManagerSelectors from './deals-manager.selector';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DealsManagerService {

  constructor(private store: Store<Deal[]>) {}
  
  public searchDefaultDeals() {
    this.searchDeals('', defaultSort)
  }

  public searchDeals(query: string, sort: Sort) {
    this.store.dispatch(DealsManagerActions.searchDeals({ query, sort }));
  }

  public searchFavoriteDeals(query: string) {
    this.store.dispatch(DealsManagerActions.searchFavoritesDeals({ query }));
  }

  public addFavDeal(deal: Deal) {
    this.store.dispatch(DealsManagerActions.toggleFavoriteDeal({ deal }))
    this.store.dispatch(
      DealsManagerActions.addFavoriteDeal({
        deal: { ...deal }
      })
    );
  }

  public removeFavDeal(deal: Deal) {
    this.store.dispatch(DealsManagerActions.toggleFavoriteDeal({ deal }))
    this.store.dispatch(
      DealsManagerActions.removeFavoriteDeal({
        deal: { ...deal }
      })
    );
  }
  
  // Selectors
  public getFavoriteDeals$(): Observable<Array<Deal>> {
    return this.store.select(DealsManagerSelectors.getFavoritesDeals);
  }

  public getDealsList$(): Observable<Array<Deal>> {
    return this.store.select(DealsManagerSelectors.getDeals).pipe(map(deals => getDeals(deals)));
  }

  public getCurrentQuery$(): Observable<string> {
    return this.store.select(DealsManagerSelectors.getCurrentQuery);
  }

  public getCurrentFavoriteQuery$(): Observable<string> {
    return this.store.select(DealsManagerSelectors.getCurrentFavoriteQuery);
  }

  public isLoading$(): Observable<boolean> {
    return this.store.select(DealsManagerSelectors.isLoading);
  }

  public getCurrentSort$(): Observable<Sort> {
    return this.store.select(DealsManagerSelectors.getCurrentSort);
  }
}
