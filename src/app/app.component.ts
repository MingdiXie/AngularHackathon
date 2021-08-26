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
  mostGainers = [{ticker: "LWAC", changes: 8.18, price: "16.98", changesPercentage: "92.95454", companyName: "Locust Walk Acquisition Corp."}]
  mostLosers = [{ticker: "LWAC", changes: 8.18, price: "16.98", changesPercentage: "92.95454", companyName: "Locust Walk Acquisition Corp."}]
  change = [{symbol:"FB", change: 1}]
  reportedData ={}
  ngOnInit(): void{
    this.totalMarketValue()
    this.topFive()
    this.bottomFive()
    this.mySharesChange()
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
        this.mostGainers = data.mostGainerStock.slice(0,5)
        this.mostGainers.forEach(subData => {
          subData.changesPercentage = subData.changesPercentage.substring(0,5)
        })
      }
    )
  }

  bottomFive(){
    this.typicodeService.getBottomFive().subscribe(
      (data:any) => {
        this.mostLosers = data.mostLoserStock.slice(0,5)
        this.mostLosers.forEach(subData => {
          subData.changesPercentage = subData.changesPercentage.substring(0,6)
        })
        console.log(this.mostLosers)
      }
    )

  }

  mySharesChange(){
    this.typicodeService.getMyStockChanges().subscribe(
      (data:any) => { this.change = data})
      
  }
  
}
