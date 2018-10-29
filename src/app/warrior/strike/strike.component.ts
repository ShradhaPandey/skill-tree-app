import { Component, Input, Output } from '@angular/core';
import {NodeInfo} from '../../NodeInfo.model';
@Component({
  selector: 'app-strike',
  templateUrl: './strike.component.html',
  styleUrls: ['./strike.component.css']
})
export class StrikeComponent  {
  isDetailedClicked: boolean=false;
 @Input() strikeInfo: NodeInfo ;
 @Output() doublestrikeInfo: NodeInfo =
 new NodeInfo('DOUBLE STRIKE', true, false) ;
 @Output() slashInfo: NodeInfo =
  new NodeInfo('SLASH', true, false) ;
 
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
    if(this.strikeInfo.canBeUnlocked){
    this.strikeInfo=new NodeInfo('STRIKE',  false, false) ;
   
    this.doublestrikeInfo = new NodeInfo('DOUBLE STRIKE', true, true) ;
    this.slashInfo = new NodeInfo('SLASH', true, true) ;
    }
  }
  getBackgroundColor(){
    if(this.strikeInfo.canBeUnlocked && this.strikeInfo.isLocked){
    return "rgb(223, 214, 86)";}
    if(!this.strikeInfo.canBeUnlocked && !this.strikeInfo.isLocked){
      return " rgb(0, 182, 121)";}
    if(!this.strikeInfo.canBeUnlocked && this.strikeInfo.isLocked){
        return " rgb(221, 48, 25)";}
  }


}
