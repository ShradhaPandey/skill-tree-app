import { Component, Output, Input } from '@angular/core';
import {NodeInfo} from '../nodeProperties.model';
@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css']
})
export class MazeComponent  {
  isDetailedClicked: boolean=false;
  
mazeInfo: NodeInfo =
new NodeInfo('MAZE',  true, true) ;
@Output() fireballInfo: NodeInfo=
new NodeInfo('FIREBALL', true, false) ;



isMazeLocked: boolean=this.mazeInfo.isLocked;
onDetailClicked(isDetailedClicked : boolean){
  this.isDetailedClicked=!this.isDetailedClicked;
  
}

onUnlockClicked(){
  if(this.mazeInfo.canBeUnlocked){
  this.mazeInfo=new NodeInfo('MAZE',  false, false) ;
  this.fireballInfo=new NodeInfo('FIREBALL',  true, true) ;
  } 
}

getBackgroundColor(){
  if(this.mazeInfo.canBeUnlocked && this.mazeInfo.isLocked){
  return "rgb(223, 214, 86)";}
  if(!this.mazeInfo.canBeUnlocked && !this.mazeInfo.isLocked){
    return " rgb(0, 182, 121)";}
  if(!this.mazeInfo.canBeUnlocked && this.mazeInfo.isLocked){
      return " rgb(221, 48, 25)";}
}

getDivColor(){
  return "pink";
}
}
