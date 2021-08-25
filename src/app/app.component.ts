import { Component } from '@angular/core';
import {TypicodeService} from './service/typicode.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  searchName=''
  reportData={}

  constructor(private typicodeService:TypicodeService){}

  findAll(){
    this.typicodeService.getApiData()
    .subscribe((data)=>{
      console.log(this.reportData)
      this.reportData = data})
  }
}
