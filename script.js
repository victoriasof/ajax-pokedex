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

    let pokemonArr= [];
    let inputElement = document.getElementById("pokeId");
    console.log(inputElement);


    document.getElementById("search").addEventListener("click", () => {

        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => showData(data))
            .catch(err => console.error(err));

    })

    function showData(pokemon) {

        let pokemonId = Number(document.getElementById("pokeId").value);
        let pokemonName = document.getElementById("name").value;

        pokemon.forEach(poke => {

            if (poke.id === pokemonId) {

                document.getElementById("sprite").innerHTML = poke.sprites.front_default;

                document.getElementById("pokeId").innerHTML = poke.id;
                document.getElementById("name").innerHTML = poke.types[0].type.name;
                document.getElementById("moves").innerHTML = poke.moves;

                
            }
        })

    }

})();
