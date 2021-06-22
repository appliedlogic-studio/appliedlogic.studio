const video = document.getElementById("carousel");
const sources = ["bloom", "bbc"];
let index = 0;

window.addEventListener("load", () => {
  setInterval(loop, 5000);
});

function loop() {
  index < sources.length - 1 ? index++ : (index = 0);
  let temp = "assets/mp4/" + sources[index] + ".mp4";
  video.src = temp;
}
