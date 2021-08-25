import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  constructor(private http:HttpClient) { }

  getApiData(){
    // return this.http.get("http://demospring-demospring.namdevops9.conygre.com/")
    return this.http.get("http://jsonplaceholder.typicode.com/users/1")
  }
}
