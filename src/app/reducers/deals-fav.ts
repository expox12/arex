import { Action, createReducer, on, State } from '@ngrx/store';
import * as DealsManagerActions from '../deals-manager/store/deals-manager.actions';
import { Deal } from '../model';

export const favoritesDealsFeatureKey = 'favoritesDealsManager';

export interface FavoritesDealsManagerState {
    favoritesDeals: Deal[];
}

export const initialState: FavoritesDealsManagerState = {
    favoritesDeals: []
};

const favoritesDealsManagerReducer = createReducer(initialState, 
    on(DealsManagerActions.loadFavoritesDeals, state => state),
    on(DealsManagerActions.loadFavoritesDealsSuccess, (state, payload) => (
        { ...state, favoritesDeals: payload.deals }
    )),
    on(DealsManagerActions.addFavoriteDeal, (state, payload) => (
        {...state, favoritesDeals: [...state.favoritesDeals, payload.deal]}
    ))
);

export function reducer(state: FavoritesDealsManagerState | undefined, action: Action) {
    return favoritesDealsManagerReducer(state, action);
}