import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { BrowserModule } from '@angular/platform-browser';
import { AcerComponent } from 'src/app/features/home/pages/monitores/acer/acer.component';
import { GpuComponent } from 'src/app/features/home/pages/gpu/gpu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    AcerComponent,
    GpuComponent
  ],
  imports: [
    DividerModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    BrowserModule,
    
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
