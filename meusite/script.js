// Função para mudar a mensagem de amor
function mudarMensagem() {
    const mensagens = [
        "Depois de você minha vida mudou",
        "O tempo longe de você passa mais devagar,",
        "E todo dia só consigo pensar em você",
        "E como é bom ficar perto de você, e o bem que você me faz",
        "Eu adoro tudo em você, e queria te mostrar o quão especial você é pra mim,",
        "Mas nada pode representar o quão perfeita você é",
        "Te amo. ❤️"
    ];

    const randomIndex = Math.floor(Math.random() * mensagens.length);
    document.getElementById("msgFofa").innerText = mensagens[randomIndex];
    
    // Adiciona confetes ao clicar no botão
    gerarConfetes();
}

// Função para gerar confetes
function gerarConfetes() {
    for (let i = 0; i < 10; i++) {
        let confete = document.createElement("div");
        confete.classList.add("confete");
        confete.style.left = `${Math.random() * 100}%`;
        confete.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(confete);
        setTimeout(() => confete.remove(), 3000);
    }
}
