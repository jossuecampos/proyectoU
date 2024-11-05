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
    this.toggleMenu()
  }

 

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
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

  onSelectProveedormotherboard(){
    this.router.navigate(['/motherboard'])
  }

  onSelectProveedorHdd(){
    this.router.navigate(['/hdd'])
  }

  onSelectProveedorCpuCooler(){
    this.router.navigate(['/cpuCooler'])
  }

}
