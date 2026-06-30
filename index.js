rightPanel = document.getElementById("right-panel");
leftPanel = document.getElementById("left-panel");
centerPanel = document.getElementById("center-panel");

reccaInfo = document.getElementById("recca-info");
johnmarcInfo = document.getElementById("johnmarc-info");
bryanInfo = document.getElementById("bryan-info");

addEventListener("click", (e) => {
  if (e.target.id === "recca") {
    reccaInfo.classList.remove("hidden");
  } else if (e.target.id === "johnmarc") {
    johnmarcInfo.classList.remove("hidden");
  } else if (e.target.id === "bryan") {
    bryanInfo.classList.remove("hidden");
  }
});