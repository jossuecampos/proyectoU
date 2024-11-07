import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {psuService} from 'src/app/service/psu.service';

@Component({
  selector: 'app-PSU',
  templateUrl: './PSU.component.html',
  styleUrls: ['./PSU.component.css']
})
export class PSUComponent implements OnInit {

  allitems:any
  constructor(private router: Router, private Arouter:ActivatedRoute, private psuService: psuService) { }

  ngOnInit() {
    this.showitem()
  }

    showitem(){
      this.psuService.getpsu().subscribe((data)=>{
        this.allitems = data;
        console.log('prueba psu', this.allitems);
      })
    }

    onSelectitem(items:any){
      console.log('articulo seleccionado:',items)
      this.router.navigate(['PSU',items.Nombre],{ queryParams: { id: items.id } })
    }
}
