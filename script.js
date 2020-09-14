/*
search pokémon by name and ID
show:
The ID-number
An image (sprite)
At least 4 "moves"
The previous evolution
 */

(() => {
    // your code here
    document.getElementById("search").addEventListener("click", () => {

        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => searchData(data))
            .catch(err => console.error(err));

        function searchData(pokemon) {

            let pokemonId = Number(document.getElementById("pokeId").value);
            let pokemonName = Number(document.getElementById("name").value);

            document.getElementById("pokeId").innerHTML = pokemon.id;
            document.getElementById("name").innerHTML = pokemon.types[0].type.name;
            document.getElementById("sprite").innerHTML = pokemon.sprites.front_default;
            document.getElementById("moves").innerHTML = pokemon.moves;

        }

    })
})();
