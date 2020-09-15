/*
search pokémon by name and ID
show:
The ID-number
An image (sprite)
At least 4 "moves"
The previous evolution
 */


// your code here

let nameElem = document.getElementById("name");
let imageElem = document.getElementById("pokemon-image")
let pokemonIdElem = document.getElementById("pokeId");
let typeElem = document.getElementById("type");
let movesElem = document.getElementById("moves");

let prevEvolutionImage = document.getElementById("prevEvolutionImage");
let prevEvolutionName = document.getElementById("prevEvolutionName");
let prevEvolutionInfo = document.getElementById("prevEvolutionInfo");
let pokemonInfo = document.getElementById("pokemon-info");




document.getElementById("search").addEventListener("click", () => {

    let inputElement = document.getElementById("input").value;

    fetch("https://pokeapi.co/api/v2/pokemon/" + inputElement)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(err => console.error(err));

})

document.getElementById("evolution-btn").addEventListener("click", getPrevEvolution);

function showData(pokemon) {

    let { id, moves, name, sprites, types } = pokemon;

nameElem.textContent = name;
imageElem.src = sprites.other["official-artwork"].front_default;
pokemonIdElem.textContent = "#" + id;
typeElem.textContent = types[0].type.name;

}


