var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var nome = paciente.querySelector(".info-nome").textContent;
    }
})