import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, SharedModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
