import { Attaque } from "./attaque.js";
import { Pokemon } from "./pokemon.js";
function fight(pk1, pk2){
    const fstAtk = Math.random() > 0.5 ? pk1 : pk2;
    const scdAtk = fstAtk == pk1 ? pk2 : pk1;
    let round = 0;
    const orderedPokemons = [fstAtk, scdAtk];
    console.log(pk1.name + " VS " + pk2.name);
    console.log(("Le tirage au sort a décidé que "  + fstAtk.name + " attaquera en premier !" ).replace("que E", "qu'E").replace("que A", "qu'A"));
    while(pk1.currentHp > 0 && pk2.currentHp > 0){
        console.log("**************");
        console.log("Round " + (round + 1) + " : ");
        orderedPokemons[round % 2].attaque(orderedPokemons[(round+1) % 2]);
        round++;
    }
}

const statik = new Attaque("Statik", 10);
const paratonnerre = new Attaque("Paratonnerre", 25);
const adaptabilite = new Attaque("Adaptabilité", 9);
const anticipation = new Attaque("Anticipation", 15);
const pikachu = new Pokemon("Pikachu", "025", 40, 6, "électrique", 82, statik, paratonnerre);
const evoli = new Pokemon("Evoli", "133", 30, 6.5, "normal", 70, adaptabilite, anticipation);
fight(pikachu, evoli);


