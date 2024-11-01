import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class hddService{
    
  private url = 'http://localhost:4000/api/hdd'
    constructor(private http: HttpClient) {}

    public gethdd():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public gethddById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public gethddByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/hddproveedor/${pProv}`)
    }
  }