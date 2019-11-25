
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DealsManagerComponent, DealComponent, DealFavComponent } from '.';
import { EffectsModule } from '@ngrx/effects';
import { DealsManagerEffects } from './store/deals-manager.effects';
import { StoreModule } from '@ngrx/store';
import * as fromDeals from '../reducers/search';
import { DealsManagerService } from './store/deals-manager.service';


@NgModule({
  declarations: [DealsManagerComponent, DealComponent, DealFavComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDeals.searchFeatureKey,
      fromDeals.reducer
    ),
    EffectsModule.forFeature([DealsManagerEffects])
  ],
  exports: [DealsManagerComponent, DealComponent, DealFavComponent],
  providers: [DealsManagerService],
})
export class DealsManagerModule {}
