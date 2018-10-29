import { Component, Input, Output } from '@angular/core';
import { NodeInfo } from '../../../NodeInfo.model';
@Component({
  selector: 'app-freeze',
  templateUrl: './freeze.component.html',
  styleUrls: ['./freeze.component.css']
})
export class FreezeComponent {
  isDetailedClicked: boolean=false;
 @Input() freezeInfo: NodeInfo ;
 
 @Output() snowstormInfo: NodeInfo =
 new NodeInfo('SNOWSTORM', true, false) ;
 
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
   
    if(this.freezeInfo.canBeUnlocked){
      this.freezeInfo=new NodeInfo('FREEZE',  false, false) ;
     // this.freezeInfo1=new NodeInfo('FREEZE',  false, true) ;
      this.snowstormInfo = new NodeInfo('SNOWSTORM', true, true) ;
    }
}
getBackgroundColor(){
  if(this.freezeInfo.canBeUnlocked && this.freezeInfo.isLocked){
  return "rgb(223, 214, 86)";}
  if(!this.freezeInfo.canBeUnlocked && !this.freezeInfo.isLocked){
    return " rgb(0, 182, 121)";}
  if(!this.freezeInfo.canBeUnlocked && this.freezeInfo.isLocked){
      return " rgb(221, 48, 25)";}
}


}
