let TOMTOM_API_KEY = "Ss34b0BCennQsGT7hCzfgvlWNmh35biC";

function getIdsForRequest(answers) {
    return answers.reduce((prev, current) => {
        prev = prev.concat(current.id);
        return prev;
    }, []);
};

function displaySpinner(yes) {
    if (yes) {
        document.getElementById("spinner").classList.remove("hidden");
    } else {
        document.getElementById("spinner").classList.add("hidden");
    }
}

function getDestination(ids) {
    displaySpinner(true);
    const tenIds = getRandomFromArray(ids, 10); // API can only have 10 ids so need to sort
    const tenCountryCodes = getRandomFromArray(tenCountryCodes, 10);
    const url = `https://api.tomtom.com/search/2/categorySearch/.json?key=${TOMTOM_API_KEY}&categorySet=${tenIds.join(
        ","
      )}&countrySet=${tenCountryCodes.join(",")}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.results.length > 0) {
                const location = data.results[getRandomNumber(data.results.length) - 1];
                getDestinationImage(location).then((image) => {
                    document.getElementById("destination-image").src =image.urls.regular;
                    displayDestination(location);
                    displaySpinner(false);
                })
            }
        })
        .catch((err) => console.error("error getting destination", err));
};

function getDestinationImage(location) {
    return new Promise ((resolve, reject) => {
        const url = `https://api.unsplash.com/search/photos?query=${location.address.country} capital&client_id=${UNSPLASH_API_KEY}&orientation=squarish&`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.results.length > 0) {
                    resolve(data.results[0]);
                }
                reject()
            })
            .catch((err) => reject(err));
    });
}

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