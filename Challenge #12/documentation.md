# Challenge #12 changes

## Main changes

- added 5 additional W3Schools How-To features (Side Navigation, Lightbox Gallery, Checklist, Progress Bar, and Tooltips).

  ```html
  <!-- index.html: Sidenav Component -->
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
      >&times;</a
    >
    <a href="#all">Library Home</a>
  </div>
  ```

- expanded `js/script.js` to control the sliding sidebar and lightbox display behavior.

  ```javascript
  /* js/script.js: Sidenav Handler */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  ```

## Other changes

- styled interactive UI elements for the checklist items and progress bar in `style.css`.
