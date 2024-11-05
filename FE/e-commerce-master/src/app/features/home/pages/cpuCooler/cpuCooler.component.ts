import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { cpuCoolerService } from 'src/app/service/cpuCooler.service';

@Component({
  selector: 'app-cpuCooler',
  templateUrl: './cpuCooler.component.html',
  styleUrls: ['./cpuCooler.component.css']
})
export class CpuCoolerComponent implements OnInit {
  allItems: any;

  constructor(private ActRouter: ActivatedRoute,private router: Router, private cpuCoolerService: cpuCoolerService) {}

  ngOnInit() {
    this.showItems()
  }

  showItems():void{
    this.cpuCoolerService.getcpuCooler().subscribe((data) => {
      this.allItems = data
      console.log('productos',this.allItems)
    })
  }

  onSelectitem(items:any){
    console.log(items)
    this.router.navigate(['cpuCooler',items.Nombre],{queryParams:{id:items.id}})
  }

}
