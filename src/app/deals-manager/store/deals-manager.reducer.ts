import { Action, createReducer, on } from '@ngrx/store';
import * as DealsManagerActions from './deals-manager.actions';
import { Deal } from '../../model';

export const dealsManagerFeatureKey = 'dealsManager';

export interface DealsManagerState {
  deals: Deal[];
  favsDeals: Deal[];
}

export const initialState: DealsManagerState = {
  deals: [], favsDeals: []
};

const dealsManagerReducer = createReducer(initialState, 
  on(DealsManagerActions.loadDeals, state => state),
  on(DealsManagerActions.loadDealsSuccess, (state, payload) => ({ ...state, deals: payload.deals })),
  on(DealsManagerActions.loadFavoritesDeals, state => state),
  on(DealsManagerActions.searchDeals, state => state)
);

export function reducer(state: DealsManagerState | undefined, action: Action) {
  return dealsManagerReducer(state, action);
}
