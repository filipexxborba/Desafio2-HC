const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Adicionando o produto na tabela

    let nome = document.getElementById('nome').value;
    let precoRegular = document.getElementById('preco-reg').value;
    let precoPromocional = document.getElementById('preco-pro').value;
    let categoria = document.getElementById('categoria').value;

    let dados = {
        nome,
        precoRegular,
        precoPromocional,
        categoria
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

    // Adicionando o produto no Local Storage

    let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

    produtos.push(dados);

    let produtosConvertidos = JSON.stringify(produtos);

    localStorage.setItem('produto', produtosConvertidos);
});