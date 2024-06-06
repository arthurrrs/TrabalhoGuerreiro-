export class Monstro {
    nome: string;
    força: number;
    saude: number;
  
    constructor(nome: string) {
      this.nome = nome;
      this.força = 50;
      this.saude = 10;
    }
  
    atacar(guerreiro: Guerreiro): void {
      guerreiro.saude -= this.força; //-=	atribuição com subtração
      console.log(`${this.nome} atacou ${guerreiro.nome} por ${this.força} de dano!`);
    }
  
    receberDano(dano: number): void {
      this.saude -= dano;
      console.log(`${this.nome} recebeu ${dano} de dano!`);
    }
  }
