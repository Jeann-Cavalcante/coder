let ano = parseInt(prompt("Digite o ano que você nasceu"));
let total = [];
let data = new Date();
let anoAtual = data.getFullYear();

console.log(typeof ano);

if (!isNaN(ano)) {
  for (let i = ano; i <= anoAtual; i++) {
    total.push(i);
  }

  let count = total.length - 1;
  console.log(count);
  alert(`Sua idade é ${count}`);
} else {
  alert("Digite um numero valido");
  location.reload();
}
