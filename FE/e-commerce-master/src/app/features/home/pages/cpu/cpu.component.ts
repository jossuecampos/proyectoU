import { Component, OnInit } from '@angular/core';
import { procesadoresService } from 'src/app/service/procesadores.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {


  allitems: any;
  onlyProveedores:any
  constructor(private cpuService:procesadoresService) { }

  ngOnInit() {
    this.showItems();
  }

  showItems(){
    this.cpuService.getProcesador().subscribe((data) => {
      this.allitems = data;
      console.log('datos de cpu:',this.allitems)
    })
  }

  onSelectitem(item:any){

  }


/*
      this.monitoresService.getMonitor().subscribe((data) => {
      // Extraer los proveedores únicos
      const allProveedores = data.body.map((monitor: any) => monitor.Proveedor);
      // Eliminar duplicados con Set
      this.proveedores = [...new Set(allProveedores)];
      console.log(this.proveedores)
 */

}
