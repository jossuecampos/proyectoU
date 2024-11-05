import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { cpuCoolerService } from 'src/app/service/cpuCooler.service';

@Component({
  selector: 'app-productPageCpuCooler',
  templateUrl: './productPageCpuCooler.component.html',
  styleUrls: ['./productPageCpuCooler.component.css']
})
export class ProductPageCpuCoolerComponent implements OnInit {
  idItem: any;
  allitem: any;

  constructor(private router: Router, private ActRouter:ActivatedRoute, private cpuCoolerService:cpuCoolerService) { }

  ngOnInit() {
    this.ActRouter.queryParams.subscribe(params =>{
      this.idItem = params['id']
    })
    this.showItem()
  }

  showItem(){
    this.cpuCoolerService.getcpuCoolerById(this.idItem).subscribe((data) => {
      this.allitem = data;
    })
  }

}
