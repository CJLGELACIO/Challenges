# Documentation: Challenge #6 — HTML Styles - CSS

- **Project:** ShelfSpace
- **Student / Author:** CJ Gelacio
- **Folder:** `Challenge #6`
- **Branch:** `Challenge #6`
- **Commit Message:** `Challenge #6: HTML Styles - CSS`

---

## Objectives

1. Implement internal CSS using a `<style>` block in the `<head>` section based on W3Schools standards (`https://www.w3schools.com/html/html_css.asp`).
2. Style layout elements (`header`, `nav`, `main`, `aside`, `section`, `article`, `footer`) to build a clean UI for the ShelfSpace application.

---

## Internal CSS Implementation

```html
<style>
  /* Base page styling */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
    color: #333333;
  }

  /* Header styling */
  header {
    background-color: #4a5568;
    color: #ffffff;
    padding: 20px;
    text-align: center;
  }

  /* Navigation menu styling */
  nav {
    background-color: #2d3748;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  nav li a {
    display: block;
    color: #ffffff;
    padding: 12px 20px;
    text-decoration: none;
  }

  nav li a:hover {
    background-color: #4a5568;
  }

  /* Main layout container (Sidebar + Content) */
  main {
    display: flex;
    margin: 20px;
    gap: 20px;
  }

  /* Sidebar navigation */
  aside {
    flex: 1;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 6px;
  }

  aside ul {
    list-style: none;
    padding: 0;
  }

  aside li a {
    display: block;
    padding: 8px 0;
    color: #2b6cb0;
    text-decoration: none;
  }

  /* Main content area */
  section {
    flex: 3;
  }

  article {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 6px;
    margin-bottom: 15px;
    border-left: 4px solid #3182ce;
  }

  /* Footer styling */
  footer {
    text-align: center;
    padding: 15px;
    background-color: #e2e8f0;
    font-size: 14px;
  }
</style>
```
