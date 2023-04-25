import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { MatButtonModule } from '@angular/material/button';
import { OpcoesComponent } from './opcoes/opcoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpcoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-89XM2V72S6'),
    NgxGoogleAnalyticsRouterModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
