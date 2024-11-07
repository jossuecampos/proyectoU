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
  isMenuVisible: boolean = false;

  constructor(private cpuService:procesadoresService,private monitoresService: monitoresService, private gpuService:gpuService, private router: Router) {}

  ngOnInit(): void {
    // this.monitoresService.getMonitor().subscribe((data) => {
    //   // Extraer los proveedores únicos
    //   const allProveedores = data.body.map((monitor: any) => monitor.Proveedor);
    //   // Eliminar duplicados con Set
    //   this.proveedores = [...new Set(allProveedores)];
    //   console.log(this.proveedores)
    // });

    this.getCpu()
    this.getGpu()
    this.toggleMenu()
  }

 

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
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
onSelectProductoCpu(){
  this.router.navigate(['/cpu']);
}

  onSelectProducto() {
    this.isMenuVisible = true;
    this.router.navigate(['/monitor']);
  }

  onSelectProveedorGpu(){
    this.router.navigate(['/grafica'])
  }

  onSelectProveedorPSU(){
    this.router.navigate(['/PSU'])
  }

  onSelectProveedorRAMS(){
    this.router.navigate(['/RAMS'])
  }

}
