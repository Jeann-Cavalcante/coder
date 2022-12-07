const dados = [{ id: 1, nome: "Jean", contato: "jeanncavalcante@gmail.com" }];
const footer = document.querySelector("footer");

function inserindoFooter(){
  dados.forEach((item) =>{
    footer.innerHTML += `<p>Feito por ${item.nome} - contato: ${item.contato}</p>`;
  });
};

inserindoFooter();