let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function incrementhome1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function incrementhome2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function incrementhome3() {
    homeCount += 3
    homeScore.textContent = homeCount
}


function incrementguest1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function incrementguest2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function incrementguest3() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function reset() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}