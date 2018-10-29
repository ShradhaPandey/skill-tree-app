import { Component, Input, Output } from '@angular/core';
import { NodeInfo } from '../../NodeInfo.model';
@Component({
  selector: 'app-fireball',
  templateUrl: './fireball.component.html',
   styleUrls: ['./fireball.component.css']
  
})
export class FireballComponent  {
  isDetailedClicked: boolean=false;
 @Input() fireballInfo: NodeInfo ;
 
 @Output() electroshockInfo: NodeInfo =
  new NodeInfo('ELECTROSHOCK', true, false) ;
  @Output() freezeInfo: NodeInfo =
  new NodeInfo('FREEZE', true, false) ;
  
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
 
onUnlockClicked(){
  if(this.fireballInfo.canBeUnlocked){
    
    this.fireballInfo=new NodeInfo('FIREBALL',  false, false) ;
   // this.fireballInfo1=new NodeInfo('FIREBALL',  false, true) ;
    this.electroshockInfo= new  NodeInfo('ELECTROSHOCK', true, true) ;
    this.freezeInfo = new NodeInfo('FREEZE', true, true) ;
  
  }

  
}
getBackgroundColor(){
  if(this.fireballInfo.canBeUnlocked && this.fireballInfo.isLocked){
  return "rgb(223, 214, 86)";}
  if(!this.fireballInfo.canBeUnlocked && !this.fireballInfo.isLocked){
    return " rgb(0, 182, 121)";}
  if(!this.fireballInfo.canBeUnlocked && this.fireballInfo.isLocked){
      return " rgb(221, 48, 25)";}
}

}
