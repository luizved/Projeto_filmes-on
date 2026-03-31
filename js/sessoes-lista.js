document.addEventListener('DOMContentLoaded', function() {
    const containerLista = document.getElementById('lista-sessoes');
    if (!containerLista) return;

    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

    if (sessoes.length === 0) {
        containerLista.innerHTML = '<div class="col-12"><p class="text-center text-muted">Nenhuma sessão cadastrada no momento.</p></div>';
        return;
    }

    sessoes.forEach(function(sessao) {
        const dataFormatada = new Date(sessao.dataHora).toLocaleString('pt-BR');
        const cardHTML = `
            <div class="col-md-4 mb-3">
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title text-primary">${sessao.filme}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Sala: ${sessao.sala}</h6>
                        <p class="card-text">
                            <strong>Data:</strong> ${dataFormatada}<br>
                            <strong>Idioma:</strong> ${sessao.idioma} <br>
                            <strong>Formato:</strong> ${sessao.formato}<br>
                            <strong class="text-success fs-5">R$ ${sessao.preco}</strong>
                        </p>
                        <a href="venda-ingressos.html?sessaoId=${sessao.id}" class="btn btn-primary w-100">Comprar Ingresso</a>
                    </div>
                </div>
            </div>
        `;
        containerLista.innerHTML += cardHTML;
    });
});