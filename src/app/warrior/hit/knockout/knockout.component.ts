import { Component, Input,Output } from '@angular/core';
import {NodeInfo} from '../../../NodeInfo.model';
@Component({
  selector: 'app-knockout',
  templateUrl: './knockout.component.html',
  styleUrls: ['./knockout.component.css']
})
export class KnockoutComponent {
@Input()  knockoutInfo: NodeInfo  ;

@Output()   roundhousekickInfoFromKnockout: NodeInfo =
new NodeInfo('ROUNDHOUSE KICK', true, false) ;

  isDetailedClicked: boolean=false;
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){

    if(this.knockoutInfo.canBeUnlocked){
    this.knockoutInfo=new NodeInfo('KNOCKOUT',  false, false) ;
    this.roundhousekickInfoFromKnockout = new NodeInfo('ROUNDHOUSE KICK', true, true) ; 
    }
  }
  getBackgroundColor(){
    if(this.knockoutInfo.canBeUnlocked && this.knockoutInfo.isLocked){
    return "rgb(223, 214, 86)";}
    if(!this.knockoutInfo.canBeUnlocked && !this.knockoutInfo.isLocked){
      return " rgb(0, 182, 121)";}
    if(!this.knockoutInfo.canBeUnlocked && this.knockoutInfo.isLocked){
        return " rgb(221, 48, 25)";}
  }

}
