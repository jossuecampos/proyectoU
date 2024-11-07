import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ramService } from 'src/app/service/ram.service';

@Component({
  selector: 'app-RAMS',
  templateUrl: './RAMS.component.html',
  styleUrls: ['./RAMS.component.css']
})
export class RAMSComponent implements OnInit {
  allitems:any
  constructor(private router: Router, private Arouter:ActivatedRoute, private ramService: ramService) { }

  ngOnInit() {
    this.showItem()
  }

  showItem(){
    this.ramService.getram().subscribe((data)=>{
      this.allitems = data;
      console.log('prueba RAMS',this.allitems);
    })
  }

  onSelectitem(items:any){
    console.log('Articulo seleccionado',items)
    this.router.navigate(['RAMS',items.Nombre],{ queryParams: { id: items.id } })//("queryParams muestra la data que quieres enviar en la url.")
  }
}
