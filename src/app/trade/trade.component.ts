import { Component, OnInit } from '@angular/core';
import {TypicodeService} from '../service/typicode.service'

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  constructor(private typicodeService:TypicodeService) { }

  para = {code:'', volume:0}
  ngOnInit(): void {
  }

  clickBuyStock(){
    // this.typicodeService.buyStock(this.para)
    // .subscribe((data:any)=> {console.log(data)})
    // console.log(this.para)
    this.typicodeService.buyStock(this.para).subscribe()
    }
  


}
