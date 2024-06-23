import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment.development';
import { Credito } from 'src/app/_model/Credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  url:string = `${environment.HOST_URL}/credito`;

  constructor(private http: HttpClient) { }

  listar(search?:string,fechIni?:Date,fechFin?:Date): Observable<Credito[]> {
    let params = new HttpParams();

    if (search) {
      params = params.set('search', search);
    }

    if (fechIni) {
      params = params.set('fechIni', fechIni.toISOString());
    }

    if (fechFin) {
      params = params.set('fechFin', fechFin.toISOString());
    }

    return this.http.get<Credito[]>(this.url,{params});
  }

  listarPorId(id: string): Observable<Credito> {
    
    return this.http.get<Credito>(`${this.url}/${id}`);
  }

  registrar(Credito: Credito): Observable<any> {
    
    return this.http.post(`${this.url}`,Credito);
  }

  modificar(id:number,Credito: Credito): Observable<any> {
    
    return this.http.put(`${this.url}/${id}`,Credito);
  }

  eliminar(id: string): Observable<any> {
    
    return this.http.delete(`${this.url}/${id}`);
  }

  cambioEstado(idCredito: number, idCuota: number, publicId: string): Observable<any> {

    const params = new HttpParams()
      .set('idCredito', idCredito)
      .set('idCuota', idCuota)
      .set('publicId', publicId);

    return this.http.get(`${this.url}/cambioEstado`, { params });
  }
}
