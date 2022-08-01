function votesToHTML(stages) {
  return Object.entries(stages).map(([stage, candidates]) => {
    let inner = `<h3>${stage.toUpperCase()}</h3>`;
    inner += Object.entries(candidates).map(([id, qtd]) => {
      return `<p>${id} => ${qtd}</p>`
    }).join('');
    return inner;
  }).join('');
}

window.onload = () => {
  const body = document.getElementById('resultado');
  ajax(baseURL + '/votes', 'GET', (response) => {
    
    body.innerHTML = votesToHTML(response.data);
  })
};