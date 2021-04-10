var vCpf = false, qCpf = false, vSenha, vConfSenha;

function validar() {
    validar_cpf(cpf);

    if (vCpf == false || qCpf == false || vSenha == false || vConfSenha == false) {
        alert("Ocorreu um problema elguma parte do seu cadastro. Tente verificar se seu CPF é valido, se a senha é forte e/ou se está igual nos dois campos.");
    } else {
        alert("Login realizado com sucesso.");
    }

}

function validar_cpf(cpf) {

    var cpf = document.getElementById("cpf").value;

    if (cpf.length != 14) {
        alert("CPF inválido, quantidade de digitos incorreta");
    } else {
        qCpf = true;
    }

    if ((cpf == "000.000.000-00") || (cpf == "111.111.111-11") || (cpf == "222.222.222-22") || (cpf == "333.333.333-33") || (cpf == "444.444.444-44") || (cpf == "555.555.555-55") ||
        (cpf == "666.666.666-66") || (cpf == "777.777.777-77") || (cpf == "888.888.888-88") || (cpf == "999.999.999-99")) {

        alert("CPF inválido, todos os valores são iguais");

    } else {
        vCpf = true;
    }

}

var forca;

function validar_senha() {
    var senha = document.getElementById("senha").value;


    if (senha.length <= 4) {
        forca = 1;
    } else if (senha.length >= 5 && senha.length < 10) {
        forca = 3;
    } else if (senha.length >= 10) {
        forca = 10;
    }

    if (senha.match(/[a-z]+/)) {
        forca += 1;
    }

    if (senha.match(/[A-Z]+/)) {
        forca += 1;
    }

    if (senha.match(/\d+/)) { //descobre se tem algum número
        forca += 2;
    }

    if (senha.match(/\W+/)) { //descobre se tem algum caracter
        forca += 3;
    }

    if (forca < 5) {
        document.getElementById("mostrar").innerHTML = "<i class='fas fa-battery-quarter' ></i>  Senha muito fraca, tente outra.";
    } else if (forca <= 10 || forca == 5) {
        document.getElementById("mostrar").innerHTML = "<i class='fas fa-battery-half'></i>   Senha média, você pode fazer melhor!";
    } else if (forca >= 11 && forca < 17) {
        document.getElementById("mostrar").innerHTML = "<i class='fas fa-battery-three-quarters'></i> Senha forte, aceito para login e/ou cadastro!";
    } else if (forca == 17) {
        document.getElementById("mostrar").innerHTML = "<i class='fas fa-battery-full'></i> Excelente senha!";
    }

    if (forca < 11) {
        vSenha = false;
    }

}

function verificar_senha() {
    var senha = document.getElementById("senha").value;
    var repSenha = document.getElementById("confSenha").value;

    if (repSenha === senha) {
        document.getElementById("igual").innerHTML = "<i class='far fa-check-circle'></i> Senhas iguais."
        vConfSenha = true;
    } else {
        document.getElementById("igual").innerHTML = "<i class='far fa-times-circle'></i> Senhas diferentes."
        vConfSenha = false;
    }
}

function mostra_senha() {
    var senha = document.getElementById("senha");

    if (senha.type == 'password') {
        senha.type = 'text';
        document.getElementById("icon1").style.display = 'none';
        document.getElementById("icon2").style.display = 'block';

    } else {
        senha.type = 'password';
        document.getElementById("icon1").style.display = 'block';
        document.getElementById("icon2").style.display = 'none';
    }
}

function mostra_senha2() {
    var senha = document.getElementById("confSenha");

    if (senha.type == 'password') {
        senha.type = 'text';
        document.getElementById("icon3").style.display = 'none';
        document.getElementById("icon4").style.display = 'block';

    } else {
        senha.type = 'password';
        document.getElementById("icon3").style.display = 'block';
        document.getElementById("icon4").style.display = 'none';
    }
}