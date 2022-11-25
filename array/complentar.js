const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Bota", preco: 12.49, fragil: true },
  { nome: "Abacate", preco: 18.99, fragil: false },
  { nome: "Copo de Metal", preco: 1.99, fragil: false },
];

const ordenarPorPreco = () => produtos.sort((a, b) => a.preco - b.preco);

function ordenarPorNome(x, y){
    if (x.nome < y.nome) {return -1;}
    if (x.nome > y.nome) {return 1;}
  
    return true;
}


console.log(ordenarPorPreco());
console.log(produtos.sort(ordenarPorNome));