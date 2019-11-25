import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { DealsManagerModule } from './deals-manager/deals-manager.module';
import { ApiService } from './api/api.service';
import { SharedModule } from './shared/shared.moule';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    HttpClientModule,
    DealsManagerModule,
    SharedModule,
    EffectsModule.forRoot([])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
