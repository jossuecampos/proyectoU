import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class ssdService{
    
  private url = 'http://localhost:4000/api/ssd'
    constructor(private http: HttpClient) {}

    public getssd():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getssdById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getssdByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/ssdproveedor/${pProv}`)
    }
  }