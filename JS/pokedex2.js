var n = Math.floor(Math.random() * 898);


const urlSearchPokemon = "https://pokeapi.co/api/v2/pokemon";
const inputField = document.getElementById('name-input');
inputField.style.textTransform = 'lowercase';
const searchBtn = document.getElementById('search-btn');
let APIDATA = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    query: n,//10094
}

function previousPokemon() {
    const PokePrevious = () => {
        fetch(`${APIDATA.url}${APIDATA.type}/${APIDATA.query}`)
            .then(res => {
                return res.json();
            })
            .then(dataprevious => {
                let IdPrevious = dataprevious.id - 1
                APIDATA.query = IdPrevious
                console.log(APIDATA.query)
                PokeAPI();
            })
    }
    //pokemon suivant avec ID (recup l'id et faire - 1)
    PokePrevious();
}

function nextPokemon() {
    const PokeNext = () => {
        fetch(`${APIDATA.url}${APIDATA.type}/${APIDATA.query}`)
            .then(res => {
                return res.json();
            })
            .then(datanext => {
                let IdNext = datanext.id + 1
                APIDATA.query = IdNext
                PokeAPI()
            })
    }
    //pokemon suivant avec ID (recup l'id et faire + 1)
    PokeNext();
}


const PokeAPI = () => {
    fetch(`${APIDATA.url}${APIDATA.type}/${APIDATA.query}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(APIDATA.query)
            inputField.addEventListener('keydown', (event) => event.key === 'Enter' && searchBtn.click());
            searchBtn.addEventListener('click', () => PokeAPI(APIDATA.query = inputField.value));
            const html =
                `
                <p>${data.name}</p>
            `
            const htmlPokedex =
                `
                <p><span>Name : </span>${data.name}</p>
            `

            const pokemon = document.querySelector('.pokemonName');
            pokemon.innerHTML = html;
            const pokemonPokedex = document.querySelector('.pokemonNamePokedex');
            pokemonPokedex.innerHTML = htmlPokedex;
            let pokeimage = data.sprites.front_default;
            let pokeimage3D = data.sprites.other.home.front_default;
            imgpokemonimg = document.querySelector(".pokeimg")
            imgpokemonimg.setAttribute("src", pokeimage)
            imgpokemonimgPokedex = document.querySelector(".pokeimgPokedex")
            imgpokemonimgPokedex.setAttribute("src", pokeimage3D)
            //recuperer le type
            const typee =
                `
                    <p><span>type : </span>${data.types[0].type.name}</p>
                `
            const pokemonPokedexType = document.querySelector('.pokemonTypePokedex');
            pokemonPokedexType.innerHTML = typee;
            //recuperer le poid
            const weight =
                `
                    <p><span>Weight : </span>${data.weight / 10} Kg</p>
                `
            const pokemonPokedexWeight = document.querySelector('.pokemonWeightPokedex');
            pokemonPokedexWeight.innerHTML = weight;
            //recuperer l'ID
            const id =
                `
                    <p><span>#</span>${data.id}</p>
                `
            const pokemonPokedexId = document.querySelector('.pokemonIdPokedex');
            pokemonPokedexId.innerHTML = id;
            //Recuperer ses HP
            const hp =
                `
                    <p><span>Hp : </span>${data.stats[0].base_stat}</p>
                `
            const pokemonPokedexHp = document.querySelector('.pokemonHpPokedex');
            pokemonPokedexHp.innerHTML = hp;
            //Recuperer Attack
            const attack =
                `
                        <p><span>Attack : </span>${data.stats[1].base_stat}</p>
                    `
            const pokemonPokedexAttack = document.querySelector('.pokemonAttackPokedex');
            pokemonPokedexAttack.innerHTML = attack;
            //Recuperer defense
            const defense =
                `
                        <p><span>Defense : </span>${data.stats[2].base_stat}</p>
                    `
            const pokemonPokedexDefense = document.querySelector('.pokemonDefensePokedex');
            pokemonPokedexDefense.innerHTML = defense;
            //Recuperer Attack Spe.
            const attackSpe =
                `
                        <p><span>Attack Spé. : </span>${data.stats[3].base_stat}</p>
                    `
            const pokemonPokedexAttackSpe = document.querySelector('.pokemonAttackSpePokedex');
            pokemonPokedexAttackSpe.innerHTML = attackSpe;
            //Recuperer Defense Spe.
            const defenseSpe =
                `
                        <p><span>Defense Spé. : </span>${data.stats[4].base_stat}</p>
                    `
            const pokemonPokedexDefenseSpe = document.querySelector('.pokemonDefenseSpePokedex');
            pokemonPokedexDefenseSpe.innerHTML = defenseSpe;
            //Recuperer Speed
            const Speed =
                `
                        <p><span>Speed : </span>${data.stats[5].base_stat}</p>
                    `
            const pokemonPokedexSpeed = document.querySelector('.pokemonSpeedPokedex');
            pokemonPokedexSpeed.innerHTML = Speed;

            //soren
            const body = document.getElementById("body");
            const typePokemon = data.types[0].type.name;

            body.classList.add(typePokemon);

            const Types = [
                'normal', 'fighting', 'flying',
                'poison', 'ground', 'rock',
                'bug', 'ghost', 'steel',
                'fire', 'grass', 'water',
                'electric', 'psychic', 'ice',
                'dragon', 'dark', 'fairy'
            ]
            if (body.classList.length > 1) {
                body.classList.remove("normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "grass", "water", "electric", "psychic", "ice", "dragon", "dark", "fairy")
                body.classList.add(typePokemon)
            }

            const reset = () => {
                for (const type of Types) {
                    body.classList.remove(type);
                }
            };
            //soren

        })

}
PokeAPI();

function goDown() {
    window.scrollTo({
        top: 800,
        left: 0,
        behavior: "smooth",
    })
}

function goUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

history.scrollRestoration = 'manual';