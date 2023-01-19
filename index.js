var urls = ["https://www.mozilla.org/"];
function newone() {
  window.open("https://www.google.com/", "_blank");
  return newone();
}
newone();
