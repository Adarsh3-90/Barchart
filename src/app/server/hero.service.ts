import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import jsonData from './db.json'
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http : HttpClient) { }

  Getchartinfo(){
    return this.http.get("http://localhost:8000/chartdata");
    
  }
  
}
