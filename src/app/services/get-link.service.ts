import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetLinkService {

  constructor(private http: HttpClient) {}

  getLinks(id:number):Observable<any> {
    return this.http.get('http://localhost:1337/api/paylinks/'+id+'?populate=*');
  }

  editLinks(id:number, payment:any): Observable<any>{
    return this.http.put('http://localhost:1337/api/paylinks/'+id+'', payment);
  }

}
