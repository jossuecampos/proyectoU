import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hddService } from 'src/app/service/hdd.service';

@Component({
  selector: 'app-hdd',
  templateUrl: './hdd.component.html',
  styleUrls: ['./hdd.component.css']
})
export class HddComponent implements OnInit {
  allitems: any;

  constructor(private router:Router, private hddService:hddService) { }

  ngOnInit() {
    this.showItems();
  }

  showItems(){
    this.hddService.gethdd().subscribe((data) => {
      this.allitems = data;
      console.log(this.allitems)
    })
  }

  onSelectitem(item:any){
    console.log(item);
    this.router.navigate(['hdd',item.Nombre],{queryParams:{id:item.id}})//("queryParams muestra la data que quieres enviar en la url.")
  }

}
