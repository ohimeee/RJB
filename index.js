const reccaInfo = document.getElementById("recca-info");
const johnmarcInfo = document.getElementById("johnmarc-info");
const bryanInfo = document.getElementById("bryan-info");

document.addEventListener("click", (e) => {
  if (e.target.id === "recca-img") {
    reccaInfo.classList.toggle("hidden");
  } else if (e.target.id === "johnmarc-img") {
    johnmarcInfo.classList.toggle("hidden");
  } else if (e.target.id === "bryan-img") {
    bryanInfo.classList.toggle("hidden");
  }
});