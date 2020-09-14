


fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => response.json())
    .then(data => console.log(data))

    

    .catch(err => console.error(err));
