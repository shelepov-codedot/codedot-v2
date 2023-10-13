<svelte:head>
  <title>DevPage</title>
</svelte:head>

<form
  method="POST"
  class="contact-form__form"
  name="discucc-your-project"
  data-netlify="true"
  netlify-honeypot="infoo"
>
  <div class="contact-form__form-wrapper">
    <div class="contact-form__input-wrapper">
      <label for="project-industry" class="contact-form__label">Industry</label>
      <input
        type="text"
        id="project-industry"
        name="project-industry"
        placeholder="name*"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="project-name" class="contact-form__label">Name</label>
      <input
        type="text"
        id="project-name"
        name="project-name"
        placeholder="name*"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="project-phone" class="contact-form__label">Phone</label>
      <input
        type="text"
        id="project-phone"
        name="project-phone"
        placeholder="name*"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="project-email" class="contact-form__label">Email</label>
      <input
        type="text"
        id="project-email"
        name="project-email"
        placeholder="email*"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="project-requirements" class="contact-form__label">Requirements</label>
      <input
        type="text"
        id="project-requirements"
        name="project-requirements"
        placeholder="email*"
        class="contact-form__input"
        required
      />
    </div>
    <div class="contact-form__input-wrapper">
      <label for="project-file" class="contact-form__label">Task File</label>
      <input
        type="file"
        id="project-file"
        name="project-file"
        placeholder="email*"
        class="contact-form__input"
        required
      />
    </div>
  </div>
</form>
