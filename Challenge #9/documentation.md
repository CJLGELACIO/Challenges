# Challenge #9 changes

## Main changes

- added a new section for the contact form.

  ```html
  <!-- index.html, line 68 -->
  <article class="card-section" id="contact">
    <h2>Contact &amp; Feedback</h2>
    <p class="form-desc">
      Have feedback, suggestions, or bug reports? Send us a message below.
    </p>

    <form action="#" method="POST" class="contact-form">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Type your message here..."
          required
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary submit-btn">
        Send Message
      </button>
    </form>
  </article>
  ```

- revised `style.css` so it can cater contact form layout, textareas, and input states

  ```css
  /* style.css, line 235 */
  .form-group input,
  .form-group textarea {
    padding: 10px 14px;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    font-size: 14px;
    font-family: inherit;
    background-color: #ffffff;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
  ```

- added a new section and the video player for the local video on `./video/rickroll.mp4`

  ```html
  <!-- index.html, line 55 -->
  <article class="card-section" id="about">
    <h2>About ShelfSpace</h2>
    <p>
      ShelfSpace is designed as a minimal, offline-first digital reader for your
      ePub collection.
    </p>
    <p class="developer-note">
      <em
        >Thanks for using the web app! Here is a special developer message:</em
      >
    </p>

    <div class="video-wrapper">
      <video controls>
        <source src="video/rickroll.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  </article>
  ```

## Other changes

- added responsive video wrapper styling in `style.css`

  ```css
  /* style.css, line 218 */
  .video-wrapper {
    margin-top: 12px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #000000;
  }

  .video-wrapper video {
    width: 100%;
    display: block;
    max-height: 380px;
  }
  ```
