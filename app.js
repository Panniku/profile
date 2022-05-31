console.log('Running...')

let homeTab = document.getElementById("homeTab")
let commsTab = document.getElementById("commsTab")
let rulesTab = document.getElementById("rulesTab")

let homeContent = document.getElementById("homeContent")
let commsContent = document.getElementById("commsContent")
let rulesContent = document.getElementById("rulesContent")

homeTab.style.background = "rgba(100, 100, 100, 0.4)"
homeContent.style.visibility = "visible"
commsContent.style.visibility = "hidden"
rulesContent.style.visibility = "hidden"

homeTab.addEventListener('click', function () {
    homeTab.style.background = "rgba(100, 100, 100, 0.4)"
    rulesTab.style.background = "rgba(100, 100, 100, 0.2)"
    commsTab.style.background = "rgba(100, 100, 100, 0.2)"

    homeContent.style.visibility = "visible"
    commsContent.style.visibility = "hidden"
    rulesContent.style.visibility = "hidden"
})
commsTab.addEventListener('click', function () {
    homeTab.style.background = "rgba(100, 100, 100, 0.2)"
    rulesTab.style.background = "rgba(100, 100, 100, 0.2)"
    commsTab.style.background = "rgba(100, 100, 100, 0.4)"

    homeContent.style.visibility = "hidden"
    commsContent.style.visibility = "visible"
    rulesContent.style.visibility = "hidden"
})
rulesTab.addEventListener('click', function () {
    homeTab.style.background = "rgba(100, 100, 100, 0.2)"
    rulesTab.style.background = "rgba(100, 100, 100, 0.4)"
    commsTab.style.background = "rgba(100, 100, 100, 0.2)"

    homeContent.style.visibility = "hidden"
    commsContent.style.visibility = "hidden"
    rulesContent.style.visibility = "visible"
})