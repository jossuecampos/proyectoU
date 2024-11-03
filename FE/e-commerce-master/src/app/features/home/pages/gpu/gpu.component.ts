import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { gpuService } from 'src/app/service/gpu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.component.html',
  styleUrls: ['./gpu.component.css']
})
export class GpuComponent implements OnInit {

  routeSubscription: any;
  proveedor: any;
  allitems: any;
  imagenPath: any;

  constructor(private gpuService:gpuService, private aRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
      this.showItems()
  }

  showItems():void {
    this.gpuService.getgpu().subscribe((data) =>{
    this.allitems = data;
    console.log(this.allitems)
    })
  }

  onSelectitem(items:any){
    console.log(items);
    this.router.navigate(['Grafica',items.Nombre],{ queryParams: { id: items.id } })//("queryParams muestra la data que quieres enviar en la url.")
  }



}
