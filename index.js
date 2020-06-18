const api = `http://quotes.rest/qod.json?category=inspire`;

fetch(api)
  .then(response => {
    return response.json();
  } )
  .then( data =>{
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    document.querySelector(".quote").innerHTML = '" ' + quote + ' "';
    document.querySelector(".author").innerHTML = author;

  } );
