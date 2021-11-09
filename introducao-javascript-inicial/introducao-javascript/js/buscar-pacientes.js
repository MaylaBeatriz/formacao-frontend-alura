var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/paciente");
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();
});