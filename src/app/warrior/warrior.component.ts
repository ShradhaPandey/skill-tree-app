import { Component,Output } from '@angular/core';
import {NodeInfo} from '../nodeProperties.model';
@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.css']
})
export class WarriorComponent  {
  
  warriorInfo: NodeInfo =
  new NodeInfo('WARRIOR', true, true) ;
  @Output() strikeInfo: NodeInfo =
  new NodeInfo('STRIKE', true, false) ;
  @Output() hitInfo: NodeInfo =
  new NodeInfo('HIT', true, false) ;

  isDetailedClicked: boolean=false;

  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
    if(this.warriorInfo.canBeUnlocked){
    this.warriorInfo=new NodeInfo('WARRIOR',  false, false) ;
   this.strikeInfo= new NodeInfo('STRIKE', true, true) ;
  this.hitInfo=  new NodeInfo('HIT', true, true) ;
    }
  }

  getBackgroundColor(){
    if(this.warriorInfo.canBeUnlocked && this.warriorInfo.isLocked){
    return "rgb(223, 214, 86)";}
    if(!this.warriorInfo.canBeUnlocked && !this.warriorInfo.isLocked){
      return " rgb(0, 182, 121)";}
    if(!this.warriorInfo.canBeUnlocked && this.warriorInfo.isLocked){
        return " rgb(221, 48, 25)";}
  }

}
