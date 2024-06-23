import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment.development';
import { Proyecto } from 'src/app/_model/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url:string = `${environment.HOST_URL}/proyecto`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Proyecto[]> {
    
    return this.http.get<Proyecto[]>(this.url);
  }

  listarPorId(id: string): Observable<Proyecto> {
    
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  registrar(Proyecto: Proyecto): Observable<any> {
    
    return this.http.post(`${this.url}`,Proyecto);
  }

  modificar(id:number,Proyecto: Proyecto): Observable<any> {
    
    return this.http.put(`${this.url}/${id}`,Proyecto);
  }

  eliminar(id: string): Observable<any> {
    
    return this.http.delete(`${this.url}/${id}`);
  }
}
