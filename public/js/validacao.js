var cpf = document.getElementById("cpf").value;
var ncpf = parseInt(cpf);

function validar() {
    validar_cpf(cpf);
}

function validar_cpf(cpf) {
    var somatorio = 0;
    var resto;

    if (cpf.length != 11) {
        alert("cpf inválido, quantidade de digitos incorreta")
    }

    if ((cpf == "00000000000") || (cpf == "11111111111") || (cpf == "22222222222") ||
        (cpf == "33333333333") || (cpf == "44444444444") || (cpf == "55555555555") ||
        (cpf == "66666666666") || (cpf == "77777777777") || (cpf == "88888888888") || 
        (cpf == "99999999999")) {
        alert("CPF inválido, todos os valores são iguais")
    }


}

/* resto de código de uma tentativa de verificar se todos os valores eram iguais, ta uma baderna
var cpfa = [cpf.length];
        if (cpfa[i].equals(cpfa[i+1])) {
            igual++;
            if (igual == 11) {
                alert("CPF inválido, todos os valores são iguais.")
            }
        }*/
