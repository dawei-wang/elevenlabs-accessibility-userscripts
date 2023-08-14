// ==UserScript==
// @name         Accessible Character Count for ElevenLabs Text-to-Speech Speech Synthesis Page Textbox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds an ARIA live region to announce the remaining characters for a text-to-speech message character count.
// @match        https://elevenlabs.io/speech-synthesis
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Create an ARIA live region element
  const ariaLiveRegion = document.createElement("div");
  ariaLiveRegion.id = "character-count-live-region";
  ariaLiveRegion.setAttribute("aria-live", "polite");
  ariaLiveRegion.setAttribute("aria-atomic", "true");
  ariaLiveRegion.style.position = "absolute";
  ariaLiveRegion.style.clip = "rect(0 0 0 0)";
  ariaLiveRegion.style.height = "1px";
  ariaLiveRegion.style.width = "1px";
  ariaLiveRegion.style.overflow = "hidden";
  document.body.appendChild(ariaLiveRegion);

  // Function to update ARIA live region with character count
  function updateLiveRegion() {
    const characterCountElement = document.querySelector(
      ".font-serif.text-sm.block.font-normal.text-gray-500.mt-2.flex"
    );
    if (characterCountElement) {
      const characterCountText = characterCountElement.textContent;
      const [currentCount, totalCount] = characterCountText.match(/\d+/g);
      const remainingCharacters = totalCount - currentCount;

      // Update the ARIA live region to announce the remaining characters
      ariaLiveRegion.textContent = `${remainingCharacters} characters remaining.`;
    }

    const quotaElement = document.querySelector(
      ".font-serif.text-sm.block.font-normal.text-gray-500.mt-2.flex .ml-auto span"
    );
    if (quotaElement) {
      const quotaRemaining = quotaElement.textContent.match(/\d+/);
      // Append the quota information after the character count announcement
      ariaLiveRegion.textContent += ` Total quota remaining: ${quotaRemaining}`;
    }
  }

  // Call the updateLiveRegion function initially and set an interval to call it periodically
  updateLiveRegion();
  setInterval(updateLiveRegion, 1000); // Adjust the interval as needed
})();
