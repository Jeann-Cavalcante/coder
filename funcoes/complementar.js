alert("Você pode comprar o produto com desconto");
alert(
  "na compra abaixo R$100 vc tera 5%, abaixo de R$200 10% e acima disso terá 30%"
);
const ValorDaCompra = parseFloat(
  prompt("Quantos em valor você deseja comprar?")
);

const verificarPorcentagem = (ValorDaCompra) => {
  if (ValorDaCompra < 100) {
    return 5;
  } else if (ValorDaCompra < 200) {
    return 10;
  } else {
    return 30;
  }
};

const valorDoDesconto = () =>
  (verificarPorcentagem(ValorDaCompra) * ValorDaCompra) / 100;

const ValorLiquido = () => ValorDaCompra - valorDoDesconto();

const tratandoDados = () => {
  const desconto = valorDoDesconto().toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const liquido = ValorLiquido().toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  if (isNaN(ValorLiquido())) {
    alert("Valor invalido, tente novamente");
    location.reload();
  } else {
    alert(
      `O valor do desconto foi ${desconto} e o total do produto ficou em ${liquido}`
    );
  }
};

tratandoDados();
