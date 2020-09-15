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
let pokemonInfo = document.getElementById("pokemon-info");

let prevEvolutionImage = document.getElementById("prevEvolutionImage");
let prevEvolutionName = document.getElementById("prevEvolutionName");
let prevEvolutionInfo = document.getElementById("prevEvolutionInfo");


var speciesUrl = "";

document.getElementById("search").addEventListener("click", async() => {

    let inputElement = document.getElementById("input").value;

    await fetch("https://pokeapi.co/api/v2/pokemon/" + inputElement)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(err => console.error(err));

})

function showData(pokemon) {

nameElem.innerHTML = pokemon.name;
imageElem.src = pokemon.sprites.front_default;
pokemonIdElem.innerHTML = "#" + pokemon.id;
typeElem.innerHTML = pokemon.types[0].type.name;
movesElem.innerHTML = pokemon.moves[0].move.name;

speciesUrl = pokemon.species.url;


}


document.getElementById("evolution-btn").addEventListener("click", async()=>{

    await fetch(speciesUrl)
        .then(response => response.json())
        .then(data => showEvolution(data))
        .catch(err => console.error(err))

})

function showEvolution(species){

    prevEvolutionName.innerHTML = species.evolves_from_species.name;

    nameElem.innerHTML = "";
    pokemonIdElem.innerHTML = "";
    typeElem.innerHTML = "";
    movesElem.innerHTML = "";


    fetch("https://pokeapi.co/api/v2/pokemon/" + species.evolves_from_species.name)
        .then(response => response.json())
        .then(data => {

            prevEvolutionImage.src = data.sprites.front_default;

        })
        .catch(err => console.error(err))

}

