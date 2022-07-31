const baseURL = 'https://trab-final.herokuapp.com'
// const baseURL = 'http://localhost:8000'

function ajax(url, method, callback, body = null) {
  let request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open(method, url, true);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status == "200") {
      callback(JSON.parse(request.responseText));
    }
  };
  request.send(JSON.stringify(body));
}

/**
 * Zera os votos.
 */
 function deleteVotes() {
  console.log('zerar votos');
  ajax(baseURL + '/votes', 'POST', () => {
    document.location.reload(true);
  }, {method: 'DELETE'})
}

