//Question 2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=7619edd099a54bb4966f653a079848e8";


const resultsContainer = document.querySelector(".container");

async function callApi() {
    try {
        const response = await fetch(url);

        const json = await response.json();

        const results = json.results;


        for (let i = 0; i < 8; i++) {
            const game = results[i];
            resultsContainer.innerHTML += `<div class="details">
                                         <h2>Name: ${game.name} </h2>
                                         <h3>Rating: ${game.rating} </h3>
                                         <h4>Number of tags: ${game.tags.length}</h4>
                                      </div>`;
        };
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML += "<h2>API not found!</h2>"
    };

    document.querySelector(".loader").style.display = "none";

}

callApi();


