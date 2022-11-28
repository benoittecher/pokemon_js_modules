import { PokemonService } from "./pokemon-service.js";
/*import { Pokemon } from "./pokemon.js";
import { Attaque } from "./attaque.js";*/

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

/*const pikachu = new Pokemon("Pikachu", "025", 40, 6, "électrique", 82, new Attaque("Statik", 10), new Attaque("Paratonnerre", 25));
const evoli = new Pokemon("Evoli", "133", 30, 6.5, "normal", 70, new Attaque("Adaptabilité", 9), new Attaque("Anticipation", 15));*/

const pokeService = new PokemonService();
/*const pokemon1 = pokeService.create();
const pokemon2 = pokeService.create(pokemon1.name);
fight(pokemon1, pokemon2);
console.log("getByName : ");
const pikachu = pokeService.getByName("Pikachu");
console.log("Pikachu : ");
console.log(pikachu);
const evoli = pokeService.getByName("Evoli");
console.log("Evoli : ");
console.log(evoli);*/

/*console.log("getAll : ");
const pokemons = pokeService.getAll();
pokemons.forEach(p => p.presentation());*/

console.log("delete :");
pokeService.delete("Pikachu");
pokeService.pokemons.forEach(p => p.presentation());



