(function() {
  var StartMenu = document.querySelector("#root > div > footer > div.footer__items.left > img");
  StartMenu.setAttribute("src", "");
  StartMenu.setAttribute("alt", "");
  StartMenu.innerHTML = ['<div id="StartMenu"><img id="StartMenuImage"></img><p id="StartMenuText">Start</p></div>'];
  var StartMenuNew = document.getElementById("StartMenu");
  StartMenuNew.setAttribute("title", "Click here to begin");
})();
