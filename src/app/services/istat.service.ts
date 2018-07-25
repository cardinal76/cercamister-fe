import { ComuneModel } from '../model/comune.model';
import { ProvinciaModel } from '../model/provincia.model';
import { RegioneModel } from '../model/regione.model';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class IstatService {
  private istatUrl = 'http://localhost:9092/api/v1.0/istat/';
  
  constructor(private http: HttpClient) {}
  
  public getRegioni(): Observable<RegioneModel[]> {
    return this.http.get<RegioneModel[]>(
      this.istatUrl + "regioni");
  }
  
  public getProvincie(regione: string): Observable<ProvinciaModel[]> {
    return this.http.get<ProvinciaModel[]>(
      this.istatUrl + "provincie/" + regione);
  }
  
  public getComuni(provincia: string): Observable<ComuneModel[]> {
    return this.http.get<ComuneModel[]>(
      this.istatUrl + "comuni/" + provincia);
  }
}
