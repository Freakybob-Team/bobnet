// BobNet by Freakybob Team.
// Licensed under GPL-3.0.
// If used in your project, please credit this repository and us!
// Thank you <3
let mapping = null;
let jsonurl = "https://freakybob-team.github.io/bobnet/json/sites.json";

const form = document.getElementById('customJSONForm');

function customJSON() {
    form.style.display = "block";
}

function useJSON() {
    const input = document.getElementById('jsonurl');
    jsonurl = input.value;
    form.style.display = "none";
    fetchMapping();
}

document.getElementById("customJSONForm").addEventListener("submit", function(event) {
    event.preventDefault();
    useJSON();
});

function fetchMapping() {
    fetch(jsonurl, { cache: "no-store" })
        .then(res => res.json())
        .then(data => {
            mapping = data;
        })
        .catch(err => console.error("couldn't load mapping:", err));
}

fetchMapping();

function goThere() {
    if (!mapping) {
        alert("mapping not loaded yet");
        return;
    }
    const greg = document.getElementById("search").value.trim();
    const idx = mapping.sitename.indexOf(greg);

    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('goto');
    if (param && mapping.sitename.includes(param)) {
        const pIdx = mapping.sitename.indexOf(param);
        window.location.href = mapping.sitelink[pIdx];
        return;
    }

    if (idx !== -1) {
        window.location.href = mapping.sitelink[idx];
    } else {
        alert("no such site :(");
    }
}

const textInput = document.getElementById('search');
textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        goThere();
    }
});