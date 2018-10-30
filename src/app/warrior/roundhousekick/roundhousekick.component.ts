import { Component,Input,OnInit } from '@angular/core';
import {NodeInfo} from '../../nodeProperties.model';
@Component({
  selector: 'app-roundhousekick',
  templateUrl: './roundhousekick.component.html',
  styleUrls: ['./roundhousekick.component.css']
})
export class RoundhousekickComponent   {
  
   @Input()   roundhousekickInfoFromKnockout: NodeInfo;
  
  //  constructor(@Inject(ParentComponent) private parent: ParentComponent){
  //  }
  
  isDetailedClicked: boolean=false;

  onDetailClicked(isDetailedClicked : boolean){
    this.isDetailedClicked=!this.isDetailedClicked;
  }
  onUnlockClicked(){
    if(this.roundhousekickInfoFromKnockout.canBeUnlocked){
      
      this.roundhousekickInfoFromKnockout=new NodeInfo('ROUNDHOUSE KICK',  false, false) ;
    }
      
    }
   

    getBackgroundColor(){
      if(this.roundhousekickInfoFromKnockout.canBeUnlocked && this.roundhousekickInfoFromKnockout.isLocked){
      return "rgb(223, 214, 86)";}
      if(!this.roundhousekickInfoFromKnockout.canBeUnlocked && !this.roundhousekickInfoFromKnockout.isLocked){
        return " rgb(0, 182, 121)";}
      if(!this.roundhousekickInfoFromKnockout.canBeUnlocked && this.roundhousekickInfoFromKnockout.isLocked){
          return " rgb(221, 48, 25)";}
    }
  }

