import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getRequestDataEmpresa(route: string, token?: string){

    let config:any = {
      responseType: "json"
    }
    
    if(token){
      const heder =new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['herders'] = heder
    }


    return this.http.get(route, config);
  }
}
