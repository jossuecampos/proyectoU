import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RAMSComponent } from '../RAMS/RAMS.component';
import { ramService } from 'src/app/service/ram.service';

@Component({
  selector: 'app-ProductPageRAMS',
  templateUrl: './ProductPageRAMS.component.html',
  styleUrls: ['./ProductPageRAMS.component.css']
})
export class ProductPageRAMSComponent implements OnInit {
  productId: any;
  item: any;

  constructor(private router: Router, private Arouter: ActivatedRoute, private ramsService: ramService) { }

  ngOnInit() {
    this.Arouter.queryParams.subscribe( params => {
      this.productId = params['id']
      console.log(this.productId)
  });
  this.getProduct()
  }

  getProduct(){
    this.ramsService.getramById(this.productId).subscribe((data)=>{
      this.item = data;
      console.log('data del producto:',this.item)
    })
  }
}
