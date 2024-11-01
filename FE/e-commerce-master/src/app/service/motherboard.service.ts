import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class motherboardService{
    
  private url = 'http://localhost:4000/api/motherboard'
    constructor(private http: HttpClient) {}

    public getmotherboard():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getmotherboardById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getmotherboardByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/motherboardproveedor/${pProv}`)
    }
  }
