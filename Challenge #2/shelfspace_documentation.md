# Challenge #2: Basic xhtml Application — ShelfSpace

## 1. Project Overview
**ShelfSpace** is a modern, lightweight web-based ePub reader and digital library designed to allow users to store, manage, and read eBook files locally inside their web browser without requiring external server deployments or proprietary desktop apps. 

This submission serves as the foundational XHTML structure for the ShelfSpace web application, demonstrating valid markup, semantic document structure, and strict compliance with XHTML 1.0 Standards.

---

## 2. Objectives
1. **XHTML Tag Application:** Apply basic XHTML tags relevant to the planned ShelfSpace application following W3Schools XHTML guidelines.
2. **Structural Demonstration:** Showcase key document layout sections including header, navigation, main content areas, forms, and footer.
3. **Repository Organization:** Place project files within the dedicated `Challenge #2` directory on the corresponding Git branch.
4. **Standardized Version Control:** Maintain clean commit history adhering strictly to assignment guidelines.
5. **Documentation:** Provide a complete technical summary formatted for submission.

---

## 3. Directory & Branch Structure
To fulfill the submission requirements, the project repository is structured as follows:

```text
shelfspace/
└── Challenge #2/
    ├── index.html         # Main XHTML Strict document
    └── DOCUMENTATION.md   # Project documentation
```

### Branch & Git Rules
* **Git Branch:** `Challenge #2`
* **Folder Title:** `Challenge #2`
* **Commit Message:** `Challenge #2: Basic xhtml Application`

---

## 4. XHTML Compliance Checklist (W3Schools Standards)
The document strictly adheres to the following XHTML rules:

- [x] **Correct DOCTYPE Declaration:** Includes `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`.
- [x] **XML Namespace:** The `<html>` element specifies `xmlns="http://www.w3.org/1999/xhtml"`, `xml:lang="en"`, and `lang="en"`.
- [x] **Lowercase Tags and Attributes:** All element names (e.g., `<html>`, `<div>`, `<p>`) and attributes (e.g., `class`, `id`, `type`) are strictly written in lowercase.
- [x] **Explicitly Closed Tags:** All non-empty tags are properly paired and closed.
- [x] **Self-Closing Void Tags:** Empty elements are closed with a space and trailing slash (e.g., `<meta />`, `<input />`, `<hr />`).
- [x] **Quoted Attribute Values:** All attribute values are enclosed within double quotes (e.g., `id="library"`).
- [x] **Character Entity Encoding:** Special XML characters are escaped correctly (e.g., `&amp;` for `&`, `&copy;` for `©`).

---

## 5. XHTML Code Breakdown

The markup for `index.html` is structured into well-defined semantic sections:

### 1. Document Head (`<head>`)
* **`meta` tag:** Defines character set as `utf-8` using self-closing XHTML syntax.
* **`title` tag:** Specifies the browser tab title (`ShelfSpace - Basic ePub Reader Demo`).
* **`style` tag:** Embedded CSS with explicit `type="text/css"` attribute to style layout sections cleanly.

### 2. Header Section (`.header`)
* Contains the primary `<h1>` branding title (*ShelfSpace*) and subtitle (`<p>`).

### 3. Navigation Section (`.nav`)
* Contains anchor (`<a>`) tags referencing internal page section IDs (`#library`, `#import`, `#reader`).

### 4. Main Content Container (`.container`)
* **Library Section (`#library`):** Uses structural headings (`<h2>`, `<h3>`) and paragraph blocks (`<p>`) wrapped in `.book-card` containers to represent saved eBook records.
* **File Import Form (`#import`):** Implements an XHTML-compliant form using `<form>`, `<label>`, and self-closing `<input />` elements for selecting `.epub` files.
* **Reader Preview Screen (`#reader`):** Simulates the eReader reading canvas for viewing chapter content.

### 5. Footer Section (`.footer`)
* Displays copyright information utilizing proper entity encoding (`&copy;`).