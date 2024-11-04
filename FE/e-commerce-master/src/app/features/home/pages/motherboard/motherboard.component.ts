import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { motherboardService } from 'src/app/service/motherboard.service';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent implements OnInit {

  allitems:any
  constructor(private router: Router, private Arouter:ActivatedRoute, private motherboardService:motherboardService) { }

  ngOnInit() {
    this.showitem()
  }

  showitem(){
    this.motherboardService.getmotherboard().subscribe((data)=>{
      this.allitems = data;
      console.log('prueba motherboard:',this.allitems);
    })
  }

  onSelectitem(items:any){
    console.log('articulo seleccionado:',items)
    this.router.navigate(['Motherboard',items.Nombre],{ queryParams: { id: items.id } })//("queryParams muestra la data que quieres enviar en la url.")

  }

}
