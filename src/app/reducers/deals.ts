import { Action, createReducer, on } from '@ngrx/store';
import * as DealsManagerActions from '../deals-manager/store/deals-manager.actions';
import { Deal } from '../model';

export const dealsManagerFeatureKey = 'dealsManager';

export interface DealsManagerState {
    deals: Deal[];
}

export const initialState: DealsManagerState = {
    deals: []
};

const dealsManagerReducer = createReducer(initialState, 
    on(DealsManagerActions.loadDeals, state => state),
    on(DealsManagerActions.loadDealsSuccess, (state, payload) => (
        { ...state, deals: payload.deals }
    ))
    
);

export function reducer(state: DealsManagerState | undefined, action: Action) {
    return dealsManagerReducer(state, action);
}
