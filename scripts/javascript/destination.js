let TOMTOM_API_KEY = "Ss34b0BCennQsGT7hCzfgvlWNmh35biC"

function getIdsForRequest(answers) {
    return answers.reduce((prev, current) => {
        prev = prev.concat(current.id);
        return prev;
    }, [])
}

function getDestination(ids) {
    const tenIds = ids.sort(() => .5 - math.random()).slice(0,9); // API can only have 10 ids so need to sort
    const url = `https://api.tomtom.com/search/2/categorySearch/places.json?key=${TOMTOM_API_KEY}&limit=50&categorySet=${tenIds.join(",")}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
            if (data.results.length > 0) {
                location = data.results[getRandomNumber(data.results.length) - 1].localname.country;
                updateElementWithRandomPhoto(location, "destinationImgId")
            }
    })
    .catch((err) => console.error("error getting image"));
}

function getRandomNumber(n) {
    return Math.round(Math.random() * n);
  }
  
  module.exports = { getDestination, getIdsForRequest }