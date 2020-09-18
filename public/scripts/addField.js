// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão 
.addEventListener('click', cloneField)

// Executar uma ação
    function cloneField() {
// Duplicar os campos. que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean : true ou false

//pegar os campos. Que campo?
    const fields = newFieldContainer.querySelectorAll('input')

//para cada campo, limpar
    fields.forEach(function(field) {
//pegar o field do momento e limpa ele 
    field.value = ""
    })

// Colocar na pagina : onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }