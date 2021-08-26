import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get("http://demospring-demospring.namdevops9.conygre.com/")
    // return this.http.get("http://jsonplaceholder.typicode.com/users/1")
  }

  getShareBySymbol(para=''){
    return this.http.get(`http://demospring-demospring.namdevops9.conygre.com/${para}`)
  }

  buyStock(para={code:'', volume: 0}){
    return this.http.post<any>("http://demospring-demospring.namdevops9.conygre.com/buy", 
    {
      symbol: para.code,
      volume: para.volume,
      })
  }

  sellStock(para={code:'', volume: 0}){
    return this.http.post<any>("http://demospring-demospring.namdevops9.conygre.com/sell", 
    {
      symbol: para.code,
      volume: para.volume,
      })
  }

  getTotalMakertValue(){
    return this.http.get("http://demospring-demospring.namdevops9.conygre.com/networth")
  }
  
  getTopFive(){
    return this.http.get("http://demospring-demospring.namdevops9.conygre.com/marketGainers")
  }

}
