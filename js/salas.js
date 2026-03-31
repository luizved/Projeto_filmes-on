document.addEventListener('DOMContentLoaded', function() {
    const formSala = document.getElementById('form-sala');
    if (formSala) {
        formSala.addEventListener('submit', function(evento) {
            evento.preventDefault();
            const sala = {
                nomeSala: document.getElementById('nomeSala').value,
                capacidade: document.getElementById('capacidade').value,
                tipoSala: document.getElementById('tipoSala').value
            };
            const salas = JSON.parse(localStorage.getItem('salas')) || [];
            salas.push(sala);
            localStorage.setItem('salas', JSON.stringify(salas));
            alert('Sala cadastrada com sucesso!');
            formSala.reset();
        });
    }
});