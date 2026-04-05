const cpfsCadastrados = ["123.456.789-00", "987.654.321-00", "111.222.333-44"];

function enviar() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("e-mail").value.trim();
    const telefone = document.getElementById("Telefone").value.trim();
    const cpf = document.getElementById("CPF").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const cidade = document.getElementById("cidade").value.trim();
    const moradia = document.getElementById("moradia").value;
    const quintal = document.getElementById("quintal").value;
    const expet = document.getElementById("expet").value;
    const horas = parseFloat(document.getElementById("horas").value);
    const motivo = document.getElementById("motivo").value.trim();
    const termo = document.getElementById("termo").checked;

    const erros = [];

    if (nome.length < 3) {
        erros.push("Nome deve ter no mínimo 3 caracteres.");
    }

    if (!email.includes("@")) {
        erros.push("E-mail inválido. Deve conter '@'.");
    }

    const telefoneLimpo = telefone.replace(/\D/g, "");
    if (telefoneLimpo.length < 8) {
        erros.push("Telefone inválido. Deve ter no mínimo 8 dígitos.");
    }

    if (!cpf) {
        erros.push("CPF é obrigatório.");
    } else if (cpfsCadastrados.includes(cpf)) {
        erros.push("CPF já cadastrado. Não é possível realizar nova adoção com este CPF.");
    }

    if (isNaN(idade) || idade < 18) {
        erros.push("Você deve ter 18 anos ou mais para adotar.");
    }

    if (!cidade) {
        erros.push("Cidade é obrigatória.");
    }

    if (!moradia) {
        erros.push("Tipo de moradia é obrigatório.");
    }

    if (!quintal) {
        erros.push("Informação sobre quintal é obrigatória.");
    }

    if (!expet) {
        erros.push("Informação sobre experiência com pets é obrigatória.");
    }

    if (isNaN(horas) || horas < 0) {
        erros.push("Informe um valor numérico válido para as horas que o animal ficará sozinho.");
    }

    if (motivo.length < 10) {
        erros.push("Motivo da adoção deve ter no mínimo 10 caracteres.");
    }

    if (!termo) {
        erros.push("Você deve aceitar o termo de responsabilidade para enviar o formulário.");
    }

    const motivoLower = motivo.toLowerCase();
    const motivosGenericos = ["quero", "porque sim", "pq sim", "não sei", "nao sei", "só quero", "so quero"];
    const motivoGenerico = motivosGenericos.some(gen => motivoLower === gen || motivoLower.trim() === gen);
    if (motivoGenerico) {
        erros.push("O motivo da adoção não pode ser genérico. Por favor, descreva melhor sua intenção.");
    }
}