export class Guerreiro {
    nome: string;
    tipo: string;
    força: number;
    saude: number;
  
    constructor(nome: string, tipo: string) {
      this.nome = nome;
      this.tipo = tipo;
      this.força = 10;
      this.saude = 100;
    }
  
    atacar(monstro: Monstro): void {
      monstro.saude -= this.força;  //-=	atribuição com subtração
      console.log(`${this.nome} atacou ${monstro.nome} por ${this.força} de dano!`);
    }
  
    receberDano(dano: number): void {
      this.saude -= dano;
      console.log(`${this.nome} recebeu ${dano} de dano!`);
    }
  }

  






  

  









