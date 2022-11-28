import { Attaque } from "./attaque.js";
import { Pokemon } from "./pokemon.js";

export class PokemonService{
    constructor(pokemons = [
        new Pokemon("Pikachu", "025", 40, 6, "électrique", 82, new Attaque("Statik", 10), new Attaque("Paratonnerre", 25)),
        new Pokemon("Evoli", "133", 30, 6.5, "normal", 70, new Attaque("Adaptabilité", 9), new Attaque("Anticipation", 15))
    ]){
        this.pokemons = pokemons;
    }

    create(pk = ""){
        let nbPokemons;
        let indice;
        do{
            nbPokemons = this.pokemons.length;
            indice = Math.floor(Math.random() * nbPokemons);
        }
        while (this.pokemons[indice].name == pk) 
        return this.pokemons[indice];
    }

    getByName(name){
        const matches = this.pokemons.filter(p => p.name == name);
        if (matches == null || matches.length == 0) return null;
        return matches[0];
    }
    getAll(){
        return this.pokemons;
    }
    delete(name){
        this.pokemons = this.pokemons.filter(p => p.name != name);
    }
}