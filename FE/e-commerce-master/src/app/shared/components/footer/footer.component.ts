import { Component } from '@angular/core';
import { monitoresService } from 'src/app/service/monitores.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  data: any[] = []

  constructor(private ServiceMonitor: monitoresService){}

  obtener(){
    this.ServiceMonitor.getMonitor().subscribe(data =>{
      this.data = data
      console.log('los datos de monitor es::')
      console.log(this.data)
    })

  }
}
