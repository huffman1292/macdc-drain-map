fetch("assets/svg/michigan-counties.svg")
    .then(response => response.text())
    .then(svg => {
        document.getElementById("map-container").innerHTML = svg;
    })
    .catch(error => {
        console.error(error);
    });