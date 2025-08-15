const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        input.value = '';
        atualizarLista(); 
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigos => {
        const li = document.createElement('li');
        li.innerText = amigos;
        lista.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length < 2) {
        const error = document.querySelector('.button-alert');
        error.hidden = false;
        setTimeout(()=>{
            error.hidden = true;
        }, 1000);
        return;
    }   

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(sorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `O amigo sorteado foi: ${sorteado} 🎉😵‍💫🫦`;
    resultado.appendChild(li);
    console.log(`O amigo ${sorteado} foi removido da lista!`);
    amigos.splice(amigos.indexOf(sorteado), 1);

    atualizarLista();
}
