import { Component, OnInit } from '@angular/core';
import {TypicodeService} from '../service/typicode.service'

@Component({
  selector: 'app-symbol-search',
  templateUrl: './symbol-search.component.html',
  styleUrls: ['./symbol-search.component.css']
})
export class SymbolSearchComponent implements OnInit {
  searchName=''
  symbolData=[]

  constructor(private typicodeService:TypicodeService) { }

  ngOnInit(): void {
  }

  findSymbol(){
    this.typicodeService.getShareBySymbol(this.searchName)
    .subscribe((data:any) => {
      this.symbolData = data
    })
  }

  headers = ["id", "symbol", "transaction_price", "volume", "transaction_type", "transaction_date"];

}
