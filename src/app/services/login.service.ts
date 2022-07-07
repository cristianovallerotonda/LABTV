import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  wsAuthorize: string =
    'http://api.labforweb.it:8080/backend/web/index.php/1/authorize';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), //intestazioni della Request
  };

  //posso generare un'identità (authorization code ) lato server
  authorize(user: any): Observable<any> {
    return this.http.post(this.wsAuthorize, user, this.httpOptions);
  }

  wsGetAccessToken: string =
    'http://api.labforweb.it:8080/backend/web/index.php/1/accesstoken'; 

  //con questo metodo posso generare l'Access Token lato Client che mi consentirà di navigare tra tutte le pagine dell'applicazione
  getAccessToken(auth_code: any): Observable<any> {
    return this.http.post(this.wsGetAccessToken, auth_code, this.httpOptions);
  }


  wsGetUserInformation: string =
    'http://api.labforweb.it:8080/backend/web/index.php/1/me'; //POST

  getUserInformation(str: any): Observable<any> {
    const strAccessToken: any = Object.values(str)[0]; //valore compreso gli 8 caratteri del ruolo
    const accesstoken = strAccessToken.slice(0, -8); //l'access token da passare dentro l'header
    console.log(accesstoken);
    const httpOptions1 = {
      headers: new HttpHeaders({ 'X-Access-Token': accesstoken }),
    };
    return this.http.get(this.wsGetUserInformation, httpOptions1);
  }
}
