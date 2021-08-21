let elems = $("main").find(".hidden");

$("document").ready(() => {
  animate();
});

function animate() {
  let timer = 100;
  $.each(elems, (i, item) => {
    setTimeout(() => {
      $(item).removeClass("hidden");
    }, timer);
    timer += 100;
  });
}
