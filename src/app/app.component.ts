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
  mostGainers = {
    mostGainerStock:[{ticker: "LWAC", changes: 8.18, price: "16.98", changesPercentage: "92.95454", companyName: "Locust Walk Acquisition Corp."}]
  }

  ngOnInit(): void{
    this.totalMarketValue()
    this.topFive()
  }

  ngOnChanges(): void{
    this.totalMarketValue()
  }

  constructor(private typicodeService:TypicodeService){}

  findAll(){
    this.typicodeService.getApiData()
    .subscribe((data)=>{
      this.reportData = data})
  }

  findSymbol(){
    this.typicodeService.getShareBySymbol(this.searchName)
    .subscribe(data => {
      this.singleData = data
    })
  }

  totalMarketValue(){
    this.typicodeService.getTotalMakertValue().subscribe(
      (data:any) => { this.marketValue = data
      }
    )
  }

  topFive(){
    this.typicodeService.getTopFive().subscribe(
      (data:any) => {
        this.mostGainers = data
        console.log(this.mostGainers)
        console.log(this.mostGainers.mostGainerStock[0].ticker)
      }
    )
  }
  
}
