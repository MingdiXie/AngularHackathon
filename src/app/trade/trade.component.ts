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
  paraSell = {code:'', volume:0}
  buyMsg:string = ''
  sellMsg:string = ''
  ngOnInit(): void {
  }

  clickBuyStock(){
    if(this.para.volume==0){
      this.buyMsg = 'Volume can\'t be 0!'
    }
    else{
        this.typicodeService.buyStock(this.para).subscribe(
          data=> this.buyMsg = 'trade completed!', 
          err => this.buyMsg = 'trade failed! (Might due to symbol code not found)'
        )
      }
    }
  
  clickSellStock(){
    if(this.paraSell.volume==0){
      this.sellMsg = 'Volume can\'t be 0!'
    }
    else{
        this.typicodeService.sellStock(this.paraSell).subscribe(
          data=> this.sellMsg = 'trade completed!', 
          err => this.sellMsg = 'trade failed! (Might due to volume exceed available amount or symbol code not found)'
        )
      }
    }

}
