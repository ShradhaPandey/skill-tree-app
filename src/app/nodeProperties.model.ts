export class NodeInfo {
    public name: String;
    public isLocked: boolean;
    public canBeUnlocked: boolean;

    constructor( name: String,
                 isLocked: boolean,
                 canBeUnlocked: boolean){
this.name= name;
this.isLocked= isLocked;
this.canBeUnlocked= canBeUnlocked;

    }
    
}