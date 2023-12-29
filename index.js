function clearElement(e) {
    while(e.firstChild) {
        e.removeChild(e.lastChild);
    }
}

function clearElements(arr) {
    arr.forEach((e) => clearElement(e));
}

function generateTierList() {
    let splusContainer = document.getElementById("splus");
    let sContainer = document.getElementById("s");
    let sminusContainer = document.getElementById("sminus");
    let aplusContainer = document.getElementById("aplus");
    let aContainer = document.getElementById("a");
    let aminusContainer = document.getElementById("aminus");
    let bplusContainer = document.getElementById("bplus");
    let bContainer = document.getElementById("b");
    let bminusContainer = document.getElementById("bminus");
    let cplusContainer = document.getElementById("cplus");
    let cContainer = document.getElementById("c");
    let cminusContainer = document.getElementById("cminus");
    let fContainer = document.getElementById("f");
    clearElements([
        splusContainer, sContainer, sminusContainer,
        aplusContainer, aContainer, aminusContainer,
        bplusContainer, bContainer, bminusContainer,
        cplusContainer, cContainer, cminusContainer,
        fContainer
    ]);
    let berryFilter = Array.from(document.querySelectorAll("input[name='Berries']:checked")).map((e) => e.value);
    let ingredientFilter = Array.from(document.querySelectorAll("input[name='Ingredients']:checked")).map((e) => e.value);
    let filteredPokemonDB = pokemonDB.filter((p) => berryFilter.length === 0 || berryFilter.includes(p.Berry));
    filteredPokemonDB = filteredPokemonDB.filter((p) => {
        if(ingredientFilter.length === 0) {
            return true;
        }
        let pokemonIngredients = p.Ingredients.split("/");
        for(let i = 0; i < pokemonIngredients.length; i++) {
            if(ingredientFilter.includes(pokemonIngredients[i])) {
                return true;
            }
        }
    });
    for(let i = 0; i < filteredPokemonDB.length; i++) {
        let pokemon = filteredPokemonDB[i];
        let pokemonContainer = document.createElement("div");
        pokemonContainer.classList.add("pokemonContainer");
        let pokemonImg = document.createElement("img");
        pokemonImg.src = pokemon.Image;
        pokemonImg.alt = pokemon.Pokemon;
        pokemonImg.title = pokemonImg.alt;
        pokemonImg.classList.add("pokemonImg");
        pokemonContainer.appendChild(pokemonImg);
        let berry = berryDB.find((e) => e.Berry === pokemon.Berry);
        let berryImg = document.createElement("img");
        berryImg.src = berry.Image;
        berryImg.alt = berry.Berry + " Berry";
        berryImg.title = berryImg.alt;
        berryImg.classList.add("berryImg");
        pokemonContainer.appendChild(berryImg);
        let ingredients = pokemon.Ingredients.split("/");
        let ingredientsContainer = document.createElement("span");
        ingredientsContainer.classList.add("ingredientsContainer");
        for(let j = 0; j < ingredients.length; j++) {
            let ingredientStr = ingredients[j];
            let ingredient = ingredientDB.find((e) => e.Ingredient === ingredientStr);
            let ingredientImg = document.createElement("img");
            ingredientImg.src = ingredient.Image;
            ingredientImg.alt = ingredient.FullName;
            ingredientImg.title = ingredientImg.alt;
            ingredientImg.classList.add("ingredientImg");
            ingredientsContainer.appendChild(ingredientImg);
        }
        pokemonContainer.appendChild(ingredientsContainer);
        switch(pokemon.Tier) {
            case "S+":
                splusContainer.appendChild(pokemonContainer);
                break;
            case "S":
                sContainer.appendChild(pokemonContainer);
                break;
            case "S-":
                sminusContainer.appendChild(pokemonContainer);
                break;
            case "A+":
                aplusContainer.appendChild(pokemonContainer);
                break;
            case "A":
                aContainer.appendChild(pokemonContainer);
                break;
            case "A-":
                aminusContainer.appendChild(pokemonContainer);
                break;
            case "B+":
                bplusContainer.appendChild(pokemonContainer);
                break;
            case "B":
                bContainer.appendChild(pokemonContainer);
                break;
            case "B-":
                bminusContainer.appendChild(pokemonContainer);
                break;
            case "C+":
                cplusContainer.appendChild(pokemonContainer);
                break;
            case "C":
                cContainer.appendChild(pokemonContainer);
                break;
            case "C-":
                cminusContainer.appendChild(pokemonContainer);
                break;
            case "F":
                fContainer.appendChild(pokemonContainer);
                break;
        }
    }
}

function orderDB() {
    pokemonDB.sort((a, b) => {
        return a.Order - b.Order;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    orderDB();
    let berryListContainer = document.getElementById("berryList");
    for(let i = 0; i < berryDB.length; i++) {
        let berry = berryDB[i];
        let berryContainer = document.createElement("span");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.value = berry.Berry;
        input.name = "Berries";
        input.id = "berryList" + berry.Berry;
        berryContainer.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = input.id;
        let berryListImg = document.createElement("img");
        berryListImg.src = berry.Image;
        berryListImg.alt = berry.Berry + " Berry";
        berryListImg.title = berryListImg.alt;
        berryListImg.classList.add("berryListImg");
        label.appendChild(berryListImg);
        berryContainer.appendChild(label);
        berryListContainer.appendChild(berryContainer);
    }
    let ingredientListContainer = document.getElementById("ingredientList");
    for(let i = 0; i < ingredientDB.length; i++) {
        let ingredient = ingredientDB[i];
        let ingredientContainer = document.createElement("span");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.value = ingredient.Ingredient;
        input.name = "Ingredients";
        input.id = "ingredientList" + ingredient.Ingredient;
        ingredientContainer.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = input.id;
        let ingredientListImg = document.createElement("img");
        ingredientListImg.src = ingredient.Image;
        ingredientListImg.alt = ingredient.FullName;
        ingredientListImg.title = ingredientListImg.alt;
        ingredientListImg.classList.add("ingredientListImg");
        label.appendChild(ingredientListImg);
        ingredientContainer.appendChild(label);
        ingredientListContainer.appendChild(ingredientContainer);
    }
    document.getElementById("filter").addEventListener("click", () => {
        generateTierList();
    });
    generateTierList();
});