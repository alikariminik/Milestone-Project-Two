let TOMTOM_API_KEY = "Ss34b0BCennQsGT7hCzfgvlWNmh35biC";

function getIdsForRequest(answers) {
    return answers.reduce((prev, current) => {
        prev = prev.concat(current.id);
        return prev;
    }, []);
};

function getDestination(ids) {
    const tenIds = ids.sort(() => 0.5 - Math.random()).slice(0, 9); // API can only have 10 ids so need to sort
    const tenCountryCodes = countryCodes.sort(() => 0.5 - Math.random()).slice(0, 9);
    const url = `https://api.tomtom.com/search/2/categorySearch/places.json?key=${TOMTOM_API_KEY}&limit=100&ofs=1900&rcategorySet=${tenIds.join}countrySet=${tenCountryCodes.join(",")}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.results.length > 0) {
                const location = data.results[getRandomNumber(data.results.length) - 1];
                console.log(location);
                let city = location.address.countrySubdivision;
                console.log(city);
                let country = location.address.country;
                console.log(country);
                //document.getElementById("destination").innerHTML = location;
                // localname
                // country
                //updateElementWithRandomPhoto(location, "destinationImgId")
            }
        })
        .catch((err) => console.error("error getting image"));
};

function getRandomNumber(n) {
    return Math.round(Math.random() * n);
}

function displayDestination() {
    $("#destination").html(`
    <div class="container">
        <div class="flex-box">
            <div class="ticket-box">
                <p class="suggestion">We think you're going to love...</p>
                <div class="image-container"> <img class="option-image"
                src="assets/images/burj.avif" alt=photo of burj khalifa></div>
                <div style="text-align:center" class="destination-text-box">
                <h2>city</h2><hr class="hidden"><h2>country</h2></div>
            </div>
        </div>
    </div>`);
}

module.exports = {
    getDestination,
    getIdsForRequest,
    displayDestination
}

//     console.log(location)
//     let destinationResults = document.getElementById("destination");
//     destinationResults.innerHTML(`<h2 class="container">Based off your answers, we think you would like</h2>
//     <div class="container"></div>`)
// updateElementWithRandomPhoto(location, "destinationImgId")