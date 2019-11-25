import { createAction, props } from '@ngrx/store';
import { Deal, SortNameType, SortOrderType, Sort } from '../../model';

export const loadDeals = createAction(
  '[DealManager] Load Deals'
);

export const loadDealsSuccess = createAction(
  '[DealManager] Load Deals Success',
  props<{ deals: Array<Deal> }>()
);

export const loadFavoritesDeals = createAction(
  '[DealManager] Load Favorites Deals'
);

export const loadFavoritesDealsSuccess = createAction(
  '[DealManager] Load Favorites Deals Success',
  props<{ deals: Array<Deal> }>()
);

export const loadDealsError = createAction(
  '[DealManager] Load Deals Error'
);

export const toggleFavoriteDeal = createAction(
  '[DealManager] Toggle Favorite Deal',
  props<{ deal: Deal }>()
)

export const addFavoriteDeal = createAction(
  '[DealManager] Add Favorite Deal',
  props<{ deal: Deal }>()
);

export const removeFavoriteDeal = createAction(
  '[DealManager] Remove Favorite Deal',
  props<{ deal: Deal }>()
);

export const searchFavoritesDeals = createAction(
  '[DealManager] Search Favorites Deals',
  props<{ query: string }>()
);

export const searchFavoritesDealsComplete = createAction(
  '[DealManager] Search Favorites Deals Complete',
  props<{ favoritesDeals: Array<Deal> }>()
);

export const searchDeals = createAction(
  '[DealManager] Search Deals',
  props<{ query: string, sort: Sort }>()
);

export const searchDealsComplete = createAction(
  '[DealManager] Search Deals Complete',
  props<{ deals: Array<Deal> }>()
);

export const SearchDealsError = createAction(
  '[DealManager] Search Deals Error'
);
