# Challenge #10 changes

## Main changes

- implemented responsive layout rules and media queries in `style.css` to handle mobile screens dynamically.

  ```css
  /* style.css, line 250 */
  @media (max-width: 768px) {
    .app-main {
      flex-direction: column;
    }
    .sidebar {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #e2e8f0;
    }
    .sidebar-nav ul {
      display: flex;
      gap: 8px;
      overflow-x: auto;
    }
    .book-grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
  }
  ```

- verified viewport scaling configuration in the head tag of `index.html`.

  ```html
  <!-- index.html, line 5 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

## Other changes

- ensured flexible container wrapping and grid layouts across all main blocks to prevent layout overflow on smaller viewports.
