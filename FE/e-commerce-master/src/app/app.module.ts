import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { MotherboardComponent } from './features/home/pages/motherboard/motherboard.component';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { ProductPageComponent } from './features/home/pages/productPage/productPage.component';
import { ProductPageGpuComponent } from './features/home/pages/productPageGpu/productPageGpu.component';
import { ProductPageMotherboardComponent } from './features/home/pages/productPageMotherboard/productPageMotherboard.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductPageGpuComponent,
    MotherboardComponent,
    ProductPageMotherboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
