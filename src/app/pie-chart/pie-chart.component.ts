import { Component, OnInit } from '@angular/core';
import {TypicodeService} from '../service/typicode.service'

export interface Response {
  symbol: string,
  quantity: number
}
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  saleData = [
    { name: "-", value: 0 }
  ];  
  size = this.saleData.length
  reportedData =[{symbol:'', quantity:1}]
  constructor(private typicodeService:TypicodeService) { }

  ngOnInit(): void {
    this.typicodeService.getSharesOwnedQuantity()
      .subscribe((data:any)=>{this.reportedData=data})
      this.populate
    }

  populate(){
    this.saleData =[]
    this.reportedData.forEach(element => {
      this.saleData.push({name: element.symbol,value: element.quantity})
    });
    this.size = this.saleData.length 

    this.saleData = [...this.saleData];
    console.log(this.saleData)
  }

  
}
