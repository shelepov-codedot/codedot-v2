<svelte:head>
  <title>DevPage</title>
</svelte:head>

<form
  method="POST"
  class="contact-form__form"
  name="discucc-your-project"
  data-netlify="true"
  netlify-honeypot="infoo"
  style="opacity:0; height:0; overflow: hidden; width:0;"
>
  <input type="hidden" name="form-name" value="contact-form-form-netlify" />
  <div class="contact-form__form-wrapper">
    <div class="contact-form__input-wrapper">
      <label for="name" class="contact-form__label">Your name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name*"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="email" class="contact-form__label">Your email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="email*"
        class="contact-form__input"
        required
      />
    </div>
  </div>
  <div class="contact-form__form-wrapper contact-form__form-wrapper--column">
    <div class="contact-form__input-wrapper">
      <label for="message" class="contact-form__label">Tell us about your project</label>
      <textarea name="message" id="message" rows="5" placeholder="ss" class="contact-form__input" />
    </div>
    <div class="contact-form__button-wrapper">
      <input type="submit" value="ss" class="btn" />
      <p class="contact-form__form-policy">ss</p>
    </div>
  </div>
</form>
