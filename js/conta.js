let paciente = document.querySelectorAll('#paciente')
let quantidadeClientes = document.querySelectorAll('.qtdPaciente')

let soma = 0 

for(let i = 0; i<= pacientes.length; i++){
    let paciente = paciente[i]
    let qtdCliente = paciente.querySelectorAll('info-numero')
    let valor = Number(qtdPaciente.textContent)

    soma = soma + valor
    quantidadeClientes.textContent = soma
}