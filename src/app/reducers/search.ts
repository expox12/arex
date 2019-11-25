import { DealList, createDefaultDealList, FavoritesList, createDefaultFavoriteList } from '../model';
import * as DealsManagerActions from '../deals-manager/store/deals-manager.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { updateChildObject } from './reducer-helper';

export const searchFeatureKey = 'searchDealsManager';

export interface SearchState {
    deals: DealList,
    favorites: FavoritesList,
    loading: boolean
};

export const initialState: SearchState = {
    deals: createDefaultDealList(),
    favorites: createDefaultFavoriteList(),
    loading: false
};

const searchReducer = createReducer(initialState,
    on(DealsManagerActions.searchDeals, (state, payload) => (
        { ...state, 
            loading: true, deals: { ...state.deals, 
                query: payload.query, sort: payload.sort }}
    )),
    on(DealsManagerActions.searchDealsComplete, (state, payload) => (
        { ...state, 
            loading: false, 
            deals: { ...state.deals, dealList: payload.deals }}
    )),
    on(DealsManagerActions.SearchDealsError, state => (
        { ...state, 
            loading: false }
    )),
    on(DealsManagerActions.toggleFavoriteDeal, (state, payload) => (
        { ...state, 
            deals: { ...state.deals, dealList: updateChildObject(
                state.deals.dealList,
                deal => deal.id === payload.deal.id,
                deal => ({fav: !deal.fav})
            )}
        }
    )),
    on(DealsManagerActions.addFavoriteDeal, (state, payload) => (
        { ...state, 
            favorites: { ...state.favorites, deals: [...state.favorites.dealList, payload.deal]} }
    )),
    on(DealsManagerActions.removeFavoriteDeal, (state, payload) => (
        { ...state, 
            favorites: { ...state.favorites, 
                deals: state.favorites.dealList.filter(item => item.id !== payload.deal.id) }}
    )),
    on(DealsManagerActions.searchFavoritesDeals, (state, payload) => (
        { ...state, 
            loading: true, 
            queryFavorites: payload.query }
    )),
    on(DealsManagerActions.searchFavoritesDealsComplete, (state, payload) => (
        { ...state, 
            favoritesDeals: payload.favoritesDeals, 
            loading: false }
    ))
);
  
export function reducer(state: SearchState | undefined, action: Action) {
    return searchReducer(state, action);
}
