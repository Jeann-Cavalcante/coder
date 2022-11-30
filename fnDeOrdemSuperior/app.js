class CorteDeCabelo {
  constructor(nome, tipo, estilo) {
    this.nome = nome;
    this.tipo = tipo;
    this.estilo = estilo;
    console.log(
      "Corte de cabelo criado!" +
        this.nome +
        " " +
        this.tipo +
        " " +
        this.estilo
    );
  }

  valorDoCorte() {
    this.estilo === "Formal" ? (this.estilo = 150.0) : (this.estilo = 100.0);
    this.tipo === "Cabelo e Barba" ? (this.tipo = 50.99) : (this.tipo = 0.0);

    const valores = {
      valorEstilo: this.estilo,
      valorTipo: this.tipo,
      valorTotal: this.estilo + this.tipo,
    };
    return valores;
  }
}


function cabeleireiro() {
  alert("Bem vindo ao nosso salão de Corte de Cabelo");
  alert("Escolha somente o numero da escolha");
  const nome = prompt("Qual o seu nome?");
  const tipo = parseInt(prompt(
    "Qual o tipo de corte de cabelo? \n  1 - Cabelo e Barba \n 2 - Cabelo"
  ));
  const estilo = parseInt(prompt(
    "Qual o estilo do cabelo? \n 1 - Formal \n 2 - Simples"
  ));

  verificaCorte(nome, tipo, estilo);
  console.log(nome, tipo, estilo);
}

function verificaCorte(nome, tipo, estilo) {

  if (isNaN(estilo) || isNaN(tipo)) {
    return alert("Opção invalida, digite apenas números entre 1 e 2");
  }

  if (estilo <= 0 || tipo <= 0) {
    return alert("Opção invalida, digite apenas números entre 1 e 2");
  }

  if (estilo >= 3 || tipo >= 3) {
    return alert("Opção invalida, digite apenas números entre 1 e 2");
  }

  if (estilo === 1) {
    estilo = "Formal";
  } else {
    estilo = "Simples";
  }

  if (tipo === 1) {
    tipo = "Cabelo e Barba";
  } else {
    tipo = "Cabelo";
  }

  const cortarCabelo = new CorteDeCabelo(nome, tipo, estilo);

  let total = cortarCabelo.valorDoCorte().valorTotal;

  alert(
    `${nome}, seu tipo de corte é ${tipo} e o seu estilo é ${estilo} \n ficou no valor total de R$ ${total}`
  );
}

cabeleireiro();
