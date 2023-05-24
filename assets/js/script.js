let input = document.querySelector("#inputTarefa")
let btnAdd = document.querySelector("#btn-add")
let main = document.querySelector("#areaLista")
let btnDel = document.querySelector(".delete")
/*Variável ao qual é contabiliza quantidade tarefas*/
let cont = 0

/*Escutador que copia o value do input e cria um item da lista
  
*/
btnAdd.addEventListener("click", function (e) {
    let valorInput = input.value
    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
        let novoItem = ` <div  id = "${cont}" class="item">
        <div class="item-icone" onclick = "concluido(${cont})">
            <i class="mdi mdi-circle-outline"><img src="assets/img/circle-outline.png"></i>
        </div>
        <div class="item-nome"> ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick = "deletar(${cont})" class="delete">󰆴 Deletar</button>
        </div>
    </div>`
        main.innerHTML += novoItem
        input.value = ""
        input.focus()
        cont++
    }
})
/*Escutador ao qual copia o value do input, para evento de teclado*/
input.addEventListener("keyup", function (e) {
    let valorInput = input.value
    if (e.key == "Enter") {
        let novoItem = ` <div  id = "${cont}" class="item">
        <div class="item-icone" onclick = "concluido(${cont})" >
            <i class="mdi mdi-circle-outline"><img src="assets/img/circle-outline.png"></i>
        </div>
        <div class="item-nome"> ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick = "deletar(${cont})" class="delete">󰆴 Deletar</button>
        </div>
    </div>`
        main.innerHTML += novoItem
        input.value = ""
        input.focus()
        cont++
    }
})
/*Função que deleta a tarefa a partir do cont/id*/
function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}
/*Função que seleciona a tarefa como concluída*/
function concluido(id) {
    var tarefa = document.getElementById(id)
    if(tarefa.children[0].children[0].children[0].getAttribute("src") == "assets/img/circle-outline.png" ){
    tarefa.style.background = '#d4f6d9'
    tarefa.style.textDecoration = 'line-through'
    tarefa.style.color = 'gray'
    tarefa.children[0].children[0].children[0].setAttribute("src", "assets/img/check-circle.png")
     return
    }
    if( tarefa.children[0].children[0].children[0].getAttribute("src") ==  "assets/img/check-circle.png" ){
        tarefa.children[0].children[0].children[0].setAttribute("src", "assets/img/circle-outline.png")
        tarefa.style.background = 'white'
        tarefa.style.textDecoration = 'none'
        tarefa.style.color = 'black'

    }
}



