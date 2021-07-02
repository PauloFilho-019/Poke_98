var link = document.querySelector("#alnk");
link.setAttribute("href", "page" + rand() + ".html");

function rand() {
  return Math.floor(Math.random() * 13);
}
