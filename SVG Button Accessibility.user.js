// ==UserScript==
// @name         SVG Button Accessibility
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Improve accessibility of SVG buttons by including them in the tab index.
// @match        https://elevenlabs.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const svgButtons = document.querySelectorAll('svg[aria-hidden="true"]');

    svgButtons.forEach(button => {
        // Update aria-hidden attribute to false
        button.setAttribute('aria-hidden', 'false');

        // Make SVG button focusable
        button.setAttribute('tabindex', '0');
    });
})();
