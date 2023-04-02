const DEFAULT_VALUE = '--';

const Name = document.querySelector(".name");
const Type = document.querySelector(".type");
const Height = document.querySelector(".height");
const Weight = document.querySelector(".weight");
const Img = document.querySelector(".img");

function pokedex() {
    let num = document.getElementById("search-input").value;
    getPokemon(num);
}


 function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    fetch(url)
    .then(response => response.json())
    .then(function(data) {
        console.log("Success: ",data);
        Name.innerHTML = data.name || DEFAULT_VALUE;
        Type.innerHTML = data.types[0].type.name || DEFAULT_VALUE;
        Height.innerHTML = data.height || DEFAULT_VALUE;
        Weight.innerHTML = data.weight || DEFAULT_VALUE;
        // Img = data.sprites.front_default|| DEFAULT_VALUE;

    })
    
        
    
}
pokedex()