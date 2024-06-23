import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/assets/environments/environment.development';
import { GeneralFilter } from 'src/app/_model/filter/GeneralFilter';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  url:string = `${environment.HOST_URL}/general`;

  constructor(private http: HttpClient) { }

  listar(): Observable<GeneralFilter> {
    
    return this.http.get<GeneralFilter>(this.url);
  }

}
