let botaoAdicionar = document.querySelector('#add-paciente')

botaoAdicionar.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#form-add')

    let paciente = getPacienteDoForm(form)

    
    let erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        
        return;
    }
    
    
    addPacienteNaTabela(paciente)
    
    
    let mensagensErro = document.querySelector("#erro-mensagem");
    mensagensErro.innerHTML = "";
})

function getPacienteDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        data: form.data.value,
        horario: form.horario.value,
        medico: form.medico.value
    }
    return paciente
}

function montarTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montarTd(paciente.data, "info-data"))
    pacienteTr.appendChild(montarTd(paciente.horario, "info-horario"))
    pacienteTr.appendChild(montarTd(paciente.medico, "info-medico"))
    return pacienteTr
}


function addPacienteNaTabela(paciente) {
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#table-paciente')
    tabela.appendChild(pacienteTr)

}

function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {

    let erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.data.length == 0) {
        erros.push("A data não pode ser em branco");
    }

    if (paciente.horario.length == 0) {
        erros.push("O horario não pode ser em branco");
    }

    if (paciente.medico.length == 0) {
        erros.push("O medico não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#erro-mensagem");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}