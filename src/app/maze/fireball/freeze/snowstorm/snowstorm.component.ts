import { Component, Input } from '@angular/core';
import { NodeInfo } from '../../../../nodeProperties.model';
@Component({
  selector: 'app-snowstorm',
  templateUrl: './snowstorm.component.html',
  styleUrls: ['./snowstorm.component.css']
})
export class SnowstormComponent  {
  isDetailedClicked: boolean=false;
 @Input() snowstormInfo: NodeInfo  ;
 
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
    if(this.snowstormInfo.canBeUnlocked){
      this.snowstormInfo=new NodeInfo('SNOWSTORM',  false, false) ; 
    }

}
getBackgroundColor(){
  if(this.snowstormInfo.canBeUnlocked && this.snowstormInfo.isLocked){
  return "rgb(223, 214, 86)";}
  if(!this.snowstormInfo.canBeUnlocked && !this.snowstormInfo.isLocked){
    return " rgb(0, 182, 121)";}
  if(!this.snowstormInfo.canBeUnlocked && this.snowstormInfo.isLocked){
      return " rgb(221, 48, 25)";}
}

}
