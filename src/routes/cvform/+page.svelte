<svelte:head>
  <title>DevPage</title>
</svelte:head>

<form
  method="POST"
  class="contact-form__form"
  name="cv-form"
  data-netlify="true"
  netlify-honeypot="infoo"
  style="opacity:0; height:0; overflow: hidden; width:0;"
>
  <div class="contact-form__form-wrapper">
    <div class="contact-form__input-wrapper">
      <label for="cv-name" class="contact-form__label">Name</label>
      <input type="text" id="cv-name" name="cv-name" class="contact-form__input" required />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="cv-last-name" class="contact-form__label">Last Name</label>
      <input
        type="text"
        id="cv-last-name"
        name="cv-last-name"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="cv-email" class="contact-form__label">Email</label>
      <input type="text" id="cv-email" name="cv-email" class="contact-form__input" required />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="cv-phone" class="contact-form__label">Phone Number</label>
      <input type="text" id="cv-email" name="cv-phone" class="contact-form__input" required />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="cv-comments" class="contact-form__label">Comments</label>
      <input type="text" id="cv-comments" name="cv-comments" class="contact-form__input" required />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="cv-file" class="contact-form__label">CV File</label>
      <input type="file" id="cv-file" name="cv-file" class="contact-form__input" required />
    </div>
  </div>
</form>
