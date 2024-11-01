import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { monitoresService } from 'src/app/service/monitores.service';

@Component({
  selector: 'app-productPage',
  templateUrl: './productPage.component.html',
  styleUrls: ['./productPage.component.css']
})
export class ProductPageComponent implements OnInit {

  itemSelected:Subscription | undefined;
  items: any
  productId: any;
  constructor(private router: Router, private route:ActivatedRoute, private monitoresService: monitoresService) { }

  ngOnInit() {
    // Acceder al estado pasado durante la navegación
    this.route.queryParams.subscribe( params => {
      this.productId = params['id']
      console.log(this.productId)
    });
    this.getProduct()

  }

  getProduct(){
    this.monitoresService.getMonitorById(this.productId).subscribe((product) =>{
      this.items = product;
      console.log(this.items)
    })
  }

}
