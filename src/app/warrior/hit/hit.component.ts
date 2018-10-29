import { Component,Input, Output } from '@angular/core';
import {NodeInfo} from '../../NodeInfo.model';
@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.css']
})
export class HitComponent  {
  @Input() hitInfo: NodeInfo ;
  @Input() warriorInfo: NodeInfo ;
  @Output()   knockoutInfo: NodeInfo =
  new NodeInfo('KNOCKOUT', true, false) ;
  isDetailedClicked: boolean=false;
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
    if(this.hitInfo.canBeUnlocked){
    this.hitInfo=new NodeInfo('HIT',  false, false) ;
    this.knockoutInfo = new NodeInfo('KNOCKOUT', true, true) ;
    }
  }

  getBackgroundColor(){
    if(this.hitInfo.canBeUnlocked && this.hitInfo.isLocked){
    return "rgb(223, 214, 86)";}
    if(!this.hitInfo.canBeUnlocked && !this.hitInfo.isLocked){
      return " rgb(0, 182, 121)";}
    if(!this.hitInfo.canBeUnlocked && this.hitInfo.isLocked){
        return " rgb(221, 48, 25)";}
  }

}
