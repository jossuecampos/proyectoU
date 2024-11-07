import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { monitoresService } from 'src/app/service/monitores.service';
import { psuService } from 'src/app/service/psu.service';

@Component({
  selector: 'app-ProductPagePSU',
  templateUrl: './ProductPagePSU.component.html',
  styleUrls: ['./ProductPagePSU.component.css']
})
export class ProductPagePSUComponent implements OnInit {
  productId: any;
  item: any;

  constructor(private router: Router, private Arouter: ActivatedRoute, private PSUservice: psuService) { }

  ngOnInit() {
      // Acceder al estado pasado durante la navegación
  this.Arouter.queryParams.subscribe( params => {
    this.productId = params['id']
    console.log(this.productId)
  });
  this.getProduct();
}

getProduct(){
  this.PSUservice.getpsuById(this.productId).subscribe((data)=>{
    this.item = data;
    console.log('Data del producto:',this.item)
  })
}
}
