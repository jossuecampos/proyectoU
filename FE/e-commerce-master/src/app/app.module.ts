import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { RAMSComponent } from './features/home/pages/RAMS/RAMS.component';
import { PSUComponent } from './features/home/pages/PSU/PSU.component';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { ProductPageComponent } from './features/home/pages/productPage/productPage.component';
import { ProductPageGpuComponent } from './features/home/pages/productPageGpu/productPageGpu.component';
import { ProductPagePSUComponent } from './features/home/pages/ProductPagePSU/ProductPagePSU.component';
import { ProductPageRAMSComponent } from './features/home/pages/ProductPageRAMS/ProductPageRAMS.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductPageGpuComponent,
    PSUComponent,
    RAMSComponent,
    ProductPagePSUComponent,
    ProductPageRAMSComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
