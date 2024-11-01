import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class storreService{
    
  private url = 'http://localhost:4000/api/storre'
    constructor(private http: HttpClient) {}

    public getstorre():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getstorreById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getstorreByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/storreproveedor/${pProv}`)
    }
  }