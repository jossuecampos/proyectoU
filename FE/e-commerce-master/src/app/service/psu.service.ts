import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class psuService{
    
  private url = 'http://localhost:4000/api/psu'
    constructor(private http: HttpClient) {}

    public getpsu():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getpsuById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getpsuByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/psuproveedor/${pProv}`)
    }
  }