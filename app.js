let amigos = [] 
let campo

//Adiciona amigos ao array, se não tiver texto retorna alert com erro.
function adicionarAmigo() {
    amigo = document.querySelector('input'); 
    if (amigo == "") {
        alert("Digite um nome no campo!")
    } else {
        amigos.push(amigo.value); //Adiciona amigo ao array 
        atualizarLista();
        console.log(amigos);
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; //Limpa a lista
    
    //For percorre o array adicionando
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); //Cria elemento em html <li>
        li.textContent = amigos[i] //Define o texto de <li>
        lista.appendChild(li); //adiciona <li> na lista
}
    
} 


