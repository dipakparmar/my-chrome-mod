window.onload = function () {
  if (window.location.href.indexOf("#inbox") == -1) {
    return;
  }

  setInterval(function () {

    //hide sponsered advts.
    Array.from(document.getElementsByClassName("lzcic4wl")).forEach(function (
      cards
    ) {
      cards.style.display = "none";
    }),
      500;
  });
};
