import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class cpuCoolerService{
    
  private url = 'http://localhost:4000/api/cpuCooler'
    constructor(private http: HttpClient) {}

    public getcpuCooler():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getcpuCoolerById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getcpuCoolerByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/cpuCoolerproveedor/${pProv}`)
    }
  }