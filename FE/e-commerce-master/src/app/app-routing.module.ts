import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AcerComponent } from './features/home/pages/monitores/acer/acer.component';
import { GpuComponent } from './features/home/pages/gpu/gpu.component';
import { MotherboardComponent } from './features/home/pages/motherboard/motherboard.component';

import { ProductPageComponent } from './features/home/pages/productPage/productPage.component';
import { CpuComponent } from './features/home/pages/cpu/cpu.component';
import { ProductPageGpuComponent } from './features/home/pages/productPageGpu/productPageGpu.component';
import { ProductPageMotherboardComponent } from './features/home/pages/productPageMotherboard/productPageMotherboard.component';
import { ProductPageCpuComponent } from './features/home/pages/productPageCpu/productPageCpu.component';
import { HddComponent } from './features/home/pages/hdd/hdd.component';
import { ProductPageHddComponent } from './features/home/pages/productPageHdd/productPageHdd.component';
import { CpuCoolerComponent } from './features/home/pages/cpuCooler/cpuCooler.component';
import { ProductPageCpuCoolerComponent } from './features/home/pages/productPageCpuCooler/productPageCpuCooler.component';

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: '', component: LayoutComponent,
              children: [
                  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
                  {path: 'monitor',component: AcerComponent},
                  {path: 'grafica',component: GpuComponent},
                  {path: 'cpu',component: CpuComponent},
                  {path: 'motherboard',component: MotherboardComponent},
                  {path: 'hdd',component: HddComponent},
                  {path: 'cpuCooler',component: CpuCoolerComponent},
                  {path:'Monitor/:item',component:ProductPageComponent},
                  {path:'Grafica/:item',component:ProductPageGpuComponent},
                  {path:'Motherboard/:item',component:ProductPageMotherboardComponent},
                  {path:'Procesador/:item',component:ProductPageCpuComponent},
                  {path:'hdd/:item',component:ProductPageHddComponent},
                  {path:'cpuCooler/:item',component:ProductPageCpuCoolerComponent}
                  // { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                  // { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                  // { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                  // { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                  // { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
              ]
          },
          // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
          // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
          //{ path: 'notfound', component: PageNotFoundComponent },
          { path: '**', redirectTo: '/notfound' },
      ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
