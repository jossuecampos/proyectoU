import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class ramService{
    
  private url = 'http://localhost:4000/api/rams'
    constructor(private http: HttpClient) {}

    public getram():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getramById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getramByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/ramsproveedor/${pProv}`)
    }
  }