import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class procesadoresService{
    
  private url = 'http://localhost:4000/api/cpu'
    constructor(private http: HttpClient) {}
    public getProcesador(){
        return this.http.get<any>(`${this.url}`)
    }

    public getProcesadorById(id:any){
        return this.http.get<any>(`${this.url}/${id}`)
    }

    public getProcesadorByProveedor(pProv:any){
        return this.http.get<any>(`${this.url}/cpuproveedor/${pProv}`)
    }
  }