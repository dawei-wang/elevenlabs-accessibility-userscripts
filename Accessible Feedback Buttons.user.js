// ==UserScript==
// @name         Accessible Feedback Buttons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes thumbs up and thumbs down buttons accessible with proper announcements.
// @match        https://elevenlabs.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to enhance accessibility of feedback buttons
    function enhanceFeedbackButtons() {
        const thumbsUpButton = document.querySelector('.flex-1.text-center svg[aria-hidden="true"]');
        const thumbsDownButton = document.querySelector('.flex-1.text-center.ml-1 svg[aria-hidden="true"]');

        if (thumbsUpButton) {
            // Set aria-label to provide a descriptive label
            thumbsUpButton.setAttribute('aria-label', 'Thumbs Up Feedback Button');

            // Set aria-hidden to false to make it accessible
            thumbsUpButton.setAttribute('aria-hidden', 'false');

            // Apply tabindex for keyboard focus
            thumbsUpButton.setAttribute('tabindex', '0');
        }

        if (thumbsDownButton) {
            // Set aria-label to provide a descriptive label
            thumbsDownButton.setAttribute('aria-label', 'Thumbs Down Feedback Button');

            // Set aria-hidden to false to make it accessible
            thumbsDownButton.setAttribute('aria-hidden', 'false');

            // Apply tabindex for keyboard focus
            thumbsDownButton.setAttribute('tabindex', '0');
        }
    }

    // Call the enhanceFeedbackButtons function initially and set an interval to call it periodically
    enhanceFeedbackButtons();
    setInterval(enhanceFeedbackButtons, 1000); // Adjust the interval as needed
})();
