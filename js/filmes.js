document.addEventListener('DOMContentLoaded', function() {
    const formFilme = document.getElementById('form-filme');
    if (formFilme) {
        formFilme.addEventListener('submit', function(evento) {
            evento.preventDefault();
            const filme = {
                titulo: document.getElementById('titulo').value,
                genero: document.getElementById('genero').value,
                descricao: document.getElementById('descricao').value,
                classificacao: document.getElementById('classificacao').value,
                duracao: document.getElementById('duracao').value,
                estreia: document.getElementById('estreia').value
            };
            const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
            filmes.push(filme);
            localStorage.setItem('filmes', JSON.stringify(filmes));
            alert('Filme cadastrado com sucesso!');
            formFilme.reset();
        });
    }
});