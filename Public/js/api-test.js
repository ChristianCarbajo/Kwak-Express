


let baseUrl = "https://rickandmortyapi.com/api";

async function apiGET(route) {
    try {
        const response = await fetch(baseUrl + route)
        const data = await response.json()
        let characters = data.results
        return characters
    } catch (error) { }
}


async function useAPI(params) {

    let characters = await apiGET(params)
    characters.forEach((element, index) => {

        document.querySelector(".main-novedades").innerHTML += `<div>
        <a href="./second_page.html?id=1"><img class="main-novedades-img"  src="${characters[index].image}"
            alt="${characters[index].name}"></a>
        <h3>"${characters[index].name}"</h3>
    </div>`
    });
}




useAPI("/character")


