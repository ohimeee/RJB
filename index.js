const welcomeContainer = document.getElementById("welcome-container");
const startButton = document.getElementById("start-button");
const panelContainer = document.getElementById("panel-container");

const reccaImg = document.getElementById("recca-img");
const johnmarcImg = document.getElementById("johnmarc-img");
const bryanImg = document.getElementById("bryan-img");

const reccaPanel = document.getElementById("recca-panel");
const johnmarcPanel = document.getElementById("johnmarc-panel");
const bryanPanel = document.getElementById("bryan-panel");

const reccaInfo = document.getElementById("recca-info");
const johnmarcInfo = document.getElementById("johnmarc-info");
const bryanInfo = document.getElementById("bryan-info");

const reccaClose = document.getElementById("recca-close");
const johnmarcClose = document.getElementById("johnmarc-close");
const bryanClose = document.getElementById("bryan-close");

startButton.addEventListener("click", () => {
    welcomeContainer.classList.add("translate-y-full", "opacity-0");
    panelContainer.classList.remove("-translate-y-full");
});

function togglePanel(infoPanel, panelA, panelB) {

    panelA.classList.toggle("flex-0");
    panelA.classList.toggle("flex-1");
    panelA.classList.toggle("w-0");

    panelB.classList.toggle("flex-0");
    panelB.classList.toggle("flex-1");
    panelB.classList.toggle("w-0");

    infoPanel.classList.toggle("flex-0");
    infoPanel.classList.toggle("flex-2");
    infoPanel.classList.toggle("w-0");
}

// Recca
reccaImg.addEventListener("click", () => {
    togglePanel(reccaInfo, johnmarcPanel, bryanPanel);
});

reccaClose.addEventListener("click", () => {
    togglePanel(reccaInfo, johnmarcPanel, bryanPanel);
});

// Johnmarc
johnmarcImg.addEventListener("click", () => {
    togglePanel(johnmarcInfo, reccaPanel, bryanPanel);
});

johnmarcClose.addEventListener("click", () => {
    togglePanel(johnmarcInfo, reccaPanel, bryanPanel);
});

// Bryan
bryanImg.addEventListener("click", () => {
    togglePanel(bryanInfo, reccaPanel, johnmarcPanel);
});

bryanClose.addEventListener("click", () => {
    togglePanel(bryanInfo, reccaPanel, johnmarcPanel);
});