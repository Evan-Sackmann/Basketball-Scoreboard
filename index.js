let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")

let homeScore = 0
let awayScore = 0

function add1PointHome() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}
function add2PointHome() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}
function add3PointHome() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}
function add1PointAway() {
    awayScore += 1
    awayScoreEl.innerText = awayScore
}
function add2PointAway() {
    awayScore += 2
    awayScoreEl.innerText = awayScore
}
function add3PointAway() {
    awayScore += 3
    awayScoreEl.innerText = awayScore
}