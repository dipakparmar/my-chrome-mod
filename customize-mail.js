window.onload = function () {
  if (window.location.href.indexOf("#inbox") == -1) {
    return;
  }

  setInterval(function () {

    //hide sponsered advts.
    Array.from(document.getElementsByClassName("zA zE")).forEach(function (
      labelPill
    ) {
      labelPill.style.display = "none";
    }),
      500;
  });
};
