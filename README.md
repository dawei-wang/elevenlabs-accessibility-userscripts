# ElevenLabs Accessibility Userscripts

This repository contains a collection of Tampermonkey scripts designed to enhance accessibility for screen reader users on the [ElevenLabs](https://elevenlabs.io) website. These scripts make it easier for users of screen readers and keyboard navigation to interact with the website by providing proper announcements and keyboard focus.

## Scripts

1. Accessible Character Count for ElevenLabs Website Homepage Textbox
   This script adds an ARIA live region enabling a screen reader to announce the remaining characters for the [ElevenLabs](https://elevenlabs.io) homepage textbox. It updates the live region dynamically as the character count changes.

2. Accessible Character Count for ElevenLabs Text-to-Speech Speech Synthesis Page Textbox
   This script adds an ARIA live region enabling a screen reader to announce the remaining characters for the [Speech Synthesis](https://elevenlabs.io/speech-synthesis) page textbox. It updates the live region dynamically as the character count changes. It also provides information about the total quota remaining in the account.

3. Accessible Feedback Buttons
   This script enhances the accessibility of the thumbs up and thumbs down feedback buttons. It replaces the original SVG icons with accessible buttons that have descriptive labels and can be focused and activated using keyboard navigation.

4. Accessible Sign In Button
   This script makes the "Sign in" button accessible for keyboard and screen reader users.

5. SVG Button Accessibility
   This script makes the SVG buttons accessible for keyboard and screen reader users.

## Installation

Follow these steps to install and use the Tampermonkey scripts on your browser:

1. **Install Tampermonkey Extension:**

   If you haven't already, you'll need to install the Tampermonkey browser extension. It allows you to run user scripts on web pages.

   - For Google Chrome: Go to the Chrome Web Store and search for "Tampermonkey." Click "Add to Chrome" and follow the installation prompts.

2. **Download the Script:**

   - Visit the GitHub repository containing the script: [Elevenlabs Accessibility Userscripts](https://github.com/dawei-wang/elevenlabs-accessibility-userscripts).
   - Click on the "Code" button and select "Download ZIP" to download the script files to your computer.

3. **Extract the ZIP Archive:**

   - Locate the downloaded ZIP archive and extract its contents to a folder of your choice.

4. **Install the Script:**

   - Open your web browser and click on the Tampermonkey icon (usually found in the top-right corner).
   - From the dropdown menu, select "Dashboard."
   - In the Tampermonkey dashboard, click on the "Utilities" tab.
   - Under the "File" section, click on "Import."
   - Choose the extracted script file (e.g., `Accessible-Character-Count-for-ElevenLabs-Text-to-Speech-Speech-Synthesis-Page-Textbox.user.js`) from your computer and click "Open."

5. **Enable the Script:**

   - After importing the script, you'll see it listed in the Tampermonkey dashboard.
   - Make sure the checkbox next to the script is checked to enable it.

6. **Visit the Webpage:**

   - Go to the webpage where you want the accessibility feature to work (e.g., https://elevenlabs.io/speech-synthesis).

7. **Test the Script:**

   - The script should now be active on the webpage. Type a character into the text box, and you should hear the remaining character count announced by the screenreader.You should also hear each button being announced by the screenreader as you navigate to it.

## Compatibility

This script is designed to work with specific elements on certain web pages. It has been tested and verified on the provided URL with the [NVDA](https://www.nvaccess.org/) screen reader. If you encounter any issues or have suggestions for improvements, please feel free to create an issue on the GitHub repository.

## Usage

The scripts will automatically run on the specified website. They enhance the accessibility of textbox character counts, sign-in, feedback, and SVG buttons, making them more usable for screen reader users and keyboard navigation.

## Feedback and Contributions

If you encounter any issues or have suggestions for improvements, please feel free to open an issue in this repository.
