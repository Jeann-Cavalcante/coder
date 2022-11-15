const produto = prompt("Qual produto você está comprando?");
const qtd = prompt("Qual a quantidade?");
const preco = prompt("Qual o preço do produto?");
let total = 0;

function CalcularTotal(qtd, preco) {
  total = qtd * preco;
  return total;
}

total = CalcularTotal(qtd, preco);

function verificarTotal() {
  if (isNaN(total)) {
    return (
      alert("Valores inválidos, digite apenas numero em preço e qtd"),
      location.reload()
    );
  } else {
    alert(`Você está comprando o ${produto} que custa R$ ${total}.`);
  }
}

verificarTotal();
