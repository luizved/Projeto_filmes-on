document.addEventListener('DOMContentLoaded', function() {
    carregarFilmes();
    carregarSalas();

    const formSessao = document.getElementById('form-sessao');
    if (formSessao) {
        formSessao.addEventListener('submit', function(evento) {
            evento.preventDefault();
            const novaSessao = {
                id: Date.now(),
                filme: document.getElementById('sessaoFilme').value,
                sala: document.getElementById('sessaoSala').value,
                dataHora: document.getElementById('dataHora').value,
                preco: parseFloat(document.getElementById('preco').value).toFixed(2),
                idioma: document.getElementById('idioma').value,
                formato: document.getElementById('formato').value
            };
            const sessoesSalvas = JSON.parse(localStorage.getItem('sessoes')) || [];
            sessoesSalvas.push(novaSessao);
            localStorage.setItem('sessoes', JSON.stringify(sessoesSalvas));
            alert('Sessão cadastrada com sucesso!');
            formSessao.reset();
        });
    }
});

function carregarFilmes() {
    const selectFilme = document.getElementById('sessaoFilme');
    if(!selectFilme) return;
    const filmesSalvos = JSON.parse(localStorage.getItem('filmes')) || [];
    filmesSalvos.forEach(filme => {
        const option = document.createElement('option');
        option.value = filme.titulo;
        option.textContent = filme.titulo;
        selectFilme.appendChild(option);
    });
}

function carregarSalas() {
    const selectSala = document.getElementById('sessaoSala');
    if(!selectSala) return;
    const salasSalvas = JSON.parse(localStorage.getItem('salas')) || [];
    salasSalvas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.nomeSala;
        option.textContent = `${sala.nomeSala} (${sala.tipoSala})`;
        selectSala.appendChild(option);
    });
}