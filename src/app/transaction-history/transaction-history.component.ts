import { Component, OnInit } from '@angular/core';
import {TypicodeService} from '../service/typicode.service'

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  title = 'my-app';
  searchName=''
  allData = [];
  singleData={}
  constructor(private typicodeService:TypicodeService) { }

  ngOnInit(): void {
  }
  
  findAll(){
    this.typicodeService.getApiData()
    .subscribe((data:any)=>{
      console.log(this.allData)
      this.allData = data})
  }

  headers = ["id", "symbol", "transaction_price", "volume", "transaction_type", "transaction_date"];



}
