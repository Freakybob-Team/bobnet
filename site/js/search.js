// BobNet by Freakybob Team.
// Licensed under GPL-3.0.
// If used in your project, please credit this repository and us!
// Thank you <3
let mapping = null;

fetch("https://freakybob-team.github.io/bobnet/json/sites.json", { cache: "no-store" })
    .then(res => res.json())
    .then(data => {
        mapping = data;
    })
    .catch(err => console.error("couldn't load mapping:", err));

function goThere() {
    if (!mapping) {
        alert("mapping not loaded yet");
        return;
    }
    const greg = document.getElementById("search").value.trim();
    const idx = mapping.sitename.indexOf(greg);
    if (idx !== -1) {
        window.location.href = mapping.sitelink[idx];
    } else {
        alert("no such site :(");
    }
}

const textInput = document.getElementById('search');
textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        goThere();
    }
});
