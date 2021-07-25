const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Adicionando o cliente na tabela

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let pais = document.getElementById('pais').value;

    let dados = {
        nome,
        email,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        pais
    };
        let valoresDados = Object.values(dados);

        let tbody = document.querySelector('table');
        let tr = document.createElement('tr');
        tbody.append(tr);

        valoresDados.forEach(valor => {
            let td = document.createElement('td');
            tr.append(td);
            td.append(valor);
        });

        // Adicionando o cliente no Local Storage

        let clientes = JSON.parse(localStorage.getItem('cliente')) ?? [];

        clientes.push(dados);

        let clientesConvertidos = JSON.stringify(clientes);

        localStorage.setItem('cliente', clientesConvertidos);
});