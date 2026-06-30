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

startButton.addEventListener("click", () => {
  welcomeContainer.classList.add("translate-y-full", "opacity-0");
  panelContainer.classList.remove("-translate-y-full");
});

reccaImg.addEventListener("click", () => {
  johnmarcPanel.classList.toggle("flex-0");
  johnmarcPanel.classList.toggle("flex-1");
  johnmarcPanel.classList.toggle("w-0");

  bryanPanel.classList.toggle("flex-0");
  bryanPanel.classList.toggle("flex-1");
  bryanPanel.classList.toggle("w-0");

  reccaInfo.classList.toggle("flex-0");
  reccaInfo.classList.toggle("flex-2");
  reccaInfo.classList.toggle("w-0");
});

johnmarcImg.addEventListener("click", () => {
  reccaPanel.classList.toggle("flex-0");
  reccaPanel.classList.toggle("flex-1");
  reccaPanel.classList.toggle("w-0");

  bryanPanel.classList.toggle("flex-0");
  bryanPanel.classList.toggle("flex-1");
  bryanPanel.classList.toggle("w-0");

  johnmarcInfo.classList.toggle("flex-0");
  johnmarcInfo.classList.toggle("flex-2");
  johnmarcInfo.classList.toggle("w-0");
});

bryanImg.addEventListener("click", () => {
  reccaPanel.classList.toggle("flex-0");
  reccaPanel.classList.toggle("flex-1");
  reccaPanel.classList.toggle("w-0");

  johnmarcPanel.classList.toggle("flex-0");
  johnmarcPanel.classList.toggle("flex-1");
  johnmarcPanel.classList.toggle("w-0");

  bryanInfo.classList.toggle("flex-0");
  bryanInfo.classList.toggle("flex-2");
  bryanInfo.classList.toggle("w-0");
});
