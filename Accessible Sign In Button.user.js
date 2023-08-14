// ==UserScript==
// @name         Accessible Sign In Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the "Sign in" button accessible for keyboard and screen reader users.
// @match        https://elevenlabs.io/
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Function to find the "Sign in" button
  function findSignInButton() {
    var signInButton = document.querySelector('[data-testid="sign-in-button"]');
    if (signInButton) {
      signInButton.tabIndex = 0;
      signInButton.setAttribute("role", "button");
      signInButton.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          signInButton.click();
        }
      });
    }
  }

  // Wait for the page to load completely before modifying the tab order
  window.addEventListener("load", findSignInButton);
})();
