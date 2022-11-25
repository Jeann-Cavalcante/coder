const lista = []

function adicionar(){
  let i = 0;
  do {
    i = i + 1;
    let addLista = prompt("adicione 4 nomes para a lista");
    lista.push(addLista);
  } while (i < 2);
  
  incrementarLista();
}

function incrementarLista(){
  let nomes = ["Jean", "Marli", "Raimundo", "Rafael"];
  let novaLista = [...lista, nomes];

  alert(novaLista);
};


adicionar();