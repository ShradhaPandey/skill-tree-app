import { Component,Input, Output } from '@angular/core';
import { NodeInfo } from '../../../NodeInfo.model';
@Component({
  selector: 'app-electroshock',
  templateUrl: './electroshock.component.html',
  styleUrls: ['./electroshock.component.css']
})
export class ElectroshockComponent  {
  isDetailedClicked: boolean=false;
 @Input() electroshockInfo: NodeInfo  ;
 

 
 @Output() thunderboltInfo: NodeInfo =
 new NodeInfo('THUNDERBOLT', true, false) ;
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }

  onUnlockClicked(){
    if(this.electroshockInfo.canBeUnlocked){
    this.electroshockInfo=new NodeInfo('ELECTROSHOCK',  false, false) ;
    // this.electroshockInfo1=new NodeInfo('ELECTROSHOCK',  false, true) ;
    this.thunderboltInfo= new NodeInfo('THUNDERBOLT', true, true) ;
}
  }
  getBackgroundColor(){
    if(this.electroshockInfo.canBeUnlocked && this.electroshockInfo.isLocked){
    return "rgb(223, 214, 86)";}
    if(!this.electroshockInfo.canBeUnlocked && !this.electroshockInfo.isLocked){
      return " rgb(0, 182, 121)";}
    if(!this.electroshockInfo.canBeUnlocked && this.electroshockInfo.isLocked){
        return " rgb(221, 48, 25)";}
  }

}
