export class Pokemon{
    constructor(name, number, height, weight, type, maxHp, atk1, atk2){
        this.name = name;
        this.number = number;
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.currentHp = maxHp;
        this.maxHp = maxHp;
        this.atk1 = atk1;
        this.atk2 = atk2;
    }
    attaque(pokemonAdverse){
        const crit = Math.random() <= 0.1 ? 1 : 0;
        const usedAtk = this.currentHp <= this.maxHp / 5 ? this.atk2 : this.atk1;
        const dmg = usedAtk.dmg * (1 + crit);
        const lethal = dmg >= pokemonAdverse.currentHp;
        pokemonAdverse.currentHp = lethal ? 0 : pokemonAdverse.currentHp - dmg;
        console.log(this.name + " attaque " + pokemonAdverse.name + " avec l'attaque " + usedAtk.name + " !");
        if(crit == 1)
            console.log("C'est un coup critique !");
        console.log(lethal ? "L'attaque a été fatale à " + pokemonAdverse.name + " qui n'aura pas démérité dans cette rencontre !" : "L'attaque a infligé " + dmg + " points de dégats à " + pokemonAdverse.name + " !");
        if(lethal) 
            console.log(this.name + " est victorieux ! Il lui reste " + this.currentHp + "pv !")
    }
}
