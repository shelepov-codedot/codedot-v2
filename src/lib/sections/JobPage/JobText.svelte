<script>
  export let data

  let errorText,
    statusError,
    textName = '',
    name = '',
    lastName = '',
    email = '',
    phone = '',
    comments = '',
    file,
    errors = {},
    succes = false

  const validateForm = () => {
    errors = {}
    if (!name) {
      errors.name = 'Name is required'
    }
    if (!email) {
      errors.email = 'Email is required'
    }
    if (email) {
      let emailReg = /^\S+@\S+\.\S+$/
      if (emailReg.test(email) == false) {
        errors.email = 'Email does not pass verification'
      }
    }
    if (!lastName) {
      errors.lastName = 'Last name is required'
    }
    if (!phone) {
      errors.phone = 'Phone number is required'
    }
    if (phone) {
      let phoneReg = /^\d+$/
      if (phoneReg.test(phone) == false) {
        errors.phone = 'Phone does not pass verification'
      }
    }

    if (!file) {
      errors.file = 'File is required'
    }
    console.log(errors.phone)
  }

  const handleSubmit = async () => {
    try {
      const formDataa = new FormData()
      formDataa.append('form-name', 'cv-form')
      formDataa.append('cv-name', name)
      formDataa.append('cv-last-name', lastName)
      formDataa.append('cv-email', email)
      formDataa.append('cv-phone', phone)
      formDataa.append('cv-comments', comments)
      formDataa.append('cv-file', file)

      validateForm()

      if (Object.keys(errors).length === 0) {
        const response = await fetch('/netlifycvform', {
          method: 'POST',
          body: formDataa,
        })

        if (response.ok) {
          name = ''
          lastName = ''
          email = ''
          phone = ''
          comments = ''
          textName = ''
          file = null
          succes = true
        }
      }
    } catch (error) {
      console.log(error)
      return error
    }
  }
  const selectFile = (e) => {
    const selectedFiles = e.target.files[0]
    const selectedFilesFormat = e.target.files[0].name.split('.').splice(-1, 1)[0]
    if (selectedFiles) {
      if (
        selectedFilesFormat != 'pdf' &&
        selectedFilesFormat != 'docx' &&
        selectedFilesFormat != 'doc'
      ) {
        textName = ''
        errorText = 'Data format not supported'
        e.target.value = null
        e.target.disabled = !e.target.disabled
        statusError = !statusError

        setTimeout(() => {
          statusError = !statusError
          e.target.disabled = !e.target.disabled
        }, 4000)
      } else {
        if (selectedFiles.size >= 5 * 1024 * 1024) {
          textName = ''
          e.target.value = null
          e.target.disabled = !e.target.disabled
          statusError = !statusError
          errorText = 'File size is larger than allowed'

          setTimeout(() => {
            statusError = !statusError
            e.target.disabled = !e.target.disabled
          }, 4000)
        } else {
          validateForm()
          textName = e.target.files[0].name
          file = e.target.files[0]
        }
      }
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if data}
  <section class="job-text">
    <div class="container">
      <div class="job-text__wrapper">
        <div class="job-text__text-wrapper">
          {#each data.jobTextItems as jobTextItem}
            <div class="job-text__item">
              <span class="job-text__name">{jobTextItem.itemName}</span>
              <ul class="job-text__list">
                {#each jobTextItem.richTextBlock as richItem}
                  <li>{richItem.children[0].text}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
        <form
          action="#"
          class="job-text__form"
          on:submit|preventDefault={handleSubmit}
          enctype="multipart/form-data"
        >
          {#if succes == true}
            <div class="job-text__success">
              <div class="job-text__succes-icon-wrapper">
                <img src="../icons/success.svg" alt="succes-icon" class="job-text__succes-icon" />
              </div>
              <p class="job-text__succes-title">Thank you</p>
              <p class="job-text__succes-text">Your CV has been successfully submitted</p>
            </div>
          {/if}
          <span class="job-text__job-name">Senior Fullstack Developer</span>
          <div class="job-text__inputs">
            <div class="job-text__input-wrapper">
              <label for="name" class="job-text__input-name">Name</label>
              <input
                type="job-text__input"
                name="name"
                class={errors.name ? 'job-text__input job-text__input--error' : 'job-text__input'}
                bind:value={name}
                on:input={() => validateForm()}
              />
              {#if errors.name}
                <span class="job-text__error-text">{errors.name}</span>
              {/if}
            </div>
            <div class="job-text__input-wrapper">
              <label for="last-name" class="job-text__input-name">Last name</label>
              <input
                type="job-text__input"
                name="last-name"
                class={errors.lastName
                  ? 'job-text__input job-text__input--error'
                  : 'job-text__input'}
                bind:value={lastName}
                on:input={() => validateForm()}
              />
              {#if errors.lastName && lastName === ''}
                <span class="job-text__error-text">{errors.lastName}</span>
              {/if}
            </div>
            <div class="job-text__input-wrapper">
              <label for="email" class="job-text__input-name">Email</label>
              <input
                type="text"
                name="email"
                class={errors.email ? 'job-text__input job-text__input--error' : 'job-text__input'}
                bind:value={email}
                on:input={() => validateForm()}
              />
              {#if errors.email}
                <span class="job-text__error-text">{errors.email}</span>
              {/if}
            </div>
            <div class="job-text__input-wrapper">
              <label for="phone" class="job-text__input-name">Phone number</label>
              <input
                name="phone"
                type="tel"
                class={errors.phone ? 'job-text__input job-text__input--error' : 'job-text__input'}
                bind:value={phone}
                on:input={() => validateForm()}
              />
              {#if errors.phone}
                <span class="job-text__error-text">{errors.phone}</span>
              {/if}
            </div>
            <div class="job-text__input-wrapper job-text__input-wrapper--textarea">
              <label for="comments" class="job-text__input-name">Comments</label>
              <textarea
                name="comments"
                id="comments"
                class="job-text__input"
                bind:value={comments}
              />
            </div>
            <div class="job-text__file-input">
              <input
                type="file"
                name="file"
                if="file"
                bind:value={file}
                on:change={(e) => selectFile(e)}
                on:input={() => validateForm()}
                class="job-text__file"
                accept=" .doc, .docx, .pdf"
              />
              <img src="../icons/Paper.svg" alt="" lass="job-text__file-icon" />
              <div class="job-text__file-text-wrapper">
                {#if textName === ''}
                  <span>DROP YOUR CV HERE, OR BROWSE</span>
                  <span>Supports: DOC, DOCX, PDF, max size 5 Mb</span>
                {/if}
                {#if textName !== ''}
                  <span>{textName}</span>
                {/if}
              </div>
              {#if errors.file}
                <span class="job-text__error-text">{errors.file}</span>
              {/if}
            </div>
            <button type="submit" class="btn btn--fullwidth">Apply</button>
          </div>
        </form>
      </div>
    </div>

    <div class={statusError ? 'job-text__notice job-text__notice--active' : 'job-text__notice'}>
      {errorText}
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .job-text {
    @include media-breakpoint-down(lg) {
      padding-top: 140px;
      padding-bottom: 100px;
    }
    @include media-breakpoint-up(lg) {
      padding-top: 207px;
      padding-bottom: 100px;
    }
    &__wrapper {
      position: relative;
      display: grid;

      @include media-breakpoint-down(lg) {
        gap: 21px;
      }

      @include media-breakpoint-between(lg, xl) {
        gap: 10px;
      }

      @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include media-breakpoint-up(xl) {
        gap: 40px;
      }
    }

    &__notice {
      position: fixed;
      bottom: 0px;
      font-size: 18px;
      color: white;
      font-weight: 600;
      background-color: rgb(255, 0, 0);
      z-index: 10;
      transition: 1s ease-in-out;

      @include media-breakpoint-down(sm) {
        width: 100%;
        padding: 20px;
        left: -120%;
      }

      @include media-breakpoint-up(sm) {
        padding: 30px;
        border-radius: 0 20px 20px 0;
        padding-right: 120px;
        left: -100%;
      }

      &--active {
        display: block;
        left: 0;
      }
    }

    &__item {
      &:not(&:last-of-type) {
        @include media-breakpoint-down(lg) {
          margin-bottom: 39px;
        }
        @include media-breakpoint-up(lg) {
          margin-bottom: 80px;
        }
      }
    }

    &__error-text {
      color: red;
      position: absolute;
      bottom: -20px;
      left: 0;
      width: max-content;
      font-size: 14px;
    }

    &__name {
      font-weight: 600;

      @include media-breakpoint-down(md) {
        font-size: 24px;
      }

      @include media-breakpoint-up(md) {
        font-size: 36px;
      }
    }

    &__list {
      list-style: none;
      padding: 0;

      @include media-breakpoint-down(md) {
        margin-top: 20px;
      }

      @include media-breakpoint-up(md) {
        margin-top: 40px;
      }
    }

    &__list li {
      @include media-breakpoint-down(md) {
        font-size: 14px;
        line-height: 21px;
      }

      @include media-breakpoint-between(md, xl) {
        font-size: 16px;
        line-height: 24px;
      }

      @include media-breakpoint-up(xl) {
        font-size: 18px;
        line-height: 27px;
      }

      &:not(&:last-of-type) {
        margin-bottom: 16px;
      }
    }

    &__text-wrapper {
      @include media-breakpoint-up(lg) {
        margin-top: 42px;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      background-color: #b3dfef4d;
      border-radius: 40px;
      height: fit-content;
      position: relative;
      @include media-breakpoint-down(md) {
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 35px;
      }

      @include media-breakpoint-up(md) {
        padding: 40px;
      }
    }

    &__success {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0);
      backdrop-filter: blur(25px);
      top: 0;
      left: 0;
      z-index: 2;
      border-radius: 40px;
    }

    &__succes-icon-wrapper {
      position: relative;

      @include media-breakpoint-down(sm) {
        width: 250px;
        height: 250px;
      }

      @include media-breakpoint-up(sm) {
        width: 300px;
        height: 300px;
      }
    }

    &__succes-icon {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    &__succes-title {
      text-transform: uppercase;
      color: #006185;
      font-weight: bold;

      @include media-breakpoint-down(sm) {
        font-size: 32x;
      }

      @include media-breakpoint-up(sm) {
        font-size: 48px;
      }
    }

    &__succes-text {
      text-transform: uppercase;
      color: #006185;
      font-weight: bold;
      text-align: center;

      @include media-breakpoint-down(sm) {
        font-size: 14px;
      }

      @include media-breakpoint-up(sm) {
        font-size: 18px;
      }
    }

    &__file {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    &__file:disabled ~ &__file-text-wrapper,
    &__file:disabled ~ &__file-icon {
      opacity: 0.5;
    }

    &__job-name {
      font-weight: 600;
      text-align: center;

      @include media-breakpoint-down(lg) {
        margin-bottom: 21px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 40px;
      }

      @include media-breakpoint-down(md) {
        font-size: 24px;
      }

      @include media-breakpoint-up(md) {
        font-size: 36px;
      }
    }

    &__inputs {
      display: grid;

      @include media-breakpoint-down(lg) {
        row-gap: 22px;
      }

      @include media-breakpoint-up(lg) {
        row-gap: 35px;
        column-gap: 20px;
      }

      @include media-breakpoint-up(xl) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__input-wrapper {
      display: flex;
      flex-direction: column;
      position: relative;
      gap: 5px;

      &:not(&:nth-child(5)) {
        .job-text__input-name::after {
          position: absolute;
          content: '*';
          font-size: 16px;
          color: red;
          right: -10px;
          top: -2px;
        }
      }
    }

    &__input-wrapper--textarea {
      @include media-breakpoint-up(xl) {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      .job-text__input {
        @include media-breakpoint-down(lg) {
          height: 142px;
        }

        @include media-breakpoint-up(lg) {
          height: 170px;
        }
      }
    }

    &__input {
      display: flex;
      border-radius: 40px;
      background-color: white;
      border: 1px solid rgba(255, 255, 255, 0);

      resize: none;
      outline: 0;

      @include media-breakpoint-down(lg) {
        padding: 20px 15px;
      }

      @include media-breakpoint-between(lg, xl) {
        padding: 15px 25px;
      }

      @include media-breakpoint-up(xl) {
        padding: 19px 25px;
      }

      &--error {
        border: 1px solid red;

        &:focus {
          border: 1px solid rgba(255, 255, 255, 0);
        }
      }

      &:focus {
        border: 1px solid rgba(255, 255, 255, 0);
      }
    }

    &__input-name {
      position: relative;
      font-size: 16px;
      color: #212121;
      width: max-content;
    }

    &__file-input {
      position: relative;
      padding-top: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed #006185;

      @include media-breakpoint-down(md) {
        padding-left: 20px;
        padding-right: 20px;
        height: 156px;
      }

      @include media-breakpoint-down(lg) {
        padding-bottom: 45px;
      }

      @include media-breakpoint-up(lg) {
        padding-bottom: 30px;
      }

      @include media-breakpoint-up(xl) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    &__file-text-wrapper {
      display: flex;
      flex-direction: column;
      cursor: pointer;

      span:first-of-type {
        position: relative;
        color: #006185;
        font-weight: 480;
        @include media-breakpoint-down(sm) {
          font-size: 14px;
          word-break: break-all;
        }

        @include media-breakpoint-up(sm) {
          font-size: 16px;
        }

        &::after {
          position: absolute;
          content: '*';
          font-size: 16px;
          color: red;
          right: -10px;
          top: -2px;
        }
      }

      span:not(span:first-of-type) {
        @include media-breakpoint-down(sm) {
          font-size: 12px;
        }

        @include media-breakpoint-up(sm) {
          font-size: 14px;
        }
      }
    }
  }

  .btn {
    padding: 17px 30px;
    @include media-breakpoint-up(xl) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
</style>
