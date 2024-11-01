import {HttpClient} from '@angular/common/http';
import { Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class gpuService{
    
  private url = 'http://localhost:4000/api/gpu'
    constructor(private http: HttpClient) {}

    public getgpu():Observable<any>{
        return this.http.get<any>(this.url)
    }

    public getgpuById(id:any){
      return this.http.get<any>(`${this.url}/${id}`)
    }

    public getgpuByProveedor(pProv:any):Observable<any>{
      return this.http.get<any>(`${this.url}/gpuproveedor/${pProv}`)
    }
  }