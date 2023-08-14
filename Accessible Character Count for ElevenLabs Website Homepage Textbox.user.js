// ==UserScript==
// @name         Accessible Character Count for ElevenLabs Website Homepage Textbox
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds an ARIA live region to announce the remaining characters for a text-to-speech message character count.
// @match        https://elevenlabs.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create an ARIA live region element
    const ariaLiveRegion = document.createElement('div');
    ariaLiveRegion.id = 'character-count-live-region';
    ariaLiveRegion.setAttribute('aria-live', 'polite');
    ariaLiveRegion.setAttribute('aria-atomic', 'true');
    ariaLiveRegion.style.position = 'absolute';
    ariaLiveRegion.style.clip = 'rect(0 0 0 0)';
    ariaLiveRegion.style.height = '1px';
    ariaLiveRegion.style.width = '1px';
    ariaLiveRegion.style.overflow = 'hidden';
    document.body.appendChild(ariaLiveRegion);

    // Function to update ARIA live region with character count
    function updateLiveRegion(characterCountElement) {
        const characterCountText = characterCountElement.textContent;
        const [currentCount, totalCount] = characterCountText.split(' / ');
        const remainingCharacters = totalCount - currentCount;

        // Update the ARIA live region to announce the remaining characters
        ariaLiveRegion.textContent = `${remainingCharacters} characters remaining.`;
    }

    // Function to find and monitor character count elements
    function monitorCharacterCountElements() {
        const characterCountElements = document.querySelectorAll('.font-serif.text-xs.block.font-normal.text-gray-700.absolute.right-8.bottom-6, .font-serif.text-sm.block.font-normal.text-gray-500.mt-2.flex');

        characterCountElements.forEach((element) => {
            updateLiveRegion(element);

            element.addEventListener('DOMSubtreeModified', function() {
                updateLiveRegion(element);
            });
        });
    }

    // Call the monitorCharacterCountElements function initially and set an interval to call it periodically
    monitorCharacterCountElements();
    setInterval(monitorCharacterCountElements, 1000); // Adjust the interval as needed
})();
