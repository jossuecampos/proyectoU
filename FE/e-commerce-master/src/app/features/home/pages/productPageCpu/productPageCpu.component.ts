import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { procesadoresService } from 'src/app/service/procesadores.service';

@Component({
  selector: 'app-productPageCpu',
  templateUrl: './productPageCpu.component.html',
  styleUrls: ['./productPageCpu.component.css']
})
export class ProductPageCpuComponent implements OnInit {
  productId: any;
  item: any;

  constructor(private router: Router, private ActRouter:ActivatedRoute, private cpuService: procesadoresService) { }


  ngOnInit() {
    // Acceder al estado pasado durante la navegación
    this.ActRouter.queryParams.subscribe( params => {
    this.productId = params['id']
    console.log(this.productId)
  });
  this.getProduct()
  }

  getProduct(){
    this.cpuService.getProcesadorById(this.productId).subscribe((data) => {
      this.item = data;
      console.log('data del producto:',this.item)
    })
  }

}
