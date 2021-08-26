import { Component, OnChanges, OnInit } from '@angular/core';
import {TypicodeService} from './service/typicode.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'my-app';
  searchName=''
  reportData={}
  singleData={}
  bookValue = 0
  marketValue = {output:""}
  ngOnInit(): void{
    this.TotalMarketValue()
  }

  ngOnChanges(): void{
    this.TotalMarketValue()
  }

  constructor(private typicodeService:TypicodeService){}

  findAll(){
    this.typicodeService.getApiData()
    .subscribe((data)=>{
      console.log(this.reportData)
      this.reportData = data})
  }

  findSymbol(){
    this.typicodeService.getShareBySymbol(this.searchName)
    .subscribe(data => {
      this.singleData = data
    })
  }

  TotalMarketValue(){
    this.typicodeService.getTotalMakertValue().subscribe(
      (data:any) => { this.marketValue = data
      }
    )
  }
}
