const flightStatus = document.getElementById("flight")


const flightHandlerFunction = () => {
    flightStatus.classList.remove("disabled");
    flightStatus.classList.add("enabled");
}

mindPowerStatus = document.getElementById("mindreading")

const mindReadingHandler = () => {
    mindPowerStatus.classList.remove("disabled");
    mindPowerStatus.classList.add("enabled");
}

xrayPowerStatus = document.getElementById("xray")

const xrayPowerHandler = () => {
    xrayPowerStatus.classList.remove("disabled");
    xrayPowerStatus.classList.add("enabled");
}

const unactivatedPowers = document.querySelectorAll("section")

const allPowersEngage = () => {
    for (i = 0; i < unactivatedPowers.length; i++) {
        unactivatedPowers[i].classList.remove("disabled");
        unactivatedPowers[i].classList.add("enabled")
    }    
    };
  
const activatedPowers = document.querySelectorAll("section")

const disengageAllPowers = () => {
    for (i = 0; i < activatedPowers.length; i++) {
        activatedPowers[i].classList.remove("enabled");
        activatedPowers[i].classList.add("disabled");
}
}

document.querySelector("#activate-flight").addEventListener("click",flightHandlerFunction)

document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandler )

document.querySelector("#activate-xray").addEventListener("click", xrayPowerHandler)

document.querySelector("#activate-all").addEventListener("click", allPowersEngage)

document.querySelector("#deactivate-all").addEventListener("click", disengageAllPowers)