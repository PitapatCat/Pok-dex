// TODO: What is the difference between json and json.results?

async function fetchPokeData(pokemon) {
    const response = await fetch(pokemon.url);
    const json = await response.json();
    //console.log('deep json', json);
    //console.log('deep json.results', json.results);
    return json;
}

async function fetchPokeForm(pokeDatum) {
    const response = await fetch(pokeDatum.forms[0].url)
    const json = await response.json();
    //console.log('deep deep json', json);
    return json;
}

export async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
    const json = await response.json();
    //console.log('json.results', json.results);
    
    const allPokemon = await json.results;

    let pokeData = [];
    for (const pokemon of allPokemon) {
        //console.log('pokemon', pokemon);
        pokeData.push(await fetchPokeData(pokemon));
        //console.log('pokeData', pokeData);
    }

    // let pokeForm = [];
    // for (const pokeDatum of pokeData) {
    //     pokeImage.push(await fetchPokeForm(pokeDatum));
    // }

    

    //console.log('EOF pokeData', pokeData);

    // list of pokemon characteristics returned
    return pokeData;
}