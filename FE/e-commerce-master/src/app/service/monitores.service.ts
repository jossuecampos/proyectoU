import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class monitoresService{
    
  private url = 'http://localhost:4000/api/monitores'
    constructor(private http: HttpClient) {}

    public getMonitor():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getMonitorById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getMonitorByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/proveedor/${pProv}`)
    }
  }