import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { MotherboardComponent } from './features/home/pages/motherboard/motherboard.component';
import { CpuComponent } from './features/home/pages/cpu/cpu.component';
import { HddComponent } from './features/home/pages/hdd/hdd.component';
import { CpuCoolerComponent } from './features/home/pages/cpuCooler/cpuCooler.component';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { ProductPageComponent } from './features/home/pages/productPage/productPage.component';
import { ProductPageGpuComponent } from './features/home/pages/productPageGpu/productPageGpu.component';
import { ProductPageMotherboardComponent } from './features/home/pages/productPageMotherboard/productPageMotherboard.component';
import { ProductPageCpuComponent } from './features/home/pages/productPageCpu/productPageCpu.component';
import { ProductPageHddComponent } from './features/home/pages/productPageHdd/productPageHdd.component';
import { ProductPageCpuCoolerComponent } from './features/home/pages/productPageCpuCooler/productPageCpuCooler.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    CpuComponent,
    ProductPageGpuComponent,
    MotherboardComponent,
    CpuCoolerComponent,
    ProductPageMotherboardComponent,
    ProductPageCpuComponent,
    HddComponent,
    ProductPageHddComponent,
    ProductPageCpuCoolerComponent
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
