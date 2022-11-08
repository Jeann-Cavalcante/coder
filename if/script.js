let idade = prompt("Qual a sua idade?");

if (idade == null || idade.length == 0) {
  alert("Por favor, digite sua idade!");
} else if (idade <= 18) {
  alert("menor de idade");
} else {
  alert("maior de idade");
}
console.log(idade);
