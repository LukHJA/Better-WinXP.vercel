// ==UserScript==
// @name         Initialization.js For ext. winXP
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://winxp.vercel.app/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vercel.app
// @grant        none
// ==/UserScript==

(function() {
  'use strict'
  
  var StartMenuCSS = document.createElement('link');
  StartMenuCSS.outerHTML = ['<link rel="stylesheet" href="https://raw.githubusercontent.com/LukHJA/Better-WinXP.vercel/main/CSScodes/startmenu.css">'];
  document.head.appendChild(StartMenuCSS);

  var StartMenuJS = document.createElement('script');
  StartMenuJS.outerHTML = ['<script src="https://raw.githubusercontent.com/LukHJA/Better-WinXP.vercel/main/JScodes/RemadeStartMenu.js"></script>'];
  document.body.appendChild(StartMenuJS);
})();
