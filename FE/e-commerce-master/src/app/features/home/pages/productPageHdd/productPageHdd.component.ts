import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { hddService } from 'src/app/service/hdd.service';

@Component({
  selector: 'app-productPageHdd',
  templateUrl: './productPageHdd.component.html',
  styleUrls: ['./productPageHdd.component.css']
})
export class ProductPageHddComponent implements OnInit {
  idItem: any;
  allItem: any;

  constructor(private router: Router, private ActRouter:ActivatedRoute, private hddService: hddService) { }

  ngOnInit() {
    this.ActRouter.queryParams.subscribe(params =>{
      this.idItem = params['id']
    })
    this.showitem()
  }

  showitem(){
    this.hddService.gethddById(this.idItem).subscribe((data) =>{
      this.allItem = data;
      console.log('producto:',this.allItem)
    })
  }

}
