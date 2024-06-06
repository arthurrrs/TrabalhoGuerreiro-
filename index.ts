import { Monstro } from "./Monstro";
import { Guerreiro } from "./guerreiro";


const guerreiro = new Guerreiro("Hulk", "Fred");
const monstro = new Monstro("Fred");

guerreiro.atacar(monstro);
monstro.atacar(guerreiro);

console.log(`Vida do Guerreiro: ${guerreiro.saude}`);
console.log(`Vida do Monstro: ${monstro.saude}`);
