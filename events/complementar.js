const dados = [{ id: 1, nome: "Jean", contato: "jeanncavalcante@gmail.com" }];
const footer = document.querySelector("footer");

function inserindoFooter(){
  dados.forEach((item) =>{
    let p = document.createElement("p");
    p.textContent = `Feito por ${item.nome} - contato: ${item.contato}`;
    footer.appendChild(p);
  });
};

inserindoFooter();