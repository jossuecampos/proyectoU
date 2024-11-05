import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { procesadoresService } from 'src/app/service/procesadores.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent implements OnInit {


  allitems: any;
  onlyProveedores:any
  constructor(private cpuService:procesadoresService,private router:Router,private ActRouter:ActivatedRoute) { }

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
    console.log('dato seleccionado:', item)
    this.router.navigate(['Procesador',item.Nombre],{queryParams:{id: item.id}})//("queryParams muestra la data que quieres enviar en la url.")
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
