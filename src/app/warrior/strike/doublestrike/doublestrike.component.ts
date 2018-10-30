import { Component,Input } from '@angular/core';
import {NodeInfo} from '../../../nodeProperties.model';
@Component({
  selector: 'app-doublestrike',
  templateUrl: './doublestrike.component.html',
  styleUrls: ['./doublestrike.component.css']
})
export class DoublestrikeComponent  {
 @Input() doublestrikeInfo: NodeInfo  ;
 
  isDetailedClicked: boolean=false;
  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
    if(this.doublestrikeInfo.canBeUnlocked)
    this.doublestrikeInfo=new NodeInfo('DOUBLE STRIKE',  false, false) ;
  }

  getBackgroundColor(){
    if(this.doublestrikeInfo.canBeUnlocked && this.doublestrikeInfo.isLocked){
    return "rgb(223, 214, 86)";}
    if(!this.doublestrikeInfo.canBeUnlocked && !this.doublestrikeInfo.isLocked){
      return " rgb(0, 182, 121)";}
    if(!this.doublestrikeInfo.canBeUnlocked && this.doublestrikeInfo.isLocked){
        return " rgb(221, 48, 25)";}
  }

}
