export class Attaque{
    constructor(name, dmg){
        this.name = name;
        this.dmg = dmg;
    }
    description(){
        return `name : ${this.name}, dmg : ${this.dmg}`;
    }
}

