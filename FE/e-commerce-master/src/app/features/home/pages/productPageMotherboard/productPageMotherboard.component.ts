import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { motherboardService } from 'src/app/service/motherboard.service';

@Component({
  selector: 'app-productPageMotherboard',
  templateUrl: './productPageMotherboard.component.html',
  styleUrls: ['./productPageMotherboard.component.css']
})
export class ProductPageMotherboardComponent implements OnInit {
  productId: any;
  item: any;

  constructor(private router: Router, private Arouter: ActivatedRoute, private motherBoardService: motherboardService) { }

  ngOnInit() {
      // Acceder al estado pasado durante la navegación
  this.Arouter.queryParams.subscribe( params => {
    this.productId = params['id']
    console.log(this.productId)
  });
  this.getProduct();
  }

  getProduct(){
    this.motherBoardService.getmotherboardById(this.productId).subscribe((data)=>{
      this.item = data;
      console.log('data del producto:',this.item)
    })
  }

}
