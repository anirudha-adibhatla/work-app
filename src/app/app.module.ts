import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MainSideBarComponent } from './main-side-bar/main-side-bar.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSideBarComponent,
    MainNavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
