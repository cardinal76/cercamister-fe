import { ComuneModel } from '../model/comune.model';
import { ProvinciaModel } from '../model/provincia.model';
import { RegioneModel } from '../model/regione.model';
import { TipoLicenzaModel } from '../model/tipo-licenza.model';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class AllenatoreService {
  private allenatoreTipologicheUrl = 'http://localhost:8082/api/tipologiche/';
  
  constructor(private http: HttpClient) {}
  
  public getTipoLicenza(): Observable<TipoLicenzaModel[]> {
    return this.http.get<TipoLicenzaModel[]>(
      this.allenatoreTipologicheUrl + "tipo-licenze");
  }

}
