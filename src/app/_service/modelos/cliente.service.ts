import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment.development';
import { Cliente } from 'src/app/_model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = `${environment.HOST_URL}/cliente`;

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    
    return this.http.get<Cliente[]>(this.url);
  }

  listarPorId(id: string): Observable<Cliente> {
    
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  registrar(Cliente: Cliente): Observable<any> {
    
    return this.http.post(`${this.url}`,Cliente);
  }

  modificar(id:number,Cliente: Cliente): Observable<any> {
    
    return this.http.put(`${this.url}/${id}`,Cliente);
  }

  eliminar(id: string): Observable<any> {
    
    return this.http.delete(`${this.url}/${id}`);
  }
}
