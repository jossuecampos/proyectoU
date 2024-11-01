import { Component, OnInit } from '@angular/core';
import { monitoresService } from 'src/app/service/monitores.service';
import { procesadoresService } from 'src/app/service/procesadores.service';
import { gpuService } from 'src/app/service/gpu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  proveedores: any[] = [];
  proveedoresCpu: any[] = [];
  allitemsCpu: any;
  proveedoresGpu: any;

  constructor(private cpuService:procesadoresService,private monitoresService: monitoresService, private gpuService:gpuService, private router: Router) {}

  ngOnInit(): void {
    this.monitoresService.getMonitor().subscribe((data) => {
      // Extraer los proveedores únicos
      const allProveedores = data.body.map((monitor: any) => monitor.Proveedor);
      // Eliminar duplicados con Set
      this.proveedores = [...new Set(allProveedores)];
      console.log(this.proveedores)
    });

    this.getCpu()
    this.getGpu()
  }

  getCpu(){
    this.cpuService.getProcesador().subscribe(params => {
      this.allitemsCpu = params.body.map((x:any) => x.Proveedor)
      this.proveedoresCpu = [...new Set(this.allitemsCpu)]
      console.log(this.allitemsCpu)
      console.log(this.proveedoresCpu)
    })
  }

  getGpu(){
    this.gpuService.getgpu().subscribe(params => {
      const allitemsGpu = params.body.map((x:any) => x.Proveedor)
      this.proveedoresGpu = [...new Set(allitemsGpu)]
      console.log(allitemsGpu)
      console.log(this.proveedoresGpu)
    })
  }

  onSelectProveedor(proveedor: any){
    console.log(proveedor)
    this.router.navigate(['monitor',proveedor])
  }

  onSelectProveedorGpu(proveedor: any){
    console.log(proveedor)
    this.router.navigate(['grafica',proveedor])
  }


}
