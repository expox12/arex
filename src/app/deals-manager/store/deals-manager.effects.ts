import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { concatMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import * as DealsManagerActions from './deals-manager.actions';
import { initialState } from './deals-manager.reducer';
import { ApiService } from '../../api/api.service';
import { Store } from '@ngrx/store';
import { SearchState } from 'src/app/reducers/search';

@Injectable()
export class DealsManagerEffects {

  private storeKey = 'dealsList';

  public searchDeals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DealsManagerActions.searchDeals),
      withLatestFrom(this.store$),
      concatMap(([action, state]) =>
        this.api.searchDeals$(action.query, state.favorites.dealList, action.sort).pipe(
          map(res =>
            DealsManagerActions.searchDealsComplete({ deals: res })
          ),
          catchError(err =>
            of(DealsManagerActions.SearchDealsError())
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, 
        private api: ApiService, 
        private store$: Store<SearchState>) {}
}
