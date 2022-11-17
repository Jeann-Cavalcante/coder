const nome = prompt("Digite seu nome");
const oQueEstaFazendo = parseInt(
  prompt(
    `Digite o que esta fazendo com apenas o numero correspondente: \n 1 - estudando, 2 - comendo, 3 - dormindo`
  )
);

class Pessoa {
  constructor(nome, oQueEstaFazendo) {
    this.nome = nome;
    this.oQueEstaFazendo = oQueEstaFazendo;
  }
  estudando() {
    return alert(this.nome + " Esta Estudando");
  }
  comendo() {
    return alert(this.nome + " Esta comendo");
  }
  dormindo() {
    return alert(this.nome + " Esta dormindo");
  }
}

function verificaMethod(){
  const pessoa = new Pessoa(nome, oQueEstaFazendo);
  switch (oQueEstaFazendo) {
    case 1:
      pessoa.estudando();
      break;
    case 2:
      pessoa.comendo();
      break;
    case 3:
      pessoa.dormindo();
      break;
    default:
      alert("Digite um numero valido, ex: 1, 2 ou 3");
      location.reload();
  }
};

verificaMethod();

