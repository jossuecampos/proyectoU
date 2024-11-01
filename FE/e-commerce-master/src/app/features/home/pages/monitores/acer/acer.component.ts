import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { monitoresService } from 'src/app/service/monitores.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acer',
  templateUrl: './acer.component.html',
  styleUrls: ['./acer.component.css']
})
export class AcerComponent implements OnInit, OnDestroy {
  proveedor: string = '';
  allitems: any;
  routeSubscription: Subscription | undefined;
  imagePath: any;
  item: any;

  constructor(private route: ActivatedRoute, private service: monitoresService, private router: Router) {}

  ngOnInit(): void {
    // Nos suscribimos a los cambios en el parámetro 'nombre' de la ruta
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      this.proveedor = params.get('nombre') || '';
      console.log('Proveedor seleccionado:', this.proveedor);
      // Cada vez que el parámetro cambie, llamamos a showItems()
      this.showItems();
    });
  }

  // Método showItems que realiza la llamada al servicio
  showItems(): void {
    this.service.getMonitorByProveedor(this.proveedor).subscribe((data) => {
      this.allitems = data;
      this.imagePath = this.allitems.body.find((x:any)=> x.imagen == '')
      console.log(this.imagePath)
      console.log('Datos actualizados:', this.allitems);
    });
  }

  onSelectitem(item: any){
    console.log(item)
    this.router.navigate(['productMonitor',item.Nombre],{ queryParams: { id: item.id } })//("queryParams muestra la data que quieres enviar en la url.")
    // this.router.navigate(['monitor',proveedor])
  }


  ngOnDestroy(): void {
    // Cancelar la suscripción cuando el componente se destruye para evitar fugas de memoria
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
