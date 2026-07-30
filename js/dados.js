const VERSAO_DADOS = '1.0';

function carregarTextos(){
  return fetch(`data/textos.json?v=${VERSAO_DADOS}`)
    .then(res => res.json())
    .catch(err => {
      console.error('Erro ao carregar textos:', err);
      return [];
    });
}

function formatarDataCurta(dataStr){
  const meses = ['jan.','fev.','mar.','abr.','mai.','jun.','jul.','ago.','set.','out.','nov.','dez.'];
  const d = new Date(dataStr + 'T00:00:00');
  return `${meses[d.getMonth()]} ${d.getFullYear()}`;
}

function renderizarLinhaEdicao(texto){
  return `
    <div class="edicao">
      <a href="texto.html?id=${texto.id}" class="edicao-link">
        <span class="edicao-tipo">${texto.tipo}</span>
        <span class="edicao-titulo">${texto.titulo}</span>
      </a>
      <div class="edicao-data">${formatarDataCurta(texto.data)}</div>
    </div>
  `;
}
