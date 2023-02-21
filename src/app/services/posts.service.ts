import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  localizarObjeto(codigoObjeto : string) {
    let url = 'https://viacep.com.br/ws/' + codigoObjeto + '/json/';

    var header = {
      headers: new HttpHeaders()
        .set('Content-Type','application/json')
    }

    return this.http.get(url, header).toPromise();
  }
}
