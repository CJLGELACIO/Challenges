# Challenge #11 changes

## Main changes

- implemented 5 W3Schools How-To features (Accordion, Modal Box, Tabs, Search Filter, and Dropdown Menu) into the project layout.

  ```html
  <!-- index.html: W3Schools Feature Integration -->
  <button class="accordion">How do I upload books?</button>
  <div class="panel">
    <p>Click the add button or drop your .epub files into the library area.</p>
  </div>
  ```

- created a dedicated script file under the `js` folder (`js/script.js`) to handle all interactive How-To behaviors.

  ```javascript
  /* js/script.js: Modal and Accordion Handlers */
  function openModal() {
    document.getElementById("infoModal").style.display = "block";
  }
  ```

## Other changes

- added modular styling rules in `style.css` to accommodate the 5 How-To UI components.
