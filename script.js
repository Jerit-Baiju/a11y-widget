// v2.4.1
(function () {
  const style = document.createElement("style");

  // Get position attribute from script tag or use default "bottom-right"
  const positionAttribute = document.currentScript.getAttribute('position') || 'bottom-right';
  // Parse position to set toggle button and widget positioning
  const positions = {
    'top-left': { button: 'top: 25px; left: 25px;', widget: 'top: 90px; left: 25px;' },
    'top-right': { button: 'top: 25px; right: 25px;', widget: 'top: 90px; right: 25px;' },
    'bottom-left': { button: 'bottom: 25px; left: 25px;', widget: 'bottom: 90px; left: 25px;' },
    'bottom-right': { button: 'bottom: 25px; right: 25px;', widget: 'bottom: 90px; right: 25px;' }
  };

  // Get position CSS or use default (bottom-right)
  const positionCSS = positions[positionAttribute] || positions['bottom-right'];

  style.innerHTML = `
    /* Accessibility Button */
    #accessibility-toggle {
      position: fixed;
      ${positionCSS.button}
      z-index: 9999;
      background: linear-gradient(135deg, #2563eb, #3b82f6);
      color: white;
      border: none;
      border-radius: 16px;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(37, 99, 235, 0.2);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    #accessibility-toggle:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(37, 99, 235, 0.3);
    }

    #accessibility-toggle svg {
      width: 28px;
      height: 28px;
    }

    /* Accessibility Widget */
    #accessibility-widget {
      display: none;
      position: fixed;
      ${positionCSS.widget}
      z-index: 10000;
      width: min(90vw, 380px);
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      padding: 24px;
      font-family: system-ui, -apple-system, sans-serif;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      max-height: calc(100vh - 120px);
      overflow-y: auto;
    }

    #accessibility-widget.open {
      display: block;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    #accessibility-widget h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid #f3f4f6;
    }

    .widget-section {
      margin-bottom: 20px;
    }

    .widget-section-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: #6b7280;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    #accessibility-widget .button-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
      margin-bottom: 8px;
    }

    #accessibility-widget button {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 12px;
      background: #f3f4f6;
      color: #374151;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    #accessibility-widget button:hover {
      background: #e5e7eb;
      transform: translateY(-1px);
    }

    /* Feature Groups */
    .text-controls { background: #eef2ff !important; color: #4f46e5 !important; }
    .visual-controls { background: #f0fdf4 !important; color: #16a34a !important; }
    .reading-controls { background: #fff7ed !important; color: #ea580c !important; }
    .navigation-controls { background: #eff6ff !important; color: #2563eb !important; }

    /* Summary Modal */
    .summary-overlay {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: min(90vw, 600px);
      max-height: 80vh;
      background: #ffffff;
      border-radius: 24px;
      padding: 32px;
      z-index: 10001;
      overflow-y: auto;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .summary-overlay p {
      font-size: 1rem;
      line-height: 1.6;
      color: #374151;
      margin-bottom: 16px;
    }

    .summary-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }

    .summary-actions button {
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 500;
      transition: all 0.2s;
    }

    .close-button {
      background: #ef4444 !important;
      color: white !important;
    }

    .read-button {
      background: #2563eb !important;
      color: white !important;
    }

    /* Reset Button */
    #reset-all-settings {
      width: 100%;
      padding: 12px;
      margin-top: 16px;
      border: none;
      border-radius: 12px;
      background: #ef4444;
      color: white;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    #reset-all-settings:hover {
      background: #dc2626;
      transform: translateY(-1px);
    }

    /* Footer */
    #accessibility-widget .footer {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 2px solid #f3f4f6;
      text-align: center;
      font-size: 0.75rem;
      color: #6b7280;
    }

    #accessibility-widget .footer a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }

    @font-face {
      font-family: 'OpenDyslexic3';
      src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.woff") format("woff"), url("https://website-widgets.pages.dev/fonts/OpenDyslexic3-Regular.ttf") format("truetype");
    }

    /* Loader Styles */
    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10001;
    }
    
    .loader {
      width: 48px;
      height: 48px;
      border: 5px solid #FFF;
      border-bottom-color: transparent;
      border-radius: 50%;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .inverted-colors {
      filter: invert(1);
    }

    .highlight-links a {
      padding: 2px 4px;
      background-color: #fef3c7;
      border: 2px solid #f59e0b;
      border-radius: 4px;
      text-decoration: none !important;
      color: #000 !important;
      transition: all 0.2s ease;
    }

    .highlight-links a:hover {
      background-color: #fcd34d;
      border-color: #d97706;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
    }

    .highlight-links a:focus {
      outline: 3px solid #2563eb;
      outline-offset: 2px;
    }

    .hide-images img {
      display: none;
    }

    .hide-images [style*="background-image"] {
      background-image: none !important;
    }
      
  `;

  document.head.appendChild(style);

  // Create the toggle button
  const toggleButton = document.createElement("div");
  toggleButton.id = "accessibility-toggle";
  toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#e8eaed"><path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM360-80v-520H120v-80h720v80H600v520h-80v-240h-80v240h-80Z"/></svg>`
  toggleButton.style.cursor = "default";
  toggleButton.style.position = "fixed";
  toggleButton.style.bottom = "20px";
  toggleButton.style.padding = "4px"
  document.body.appendChild(toggleButton);

  // Create the widget
  const widget = document.createElement("div");
  widget.id = "accessibility-widget";
  widget.innerHTML = `
    <h2>Accessibility Options</h2>
    
    <div class="widget-section">
      <div class="widget-section-title">Text Adjustments</div>
      <div class="button-group">
        <button id="increase-text" class="text-controls">Increase Text</button>
        <button id="decrease-text" class="text-controls">Decrease Text</button>
        <button id="line-height" class="text-controls">Line Height</button>
        <button id="letter-spacing" class="text-controls">Letter Spacing</button>
        <button id="dyslexic-font" class="text-controls">Dyslexic Font</button>
      </div>
    </div>

    <div class="widget-section">
      <div class="widget-section-title">Visual Preferences</div>
      <div class="button-group">
        <button id="invert-colors" class="visual-controls">Invert Colors</button>
        <button id="high-contrast" class="visual-controls">High Contrast</button>
        <button id="increase-saturation" class="visual-controls">Increase Saturation</button>
        <button id="decrease-saturation" class="visual-controls">Decrease Saturation</button>
      </div>
    </div>

    <div class="widget-section">
      <div class="widget-section-title">Reading Assistance</div>
      <div class="button-group">
        <button id="toggle-reading" class="reading-controls">Read Screen</button>
        <button id="summarize" class="reading-controls">Summarize</button>
        <button id="check-images" class="reading-controls">Check Images</button>
      </div>
    </div>

    <div class="widget-section">
      <div class="widget-section-title">Navigation</div>
      <div class="button-group">
        <button id="highlight-links" class="navigation-controls">Highlight Links</button>
        <button id="big-cursor" class="navigation-controls">Big Cursor</button>
        <button id="hide-images" class="navigation-controls">Toggle Images</button>
      </div>
    </div>

    <button id="reset-all-settings">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
        <path d="M3 3v5h5"></path>
      </svg>
      Reset All Settings
    </button>

    <div class="footer">
      Developed by <a href="https://mariancollege.org" target="_blank">mariancollege.org</a> |
      <a href="https://github.com/Jerit-Baiju/a11y-widget/" target="_blank">Contribute</a>
    </div>
  `;
  document.body.appendChild(widget);

  // Utility Functions
  const toggleClassOnBody = (className) => {
    if (className === 'hide-images') {
      document.body.classList.toggle(className);
      document.querySelectorAll('div').forEach(div => div.classList.toggle(className));
    } else {
      document.body.childNodes.forEach(child => {
        if (child.nodeType === 1) {
          child.classList.toggle(className)
        }
      })
    }
  };

  const validateImages = () => {
    const images = document.querySelectorAll("img");
    const missingAltImages = [];

    images.forEach((img, index) => {
      if (!img.hasAttribute("alt") || img.alt.trim() === "") {
        missingAltImages.push({
          index: index + 1,
          src: img.src || "Unknown Source",
        });
      }
    });

    if (missingAltImages.length > 0) {
      const errorMessage = missingAltImages
        .map(
          (img) =>
            `Image ${img.index}: ${img.src.length > 50 ? img.src.substring(0, 50) + "..." : img.src
            }`
        )
        .join("\n");
      alert(
        `Accessibility Issue:\nThe following images are missing 'alt' attributes:\n\n${errorMessage}`
      );
    } else {
      alert("All images have proper 'alt' attributes. Great job!");
    }
  };

  function adjustSaturation(action) {
    const body = document.body;
    let currentSaturation = parseFloat(getComputedStyle(body).getPropertyValue('--saturation') || 1);

    if (action === "increase") {
      currentSaturation += 1;
    } else if (action === "decrease") {
      currentSaturation -= 1;
    }

    body.style.setProperty('--saturation', currentSaturation);
    document.body.childNodes.forEach(child => {
      if (child.nodeType === 1) {
        child.style.filter = `saturate(${currentSaturation})`;
      }
    })
  }

  // Function to toggle widget visibility
  function toggleWidgetVisibility() {
    if (widget.style.display === 'none' || widget.style.display === '') {
      widget.style.display = 'block';
    } else {
      widget.style.display = 'none';
    }
  }

  function enableDyslexicFont(load = false) {
    let isDyslexicFontEnabled = parseInt(localStorage.getItem('isDyslexicFontEnabled')) || 0;
    if (load) {
      isDyslexicFontEnabled = !isDyslexicFontEnabled;
    }
    if (!isDyslexicFontEnabled) {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          if (!el.classList.contains('material-icons')) {
            let orgFontFamily = el.style['font-family']; // Fixed undefined variable
            el.setAttribute('data-asw-orgFontFamily', orgFontFamily);
            el.style['font-family'] = 'OpenDyslexic3';
          }
        });

      localStorage.setItem('isDyslexicFontEnabled', 1);
    } else {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          if (!el.classList.contains('material-icons')) {
            orgFontFamily = el.getAttribute('data-asw-orgFontFamily');
            if (orgFontFamily) {
              el.style['font-family'] = orgFontFamily;
              el.removeAttribute('data-asw-orgFontFamily');
            }
            else {
              el.style.removeProperty('font-family');
            }
          }
        });

      localStorage.setItem('isDyslexicFontEnabled', 0);
    }
  }

  function adjustLetterSpacing(increment = 0) {
    let isLetterSpacingEnabled = parseInt(localStorage.getItem('isLetterSpacingEnabled'));
    if (!increment) {
      isLetterSpacingEnabled = !isLetterSpacingEnabled;
      increment = 0.1;
    }
    if (!isLetterSpacingEnabled) {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          if (!el.classList.contains('material-icons')) {

            let orgLetterSpacing = el.getAttribute('data-asw-orgLetterSpacing');

            if (!orgLetterSpacing) {
              orgLetterSpacing = el.style['letter-spacing'];
              el.setAttribute('data-asw-orgLetterSpacing', orgLetterSpacing);
              if (!(orgLetterSpacing)) {
                orgLetterSpacing = 0;
              }
              orgLetterSpacing = parseFloat(orgLetterSpacing);
              let newLetterSpacing = orgLetterSpacing + increment;
              el.style['letter-spacing'] = newLetterSpacing + 'em';
            }
          }
        });

      localStorage.setItem('isLetterSpacingEnabled', 1);
    } else {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          if (!el.classList.contains('material-icons')) {
            let orgLetterSpacing = el.getAttribute('data-asw-orgLetterSpacing');
            if (orgLetterSpacing) {
              el.style['letter-spacing'] = orgLetterSpacing;
              el.removeAttribute('data-asw-orgLetterSpacing');
            }
            else {
              el.style.removeProperty('letter-spacing');
            }
          }
        });

      localStorage.setItem('isLetterSpacingEnabled', 0);
    }
  }
  function adjustLineHeight(increment = 0) {
    let isLineHeightEnabled = parseInt(localStorage.getItem('isLineHeightEnabled'));
    if (!increment) {
      isLineHeightEnabled = !isLineHeightEnabled;
      increment = 1;
    }
    if (!isLineHeightEnabled) {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          if (!el.classList.contains('material-icons')) {
            let orgLineHeight = el.getAttribute('data-asw-orgLineHeight');

            if (!orgLineHeight) {
              orgLineHeight = el.style['line-height'];
              el.setAttribute('data-asw-orgLineHeight', orgLineHeight);
              if (!orgLineHeight) {
                orgLineHeight = 1.1;
              }
              orgLineHeight = parseFloat(orgLineHeight);
              let newLineHeight = orgLineHeight + increment;
              el.style['line-height'] = newLineHeight;
            }
          }
        });

      localStorage.setItem('isLineHeightEnabled', 1);
    } else {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          if (!el.classList.contains('material-icons')) {
            let orgLineHeight = el.getAttribute('data-asw-orgLineHeight');
            if (orgLineHeight) {
              el.style['line-height'] = orgLineHeight;
              el.removeAttribute('data-asw-orgLineHeight');
            }
            else {
              el.style.removeProperty('line-height');
            }

          }
        });

      localStorage.setItem('isLineHeightEnabled', 0);
    }
  }

  function readText(text, button = null) {
    if (!text || typeof text !== 'string') {
      console.error('Invalid text provided for speech synthesis');
      return;
    }

    if ('speechSynthesis' in window) {
      try {
        // Stop any ongoing speech first
        window.speechSynthesis.cancel();

        // Split text into sentences and filter out lone punctuation marks
        const sentences = text.split(/([.!?]+[\s\n]+|$)/)
          .filter(Boolean)
          .filter(s => !/^[.!?,;:\s]+$/.test(s)); // Skip standalone punctuation
        const chunks = [];

        let currentChunk = '';
        for (const sentence of sentences) {
          const cleanSentence = sentence.trim();
          if (!cleanSentence) continue;

          // If sentence is under 200 chars, try to add it to current chunk
          if (cleanSentence.length <= 200) {
            if ((currentChunk + ' ' + cleanSentence).length <= 200) {
              currentChunk = currentChunk + (currentChunk ? ' ' : '') + cleanSentence;
            } else {
              if (currentChunk) chunks.push(currentChunk);
              currentChunk = cleanSentence;
            }
          } else {
            // Push current chunk if exists
            if (currentChunk) {
              chunks.push(currentChunk);
              currentChunk = '';
            }

            // Split long sentences at word boundaries
            const words = cleanSentence.split(/\s+/);
            let tempChunk = '';

            for (const word of words) {
              if ((tempChunk + ' ' + word).length <= 200) {
                tempChunk = tempChunk + (tempChunk ? ' ' : '') + word;
              } else {
                if (tempChunk) chunks.push(tempChunk);
                tempChunk = word;
              }
            }
            if (tempChunk) chunks.push(tempChunk);
          }
        }

        // Push final chunk if exists
        if (currentChunk) {
          chunks.push(currentChunk);
        }

        // Filter out any remaining empty chunks or punctuation-only chunks
        const validChunks = chunks
          .map(chunk => chunk.trim())
          .filter(chunk => chunk && !/^[.!?,;:\s]+$/.test(chunk));

        let currentChunkIndex = 0;
        let isSpeaking = true;

        function speakNextChunk() {
          if (currentChunkIndex < validChunks.length && isSpeaking) {
            const utterance = new SpeechSynthesisUtterance(validChunks[currentChunkIndex]);
            utterance.onend = () => {
              currentChunkIndex++;
              if (currentChunkIndex >= validChunks.length) {
                // Reset button text when all chunks are read
                if (button) {
                  button.textContent = 'Read Screen';
                }
                window.a11yWidget.isReading = false;
              } else {
                speakNextChunk();
              }
            };

            utterance.onerror = (event) => {
              console.error('Speech synthesis error:', event);
              currentChunkIndex++;
              speakNextChunk();
            };

            window.speechSynthesis.speak(utterance);
          }
        }

        // Store the control functions and state in window for global access
        window.a11yWidget = window.a11yWidget || {};
        window.a11yWidget.isReading = true;
        window.a11yWidget.stopSpeaking = () => {
          isSpeaking = false;
          window.speechSynthesis.cancel();
          if (button) {
            button.textContent = 'Read Screen';
          }
          window.a11yWidget.isReading = false;
        };

        speakNextChunk();
      } catch (error) {
        console.error('Speech synthesis failed:', error);
        alert('Speech synthesis failed. Please try again.');
        if (button) {
          button.textContent = 'Read Screen';
        }
        window.a11yWidget.isReading = false;
      }
    } else {
      alert('Speech synthesis is not supported in your browser.');
      if (button) {
        button.textContent = 'Read Screen';
      }
      window.a11yWidget.isReading = false;
    }
  }

  function stopReading() {
    if (window.a11yWidget && window.a11yWidget.stopSpeaking) {
      window.a11yWidget.stopSpeaking();
    }
    window.speechSynthesis.cancel();
  }

  function adjustContrast(load = false) {
    let isContrastEnabled = parseInt(localStorage.getItem('isContrastEnabled'));
    if (load) {
      isContrastEnabled = !isContrastEnabled;
    }
    if (!isContrastEnabled) {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          let orgColor = el.getAttribute('data-asw-orgContrastColor');
          let orgBgColor = el.getAttribute('data-asw-orgContrastBgColor');

          if (!orgColor) {
            orgColor = el.style.color;
            el.setAttribute('data-asw-orgContrastColor', orgColor);
          }
          if (!orgBgColor) {
            orgBgColor = window.getComputedStyle(el).getPropertyValue('background-color');
            el.setAttribute('data-asw-orgContrastBgColor', orgBgColor);
          }

          el.style["color"] = '#ffff00';
          el.style["background-color"] = '#0000ff';
        });

      localStorage.setItem('isContrastEnabled', 1);
    } else {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          let orgContrastColor = el.getAttribute('data-asw-orgContrastColor');
          let orgContrastBgColor = el.getAttribute('data-asw-orgContrastBgColor');
          if (orgContrastColor) {
            el.style.color = orgContrastColor;
          } else {
            el.style.removeProperty('color');
          }
          if (orgContrastBgColor) {
            el.style.backgroundColor = orgContrastBgColor;
          } else {
            el.style.removeProperty('background-color');
          }
          el.removeAttribute('data-asw-orgContrastColor');
          el.removeAttribute('data-asw-orgContrastBgColor');
        });
      localStorage.setItem('isContrastEnabled', 0);
    }
  }

  function adjustFontSize(step) {
    // Save the updated font size step in local storage
    let currentStep = parseFloat(localStorage.getItem("fontSizeStep")) || 0;
    currentStep += step;
    localStorage.setItem("fontSizeStep", currentStep);

    // Get all elements in the document
    const elements = document.querySelectorAll("*");

    elements.forEach(element => {
      // Get the computed style of the element
      const computedStyle = window.getComputedStyle(element);
      const fontSize = parseFloat(computedStyle.fontSize);

      // Adjust font size
      if (!isNaN(fontSize)) {
        element.style.fontSize = `${fontSize + step}px`;
      }
    });
  }


  function restoreFontSize() {
    const savedStep = parseFloat(localStorage.getItem("fontSizeStep"));
    if (!isNaN(savedStep) && savedStep !== 0) {
      try {
        const elements = document.querySelectorAll("*");
        elements.forEach(element => {
          const computedStyle = window.getComputedStyle(element);
          const fontSize = parseFloat(computedStyle.fontSize);
          if (!isNaN(fontSize)) {
            const newSize = Math.max(fontSize + savedStep, 8); // Prevent too small fonts
            element.style.fontSize = `${newSize}px`;
          }
        });
      } catch (error) {
        console.error('Error restoring font size:', error);
        localStorage.removeItem("fontSizeStep"); // Reset on error
      }
    }
  }
  restoreFontSize()

  function enableHighlightLinks(load = false) {
    let isHighlightLinks = parseInt(localStorage.getItem('isHighlightLinks'));
    if (load) {
      isHighlightLinks = !isHighlightLinks;
    }
    if (!isHighlightLinks) {
      document.body.classList.add('highlight-links');

      localStorage.setItem('isHighlightLinks', 1);
    } else {
      document.body.classList.remove('highlight-links');

      localStorage.setItem('isHighlightLinks', 0);
    }
  }

  function showOverlay(paragraphs) {
    const overlay = document.createElement('div');
    overlay.className = 'summary-overlay';

    paragraphs.forEach(text => {
      const para = document.createElement('p');
      para.textContent = text;
      overlay.appendChild(para);
    });

    const actions = document.createElement('div');
    actions.className = 'summary-actions';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'close-button';
    closeButton.onclick = () => document.body.removeChild(overlay);

    const readButton = document.createElement('button');
    readButton.textContent = 'Read Summary';
    readButton.className = 'read-button';
    readButton.onclick = () => {
      if (window.speechSynthesis.speaking) {
        stopReading();
        readButton.textContent = 'Read Summary';
      } else {
        const summaryText = paragraphs.join(' ');
        readText(summaryText, readButton);
        readButton.textContent = 'Stop Reading';
      }
    };

    actions.appendChild(closeButton);
    actions.appendChild(readButton);
    overlay.appendChild(actions);
    document.body.appendChild(overlay);
  }

  // Event Listeners
  toggleButton.addEventListener("click", toggleWidgetVisibility);

  document.addEventListener('click', function (event) {
    if (!widget.contains(event.target) && !toggleButton.contains(event.target)) {
      widget.style.display = 'none';
    }
  });

  function initializeEventListeners() {
    const elements = {
      "increase-text": () => adjustFontSize(2),
      "decrease-text": () => adjustFontSize(-2),
      "line-height": () => adjustLineHeight(1),
      "dyslexic-font": () => enableDyslexicFont(),
      "invert-colors": () => toggleClassOnBody("inverted-colors"),
      "high-contrast": () => adjustContrast(),
      "check-images": validateImages,
      "highlight-links": () => enableHighlightLinks(),
      "hide-images": () => toggleClassOnBody("hide-images"),
      "increase-saturation": () => adjustSaturation("increase"),
      "decrease-saturation": () => adjustSaturation("decrease"),
      "letter-spacing": () => adjustLetterSpacing(0.1),
      "summarize": () => {
        widget.style.display = 'none'; // Hide the widget before showing summary
        summarizeText(extractUniqueDocumentText()).then(summary => {
          showOverlay([summary]);
        })
      },
      "toggle-reading": () => {
        const button = document.getElementById('toggle-reading');
        if (window.speechSynthesis.speaking) {
          stopReading();
          button.textContent = 'Read Screen';
        } else {
          const text = extractUniqueDocumentText();
          readText(text, button);
          button.textContent = 'Stop Reading';
        }
      },
      "big-cursor": () => enableBigCursor(),
      "reset-all-settings": resetAllSettings,
    };

    Object.entries(elements).forEach(([id, handler]) => {
      const element = document.getElementById(id);
      if (element) {
        element.addEventListener("click", handler);
      }
    });
  }

  initializeEventListeners();

  // Function to reset all accessibility settings
  function resetAllSettings() {
    // Confirm reset
    if (!confirm("Reset all accessibility settings? This will revert all changes made with this widget.")) {
      return;
    }

    // Stop any ongoing speech
    stopReading();

    // Reset font size
    if (localStorage.getItem("fontSizeStep")) {
      const currentStep = parseFloat(localStorage.getItem("fontSizeStep"));
      if (currentStep !== 0) {
        adjustFontSize(-currentStep);
        localStorage.removeItem("fontSizeStep");
      }
    }

    // Reset dyslexic font
    if (parseInt(localStorage.getItem('isDyslexicFontEnabled')) === 1) {
      enableDyslexicFont(true);
    }

    // Reset line height
    if (parseInt(localStorage.getItem('isLineHeightEnabled')) === 1) {
      adjustLineHeight();
    }

    // Reset letter spacing
    if (parseInt(localStorage.getItem('isLetterSpacingEnabled')) === 1) {
      adjustLetterSpacing();
    }

    // Reset high contrast
    if (parseInt(localStorage.getItem('isContrastEnabled')) === 1) {
      adjustContrast(true);
    }

    // Reset highlighted links
    if (parseInt(localStorage.getItem('isHighlightLinks')) === 1) {
      enableHighlightLinks(true);
    }

    // Reset big cursor
    if (parseInt(localStorage.getItem('isBigCursorEnabled')) === 1) {
      enableBigCursor(true);
    }

    // Reset inverted colors
    if (document.body.classList.contains('inverted-colors')) {
      document.body.classList.remove('inverted-colors');
      document.body.childNodes.forEach(child => {
        if (child.nodeType === 1) {
          child.classList.remove('inverted-colors');
        }
      });
    }

    // Reset hidden images
    if (document.body.classList.contains('hide-images')) {
      document.body.classList.remove('hide-images');
      document.querySelectorAll('div').forEach(div => {
        div.classList.remove('hide-images');
      });
    }

    // Reset saturation
    document.body.style.removeProperty('--saturation');
    document.body.childNodes.forEach(child => {
      if (child.nodeType === 1) {
        child.style.removeProperty('filter');
      }
    });

    // Show success message
    alert("All accessibility settings have been reset to default.");
  }

  function extractUniqueDocumentText() {
    const uniqueTexts = new Set();
    const elements = document.body.querySelectorAll(
      "*:not(#accessibility-widget):not(#accessibility-widget *)"
    );

    // Process each element
    elements.forEach(element => {
      if (element.tagName.toLowerCase() === "img") {
        // Handle images - add alt text if available
        const altText = element.getAttribute("alt");
        if (altText && altText.trim()) {
          uniqueTexts.add(`[Image: ${altText.trim()}]`);
        } else {
          uniqueTexts.add("[Image without description]");
        }
      } else {
        // Handle text elements
        const text = element.innerText;
        if (text && text.trim() &&
          !Array.from(uniqueTexts).some(t => t.includes(text.trim()))) {
          uniqueTexts.add(text.trim());
        }
      }
    });

    // Convert Set to string
    return Array.from(uniqueTexts)
      .filter(text => text.length > 0)
      .join('\n');
  }

  function enableBigCursor(load = false) {
    let isBigCursorEnabled = parseInt(localStorage.getItem('isBigCursorEnabled'));
    if (load) {
      isBigCursorEnabled = !isBigCursorEnabled;
    }
    if (!isBigCursorEnabled) {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          el.style.cursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'%3E%3Cpath d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z' xmlns='http://www.w3.org/2000/svg'/%3E%3C/svg%3E"), default`;;
        });
      localStorage.setItem('isBigCursorEnabled', 1);
    } else {
      document
        .querySelectorAll("*")
        .forEach((el) => {
          el.style.cursor = 'default';
        });

      localStorage.setItem('isBigCursorEnabled', 0);
    }
  }

  function showLoader() {
    const loaderOverlay = document.createElement('div');
    loaderOverlay.className = 'loader-overlay';
    loaderOverlay.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loaderOverlay);
    return loaderOverlay;
  }

  async function summarizeText(text) {
    const loader = showLoader();
    try {
      const formData = new FormData();
      formData.append('data', text)
      const response = await fetch('https://a11y-widget.jerit.in/summarize', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.summary;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    } finally {
      loader.remove();
    }
  }

  function getTemporaryAltText(img) {
    // Try to generate meaningful temporary alt text from various sources
    const fileName = img.src?.split('/')?.pop()?.split('?')[0]?.split('#')[0] || '';
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
    const cleanName = nameWithoutExt
      .replace(/[-_]/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    // Look for nearby text content
    const parentText = img.parentElement?.textContent?.trim();
    const prevSibling = img.previousElementSibling?.textContent?.trim();
    const nextSibling = img.nextElementSibling?.textContent?.trim();

    // Try to use the most relevant text source
    if (cleanName && cleanName.length > 3 && !/^[0-9]+$/.test(cleanName)) {
      return `Image of ${cleanName}`;
    } else if (parentText && parentText.length < 100) {
      return `Image related to: ${parentText}`;
    } else if (prevSibling && prevSibling.length < 100) {
      return `Image for: ${prevSibling}`;
    } else if (nextSibling && nextSibling.length < 100) {
      return `Image illustrating: ${nextSibling}`;
    }

    // Size-based description as last resort
    const width = img.width || img.naturalWidth;
    const height = img.height || img.naturalHeight;
    if (width && height) {
      const size = width > height ? 'Wide' : height > width ? 'Tall' : 'Square';
      return `${size} image - Loading description...`;
    }

    return 'Image - Loading description...';
  }

  (async function handleImagesWithoutAlt() {
    try {
      const images = document.querySelectorAll('img:not([alt]), img[alt=""]');
      const imageProcessingPromises = [];

      // First pass: Set temporary alt text immediately
      images.forEach((img) => {
        if (!img.src || img.src === '') return;
        const tempAlt = getTemporaryAltText(img);
        img.setAttribute('alt', tempAlt);
        img.setAttribute('data-temp-alt', 'true');
      });

      // Second pass: Process images with API
      images.forEach((img) => {
        if (!img.src || img.src === '') return;

        const processImage = async () => {
          try {
            const isExternal = new URL(img.src, location.href).origin !== location.origin;
            if (isExternal) {
              img.crossOrigin = 'anonymous';
            }

            // Wait for image to load
            await Promise.race([
              new Promise((resolve, reject) => {
                if (img.complete && img.naturalHeight !== 0) {
                  resolve();
                } else {
                  img.onload = resolve;
                  img.onerror = reject;
                }
              }),
              new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Image load timeout')), 5000)
              )
            ]);

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);

            const imageBlob = await new Promise((resolve, reject) =>
              canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('Blob conversion failed'))), 'image/jpeg')
            );

            const formData = new FormData();
            formData.append('image', imageBlob, 'image.jpg');

            const response = await fetch('https://a11y-widget.jerit.in/upload', {
              method: 'POST',
              body: formData,
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const altText = await response.json();

            // Only update if the current alt text is temporary
            if (img.hasAttribute('data-temp-alt')) {
              img.setAttribute('alt', altText['alt']);
              img.removeAttribute('data-temp-alt');
            }
          } catch (error) {
            console.error(`Error processing image ${img.src}:`, error);
            // Keep the temporary alt text if API fails
            if (!img.hasAttribute('alt') || img.getAttribute('alt').includes('Loading description')) {
              const fallbackAlt = getTemporaryAltText(img).replace('Loading description...', 'Description unavailable');
              img.setAttribute('alt', fallbackAlt);
            }
          }
        };

        imageProcessingPromises.push(processImage());
      });

      // Wait for all images to be processed
      await Promise.allSettled(imageProcessingPromises);

    } catch (error) {
      console.error('Error handling images:', error);
    }
  })();

  window.addEventListener("beforeunload", () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  });

  // Cleanup function for page unload
  function cleanup() {
    stopReading();
    delete window.a11yWidget;
  }

  // Handle page unload/reload
  window.addEventListener("beforeunload", cleanup);
  window.addEventListener("unload", cleanup);

  // Handle visibility change (tab switching/minimizing)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopReading();
    }
  });

  function fixHeadingOrder() {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    let lastActualLevel = 0;

    headings.forEach((heading) => {
      const currentLevel = parseInt(heading.tagName.substring(1));

      // Skip the first heading
      if (lastActualLevel === 0) {
        lastActualLevel = currentLevel;
        return;
      }

      // If heading level skips more than one level
      if (currentLevel > lastActualLevel + 1) {
        // Create new element with correct level
        const newHeading = document.createElement(`h${lastActualLevel + 1}`);
        newHeading.innerHTML = heading.innerHTML;
        newHeading.className = heading.className;

        // Copy all attributes
        Array.from(heading.attributes).forEach(attr => {
          if (attr.name !== 'class') {
            newHeading.setAttribute(attr.name, attr.value);
          }
        });

        // Replace old heading with new one
        heading.parentNode.replaceChild(newHeading, heading);
        lastActualLevel = lastActualLevel + 1;
      } else {
        lastActualLevel = currentLevel;
      }
    });
  }

  // Call immediately after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixHeadingOrder);
  } else {
    fixHeadingOrder();
  }

  // Add observer to handle dynamically added content
  const observer = new MutationObserver((mutations) => {
    let shouldFix = false;
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName.match(/^H[1-6]$/)) {
            shouldFix = true;
          }
        });
      }
    });
    if (shouldFix) {
      fixHeadingOrder();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  function fixLinkNames() {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      // Skip links that are part of the accessibility widget
      if (link.closest('#accessibility-widget')) return;

      // Check if link has text content
      const visibleText = link.textContent.trim();

      // Check if link has aria-label
      const ariaLabel = link.getAttribute('aria-label');

      // Check if link has title
      const title = link.getAttribute('title');

      // Check if link contains an image
      const image = link.querySelector('img');
      const imageAlt = image ? image.getAttribute('alt') : null;

      // If link has no discernible name
      if (!visibleText && !ariaLabel && !title && !imageAlt) {
        // Try to generate a name from the URL
        let urlText = '';
        try {
          const url = new URL(link.href);
          urlText = url.pathname.split('/').pop().replace(/[-_]/g, ' ').replace(/\.[^/.]+$/, '');
          if (!urlText) {
            urlText = url.hostname.replace('www.', '');
          }
        } catch (e) {
          urlText = link.href;
        }

        // Clean up the URL text
        urlText = urlText
          .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
          .replace(/\s+/g, ' ') // Remove extra spaces
          .trim();

        // Capitalize first letter of each word
        urlText = urlText
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');

        // Set aria-label if we generated a name
        if (urlText) {
          link.setAttribute('aria-label', `Link to ${urlText}`);
        }

        // If link is empty (no text or images), add span with generated text
        if (!link.textContent.trim() && !link.querySelector('img')) {
          const span = document.createElement('span');
          span.textContent = urlText;
          span.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;';
          link.appendChild(span);
        }
      }

      // If link contains an image without alt text
      if (image && (!image.hasAttribute('alt') || !image.getAttribute('alt').trim())) {
        let imageAltText = '';

        // Try to generate alt text from parent link's text/aria-label/title
        imageAltText = visibleText || ariaLabel || title || 'Image';

        image.setAttribute('alt', imageAltText);
      }
    });
  }

  // Run the fix immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixLinkNames);
  } else {
    fixLinkNames();
  }

  // Set up observer for dynamically added links
  const linkObserver = new MutationObserver((mutations) => {
    let shouldFix = false;
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'A' || (node.nodeType === 1 && node.querySelector('a'))) {
            shouldFix = true;
          }
        });
      }
    });
    if (shouldFix) {
      fixLinkNames();
    }
  });

  linkObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  function fixButtonAccessibility() {
    const buttons = document.querySelectorAll('button:not([aria-label]):not([title]), input[type="button"]:not([aria-label]):not([title]), input[type="submit"]:not([aria-label]):not([title]), input[type="reset"]:not([aria-label]):not([title])');

    buttons.forEach((button) => {
      // Skip buttons that are part of the accessibility widget
      if (button.closest('#accessibility-widget')) return;

      const buttonText = button.textContent?.trim() || '';
      const buttonValue = button.value?.trim() || '';
      const buttonImage = button.querySelector('img');
      const buttonIcon = button.querySelector('i, .icon, [class*="icon-"]');

      // If button has no text content
      if (!buttonText && !buttonValue) {
        let accessibleName = '';

        // Check for image alt text
        if (buttonImage && buttonImage.alt) {
          accessibleName = buttonImage.alt;
        }
        // Check for icon aria-label
        else if (buttonIcon && buttonIcon.getAttribute('aria-label')) {
          accessibleName = buttonIcon.getAttribute('aria-label');
        }
        // Try to generate name from class names
        else if (button.className) {
          const classNames = button.className.split(' ')
            .filter(cls => cls.includes('btn-') || cls.includes('button-') || cls.includes('-btn'))
            .map(cls => cls.replace(/(btn-|button-|-btn)/g, ''))
            .map(cls => cls.replace(/[_-]/g, ' '))
            .map(cls => cls.replace(/([A-Z])/g, ' $1').trim())
            .map(cls => cls.charAt(0).toUpperCase() + cls.slice(1).toLowerCase());

          if (classNames.length > 0) {
            accessibleName = `${classNames[0]} button`;
          }
        }

        // If we still don't have a name, try to infer from siblings or context
        if (!accessibleName) {
          // Check for adjacent label or heading
          const prevSibling = button.previousElementSibling;
          const nextSibling = button.nextElementSibling;
          if (prevSibling && (prevSibling.tagName === 'LABEL' || /^H[1-6]$/.test(prevSibling.tagName))) {
            accessibleName = prevSibling.textContent.trim();
          } else if (nextSibling && (nextSibling.tagName === 'LABEL' || /^H[1-6]$/.test(nextSibling.tagName))) {
            accessibleName = nextSibling.textContent.trim();
          }
        }

        // If we still don't have a name, use a generic one based on position
        if (!accessibleName) {
          const buttonIndex = Array.from(document.querySelectorAll('button')).indexOf(button);
          accessibleName = `Button ${buttonIndex + 1}`;
        }

        // Apply the accessible name
        button.setAttribute('aria-label', accessibleName);

        // If it's a completely empty button, add a visually hidden span
        if (!buttonImage && !buttonIcon && !button.innerHTML.trim()) {
          const span = document.createElement('span');
          span.textContent = accessibleName;
          span.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;';
          button.appendChild(span);
        }
      }

      // Ensure button is focusable
      if (!button.getAttribute('tabindex')) {
        button.setAttribute('tabindex', '0');
      }

      // Add role="button" for non-button elements that act as buttons
      if (button.tagName !== 'BUTTON' && !button.getAttribute('role')) {
        button.setAttribute('role', 'button');
      }
    });
  }

  // Run the fix immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixButtonAccessibility);
  } else {
    fixButtonAccessibility();
  }

  // Set up observer for dynamically added buttons
  const buttonObserver = new MutationObserver((mutations) => {
    let shouldFix = false;
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'BUTTON' ||
            (node.nodeType === 1 && (
              node.querySelector('button') ||
              node.querySelector('input[type="button"]') ||
              node.querySelector('input[type="submit"]') ||
              node.querySelector('input[type="reset"]')
            ))
          ) {
            shouldFix = true;
          }
        });
      }
    });
    if (shouldFix) {
      fixButtonAccessibility();
    }
  });

  buttonObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  function fixIframeAccessibility() {
    const frames = document.querySelectorAll('frame:not([title]), iframe:not([title])');

    frames.forEach((frame) => {
      let frameTitle = '';

      // Try to get title from various sources
      try {
        // Check if frame has a source
        if (frame.src) {
          const url = new URL(frame.src);

          // Try to generate title from URL
          if (url.pathname !== '/') {
            frameTitle = url.pathname
              .split('/')
              .pop()
              .replace(/[-_]/g, ' ')
              .replace(/\.[^/.]+$/, '') // Remove file extension
              .replace(/([A-Z])/g, ' $1') // Add spaces before capital letters
              .trim();
          }

          // If no pathname, use hostname
          if (!frameTitle && url.hostname) {
            frameTitle = url.hostname
              .replace('www.', '')
              .replace(/\.[^.]+$/, ''); // Remove TLD
          }

          // Capitalize words
          frameTitle = frameTitle
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

          frameTitle += ' content';
        }

        // Check for nearby context
        if (!frameTitle) {
          // Look for preceding heading or label
          const prevElement = frame.previousElementSibling;
          if (prevElement && (prevElement.matches('h1, h2, h3, h4, h5, h6, label'))) {
            frameTitle = prevElement.textContent.trim();
          }
        }

        // If still no title, try to get it from the frame's content
        if (!frameTitle && frame.contentDocument) {
          const frameDocument = frame.contentDocument;
          frameTitle = frameDocument.title ||
            frameDocument.querySelector('h1')?.textContent ||
            frameDocument.querySelector('h2')?.textContent;
        }

        // Default fallback
        if (!frameTitle) {
          const frameIndex = Array.from(document.querySelectorAll('iframe, frame')).indexOf(frame);
          frameTitle = `Embedded content ${frameIndex + 1}`;
        }

        // Set the title attribute
        frame.setAttribute('title', frameTitle);

        // Also set aria-label for better screen reader support
        frame.setAttribute('aria-label', frameTitle);

        // Ensure frame is keyboard accessible if interactive
        if (frame.contentDocument &&
          frame.contentDocument.querySelector('button, a, input, select, textarea')) {
          frame.setAttribute('tabindex', '0');
        }

      } catch (error) {
        // Handle cross-origin frames
        console.warn('Could not access frame content:', error);
        frame.setAttribute('title', 'External embedded content');
        frame.setAttribute('aria-label', 'External embedded content');
      }
    });
  }

  // Run the fix immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixIframeAccessibility);
  } else {
    fixIframeAccessibility();
  }

  // Set up observer for dynamically added frames
  const frameObserver = new MutationObserver((mutations) => {
    let shouldFix = false;
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'IFRAME' || node.nodeName === 'FRAME' ||
            (node.nodeType === 1 && node.querySelector('iframe, frame'))) {
            shouldFix = true;
          }
        });
      }
    });
    if (shouldFix) {
      fixIframeAccessibility();
    }
  });

  frameObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  function fixTouchTargets() {
    const MIN_TARGET_SIZE = 44; // pixels
    const MIN_TARGET_SPACING = 8; // pixels

    // Updated selector to exclude navigation menu items
    const touchTargets = document.querySelectorAll(`
      a:not(nav a):not(.nav-link):not(.navbar-brand):not(.dropdown-item), 
      button:not(nav button), 
      input, 
      select, 
      textarea,
      [role="button"]:not(nav [role="button"]),
      [role="link"]:not(nav [role="link"]),
      [role="menuitem"]:not(nav [role="menuitem"]),
      [role="tab"]:not(nav [role="tab"]),
      [role="checkbox"]:not(nav [role="checkbox"]),
      [role="radio"]:not(nav [role="radio"]),
      [role="switch"]:not(nav [role="switch"]),
      [tabindex="0"]:not(nav [tabindex="0"])
    `);

    touchTargets.forEach((target) => {
      // Skip elements that are part of the accessibility widget
      if (target.closest('#accessibility-widget')) return;

      const rect = target.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(target);

      // Store original styles
      if (!target.hasAttribute('data-original-touch-styles')) {
        target.setAttribute('data-original-touch-styles', JSON.stringify({
          padding: computedStyle.padding,
          margin: computedStyle.margin,
          minWidth: computedStyle.minWidth,
          minHeight: computedStyle.minHeight
        }));
      }

      // Check if element is too small
      if (rect.width < MIN_TARGET_SIZE || rect.height < MIN_TARGET_SIZE) {
        // Calculate required padding
        const widthDiff = Math.max(0, MIN_TARGET_SIZE - rect.width);
        const heightDiff = Math.max(0, MIN_TARGET_SIZE - rect.height);

        // Apply minimum size using padding if needed
        if (widthDiff > 0) {
          const horizontalPadding = Math.ceil(widthDiff / 2);
          target.style.paddingLeft = `${horizontalPadding}px`;
          target.style.paddingRight = `${horizontalPadding}px`;
        }

        if (heightDiff > 0) {
          const verticalPadding = Math.ceil(heightDiff / 2);
          target.style.paddingTop = `${verticalPadding}px`;
          target.style.paddingBottom = `${verticalPadding}px`;
        }

        // Ensure minimum dimensions
        target.style.minWidth = `${MIN_TARGET_SIZE}px`;
        target.style.minHeight = `${MIN_TARGET_SIZE}px`;
      }

      // Check and fix spacing between targets
      touchTargets.forEach((otherTarget) => {
        if (target === otherTarget) return;

        const targetRect = target.getBoundingClientRect();
        const otherRect = otherTarget.getBoundingClientRect();

        // Calculate spacing between elements
        const horizontalSpacing = Math.min(
          Math.abs(targetRect.left - otherRect.right),
          Math.abs(otherRect.left - targetRect.right)
        );

        const verticalSpacing = Math.min(
          Math.abs(targetRect.top - otherRect.bottom),
          Math.abs(otherRect.top - targetRect.bottom)
        );

        // Fix insufficient spacing
        if (horizontalSpacing < MIN_TARGET_SPACING && verticalSpacing < MIN_TARGET_SPACING) {
          // Add margin to create spacing
          const currentMargin = parseInt(computedStyle.marginRight) || 0;
          const newMargin = currentMargin + (MIN_TARGET_SPACING - horizontalSpacing);
          target.style.marginRight = `${newMargin}px`;
        }
      });

      // Special handling for form elements
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
        target.style.boxSizing = 'border-box';
        target.style.minWidth = `${MIN_TARGET_SIZE}px`;
        target.style.minHeight = `${MIN_TARGET_SIZE}px`;
      }
    });

    // Add CSS for mobile devices
    const mobileStyles = document.createElement('style');
    mobileStyles.innerHTML = `
      @media (max-width: 768px) {
        a:not(nav a):not(.nav-link):not(.navbar-brand):not(.dropdown-item),
        button:not(nav button),
        input[type="button"]:not(nav input[type="button"]),
        input[type="submit"]:not(nav input[type="submit"]),
        input[type="reset"]:not(nav input[type="reset"]),
        [role="button"]:not(nav [role="button"]),
        [role="link"]:not(nav [role="link"]),
        [role="menuitem"]:not(nav [role="menuitem"]),
        [role="tab"]:not(nav [role="tab"]),
        [role="checkbox"]:not(nav [role="checkbox"]),
        [role="radio"]:not(nav [role="radio"]),
        [role="switch"]:not(nav [role="switch"]),
        [tabindex="0"]:not(nav [tabindex="0"])
      } {
        min-width: ${MIN_TARGET_SIZE}px !important;
        min-height: ${MIN_TARGET_SIZE}px !important;
        margin: ${MIN_TARGET_SPACING}px !important;
      }
    `;
    document.head.appendChild(mobileStyles);
  }

  // Run the fix immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixTouchTargets);
  } else {
    fixTouchTargets();
  }

  // Add resize handler to recheck touch targets
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fixTouchTargets, 250);
  });

  // Set up observer for dynamically added elements
  const touchTargetObserver = new MutationObserver((mutations) => {
    let shouldFix = false;
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && (
            node.matches('a, button, input, select, textarea, [role="button"], [tabindex="0"]') ||
            node.querySelector('a, button, input, select, textarea, [role="button"], [tabindex="0"]')
          )) {
            shouldFix = true;
          }
        });
      }
    });
    if (shouldFix) {
      fixTouchTargets();
    }
  });

  touchTargetObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  // --- Custom: Send active page URL to API after widget loads ---
  (function sendActiveUrlToApi() {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
      };
      fetch("https://68045b52c994b05b2271.fra.appwrite.run", requestOptions)
        .then((response) => response.text())
        .catch((error) => console.error("Active URL API error:", error));
    } catch (e) {
      console.error("Failed to send active URL to API", e);
    }
  })();

})();
