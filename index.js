let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function addPoints(team, numberOfPoints) {
    if (team === "home") {
        homeScore += numberOfPoints
        homeScoreEl.textContent = homeScore
    } else {
        guestScore += numberOfPoints
        guestScoreEl.textContent = guestScore
    }
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}

window.addPoints
window.resetScore
