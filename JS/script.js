let n = Math.floor(Math.random() * 882);
function activeButton() {
    n = n + 1
    PokeAPI();
}
function activeButton2() {
    n = n - 1
    PokeAPI();
}

const url = "https://pokeapi.co/api/v2/pokemon?limit=882";
const PokeAPI = () => {
    fetch(url)
        .then( res => {
            return res.json();
        })
        .then( data => {
            console.log(data);
            let url2 = data.results[n].url;
            const html =
            `
                <div>${data.results[n].name}</div>
            `
            const pokemon = document.querySelector('.pokemon');
            pokemon.innerHTML = html;

            fetch(url2)
                .then( res2 => {
                    return res2.json();
                })
                .then( data2 => {
                    console.log(data2);
                    let pokeimage = data2.sprites.front_default;
                    imgpokemonimg = document.querySelector(".pokeimg")
                    imgpokemonimg.setAttribute("src", pokeimage)

                })


        })
    
}
PokeAPI();