document.addEventListener('DOMContentLoaded', function() {
    carregarSessoesNoSelect();

    const formVenda = document.getElementById('form-venda');
    if (formVenda) {
        formVenda.addEventListener('submit', function(evento) {
            evento.preventDefault();
            const ingresso = {
                sessaoSelecionada: document.getElementById('vendaSessao').options[document.getElementById('vendaSessao').selectedIndex].text,
                sessaoId: document.getElementById('vendaSessao').value,
                clienteNome: document.getElementById('clienteNome').value,
                clienteCpf: document.getElementById('clienteCpf').value,
                assento: document.getElementById('assento').value,
                pagamento: document.getElementById('pagamento').value,
                dataVenda: new Date().toISOString()
            };
            const ingressos = JSON.parse(localStorage.getItem('ingressos')) || [];
            ingressos.push(ingresso);
            localStorage.setItem('ingressos', JSON.stringify(ingressos));
            alert('Venda de ingresso confirmada com sucesso!');
            formVenda.reset();
            window.location.href = "index.html"; 
        });
    }
});

function carregarSessoesNoSelect() {
    const selectSessao = document.getElementById('vendaSessao');
    if (!selectSessao) return;

    const sessoes = JSON.parse(localStorage.getItem('sessoes')) || [];

    sessoes.forEach(function(sessao) {
        const dataFormatada = new Date(sessao.dataHora).toLocaleString('pt-BR');
        const option = document.createElement('option');
        option.value = sessao.id; 
        option.textContent = `${sessao.filme} | ${sessao.sala} | ${dataFormatada} | R$ ${sessao.preco}`;
        selectSessao.appendChild(option);
    });

    const parametrosUrl = new URLSearchParams(window.location.search);
    const idSessaoDaUrl = parametrosUrl.get('sessaoId');

    if (idSessaoDaUrl) {
        selectSessao.value = idSessaoDaUrl; 
    }
}