import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchFeatureKey, SearchState } from 'src/app/reducers/search';

const getDealsManagerState = createFeatureSelector<SearchState>(
    searchFeatureKey
);

export const getFavoritesDeals = createSelector(
    getDealsManagerState,
  (state: SearchState) => state.favorites.dealList
);

export const getDeals = createSelector(
    getDealsManagerState,
  (state: SearchState) => state.deals
);

export const getCurrentQuery = createSelector(
    getDealsManagerState,
  (state: SearchState) => state.deals.query);

export const getCurrentFavoriteQuery = createSelector(
    getDealsManagerState,
  (state: SearchState) => state.favorites.query
);

export const isLoading = createSelector(
    getDealsManagerState,
  (state: SearchState): boolean => state.loading
);

export const getCurrentSort = createSelector(
    getDealsManagerState,
  (state: SearchState) => state.deals.sort
);