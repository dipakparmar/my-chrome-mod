window.onload = function () {
  if (window.location.href.indexOf("#inbox") == -1) {
      console.log("Falied -1");
    return;
  }

  setInterval(function () {

    //hide sponsered advts.
    Array.from(document.getElementsByClassName("zA zE")).forEach(function (
      cards
    ) {
      cards.style.display = "none";
    }),
      500;
  });
};
