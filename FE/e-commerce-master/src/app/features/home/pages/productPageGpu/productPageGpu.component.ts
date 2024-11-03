import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { gpuService } from 'src/app/service/gpu.service';

@Component({
  selector: 'app-productPageGpu',
  templateUrl: './productPageGpu.component.html',
  styleUrls: ['./productPageGpu.component.css']
})
export class ProductPageGpuComponent implements OnInit {
  productId:any;
  item:any;

  constructor(private router:Router, private ActRouter: ActivatedRoute, private gpuService: gpuService) { }

  ngOnInit() {
  // Acceder al estado pasado durante la navegación
  this.ActRouter.queryParams.subscribe( params => {
    this.productId = params['id']
    console.log(this.productId)
  });
  this.getProduct()

}

getProduct(){
  this.gpuService.getgpuById(this.productId).subscribe((data)=>{
    this.item = data;
    console.log(this.item)
  })
    
}

}
