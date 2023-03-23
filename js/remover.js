let tabela = document.querySelector('#table-paciente')

tabela.addEventListener('dblclick', function(evento){
    evento.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
    evento.target.parentNode.remove()  
    }, 300)

})