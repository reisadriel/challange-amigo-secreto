let amigos = [] 
console.log(amigos);
//Adiciona amigos ao array
function adicionarAmigo() {
    let amigo = document.querySelector('input'); 

    if (amigo.value == "") {
        alert("Digite um nome no campo!");
    } else if (amigos.includes(amigo.value)) {
        alert("Você já adicionou esse amigo!");
    } else {
        amigos.push(amigo.value); //Adiciona amigo ao array 
        atualizarLista(); //Atualiza visualização da lista 
        amigo.value = "";
    }
        
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; //Limpa a lista
    
    //For percorre o array adicionando os amigos na lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); //Cria elemento em html <li>
        li.textContent = amigos[i] //Define o texto de <li>
        lista.appendChild(li); //adiciona <li> na lista
    }
    
} 

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Você não adicionou nenhum amigo à lista ainda!")
    } else {
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    document.getElementById("resultado").textContent = `O amigo sorteado foi: ` + amigos[indiceSorteado];
}

}

