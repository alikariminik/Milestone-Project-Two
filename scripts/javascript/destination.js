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
                let fernando = location.address.countrySubdivision;
                console.log(fernando);
                let luis = location.address.country;
                console.log(luis);
                displayDestination();
                document.getElementById("city").innerHTML(`<p>Meow</p>`);
                //document.getElementById("destination").innerHTML = location;
                // localname
                // country
                //updateElementWithRandomPhoto(location, "destinationImgId")
            }
        })
        .catch((err) => console.error("error getting image"));
};

function getRandomFromArray(array, n) {
    return array.sort(() => 0.5 - Math.random()).slice(0, n - 1);
}

function getRandomNumber(n) {
    return Math.round(Math.random() * n);
}

function displayDestination() {
    document.getElementById("destination").classList.remove("hidden");
    document.getElementById("city").innerHTML =`<p>${location.address.localName}</p>`;
    document.getElementById("country").innerHTML =`<p>${location.address.country}</p>`;
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