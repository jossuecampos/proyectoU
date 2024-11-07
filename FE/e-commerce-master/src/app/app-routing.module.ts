import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AcerComponent } from './features/home/pages/monitores/acer/acer.component';
import { GpuComponent } from './features/home/pages/gpu/gpu.component';
import { PSUComponent } from './features/home/pages/PSU/PSU.component';
import { RAMSComponent } from './features/home/pages/RAMS/RAMS.component';

import { ProductPageComponent } from './features/home/pages/productPage/productPage.component';
import { CpuComponent } from './features/home/pages/cpu/cpu.component';
import { ProductPageGpuComponent } from './features/home/pages/productPageGpu/productPageGpu.component';
import { ProductPagePSUComponent } from './features/home/pages/ProductPagePSU/ProductPagePSU.component';
import { ProductPageRAMSComponent } from './features/home/pages/ProductPageRAMS/ProductPageRAMS.component';

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
                  {path: 'PSU' ,component: PSUComponent},
                  {path: 'RAMS' ,component: RAMSComponent},
                  {path:'Monitor/:item',component:ProductPageComponent},
                  {path:'Grafica/:item',component:ProductPageGpuComponent},
                  {path:'PSU/:item',component:ProductPagePSUComponent},
                  {path:'RAMS/:item',component:ProductPageRAMSComponent}
                  
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
