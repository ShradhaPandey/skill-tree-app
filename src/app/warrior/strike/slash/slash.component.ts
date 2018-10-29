import { Component, Input, Output } from '@angular/core';
import {NodeInfo} from '../../../NodeInfo.model';

@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: ['./slash.component.css']
})
export class SlashComponent  {
@Input()  slashInfo: NodeInfo  ;
@Output()   roundhousekickInfoFromSlash: NodeInfo =
new NodeInfo('ROUNDHOUSE KICK', true, false) ;
// @Input() roundhousekickInfoFromKnockout: NodeInfo;

  isDetailedClicked: boolean=false;
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
    if(this.slashInfo.canBeUnlocked){
    this.slashInfo=new NodeInfo('SLASH',  false, false) ;
   
   this.roundhousekickInfoFromSlash = new NodeInfo('ROUNDHOUSE KICK', true, true) ;
  // this.roundhousekickInfoFromKnockout = new NodeInfo('ROUNDHOUSE KICK', true, true) ;
    }
  }

  getBackgroundColor(){
    if(this.slashInfo.canBeUnlocked && this.slashInfo.isLocked){
    return "rgb(223, 214, 86)";}
    if(!this.slashInfo.canBeUnlocked && !this.slashInfo.isLocked){
      return " rgb(0, 182, 121)";}
    if(!this.slashInfo.canBeUnlocked && this.slashInfo.isLocked){
        return " rgb(221, 48, 25)";}
  }



}
