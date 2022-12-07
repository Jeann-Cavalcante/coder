// const input = document.querySelector("input");
const ul = document.querySelector('ul');
const form = document.querySelector('form');
let lista = [];

form.addEventListener("submit", adicionarNaLista);

  function adicionarNaLista(e){
    e.preventDefault();
    let input = e.target[0].value;
    lista.push(input);
    console.log(lista);
    e.target.reset()
    lerDados(lista);
  };

  function lerDados(dados){
    limpar();
    dados.forEach(item => {
      ul.innerHTML += `
      <li>
        <p>${item}</p>
      </li>
      `;
    });
  };

  const limpar = () => ul.innerHTML = ""
