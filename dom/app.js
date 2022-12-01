const app = document.querySelector('#app');

function criandoElementos(){
  const nome = prompt("Digite seu nome");
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = `Olá seja bem-vindo ${nome}`;
    div.style.fontSize = "40px";
    app.appendChild(div);
};

criandoElementos();