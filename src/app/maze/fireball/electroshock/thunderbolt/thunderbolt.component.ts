import { Component, Input } from '@angular/core';
import { NodeInfo } from '../../../../nodeProperties.model';
@Component({
  selector: 'app-thunderbolt',
  templateUrl: './thunderbolt.component.html',
  styleUrls: ['./thunderbolt.component.css']
})
export class ThunderboltComponent  {
  isDetailedClicked: boolean=false;
@Input()  thunderboltInfo: NodeInfo;
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
   
      if((this.thunderboltInfo.canBeUnlocked)){
        this.thunderboltInfo=new NodeInfo('THUNDERBOLT',  false, false) ; 
      }
  
}
getBackgroundColor(){
  if(this.thunderboltInfo.canBeUnlocked && this.thunderboltInfo.isLocked){
  return "rgb(223, 214, 86)";}
  if(!this.thunderboltInfo.canBeUnlocked && !this.thunderboltInfo.isLocked){
    return " rgb(0, 182, 121)";}
  if(!this.thunderboltInfo.canBeUnlocked && this.thunderboltInfo.isLocked){
      return " rgb(221, 48, 25)";}
}

}
