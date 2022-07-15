(function() {
  var StartMenu = document.querySelector("#root > div > footer > div.footer__items.left > img");
  StartMenu.setAttribute("src", "");
  StartMenu.setAttribute("alt", "");
  StartMenu.innerHTML = ['<div id="StartMenu"></div>'];
  var StartMenuNew = document.getElementById("StartMenu");
  StartMenuNew.setAttribute("title", "Click here to begin");
})();
