<script>
  export let closeModal, activeModal, data

  let active, statusError
  $: curValue = 'Select your industry'

  let errorText,
    textName = '',
    industry = curValue,
    name = '',
    phone = '',
    email = '',
    requirements = '',
    file,
    succes = false

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('project-name', name)
      formData.append('project-email', email)
      formData.append('project-industry', industry)
      formData.append('form-name', 'discucc-your-project')
      formData.append('project-phone', phone)
      formData.append('project-file', file)
      formData.append('project-requirements', requirements)

      const response = await fetch('/netlifyform', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        name = ''
        email = ''
        industry = ''
        phone = ''
        requirements = ''
        file = null
        textName = ''
        curValue = 'Select your industry'
        succes = true
      }
    } catch (error) {
      console.log(error)
      return null
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
          textName = e.target.files[0].name
          file = e.target.files[0]
        }
      }
    }
  }

  const useSelect = (e) => {
    curValue = e.target.textContent
    industry = curValue

    active = !active
  }

  const selectValue = () => {
    active = !active
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if activeModal}
  <section class="modal">
    <form
      action="#"
      class={succes ? 'modal__wrapper noscroll' : 'modal__wrapper'}
      on:submit|preventDefault={handleSubmit}
      enctype="multipart/form-data"
    >
      {#if succes}
        <div class="modal__success">
          <div class="modal__succes-icon-wrapper">
            <img src="../icons/success.svg" alt="succes-icon" class="modal__succes-icon" />
          </div>
          <p class="modal__succes-title">Thank you</p>
          <p class="modal__succes-text">Your application has been successfully submitted</p>
        </div>
      {/if}
      <span class="modal__cross" on:click={closeModal(activeModal)} />
      <h2 class="modal__title">Let’s discuss your project</h2>
      <div class="modal__items">
        <div class="modal__input-wrapper">
          <label for="industry" class="modal__label">Industry</label>
          <input type="hidden" name="industry" id="industry" bind:value={curValue} required />
          <div class="modal__input" on:click={selectValue}>
            <span class="modal__input-value" name="industry">{curValue}</span>
            <span class="modal__input-icon" />
          </div>
          <div class={active ? 'modal__input-list modal__input-list--active' : 'modal__input-list'}>
            {#each data.industries as industry}
              <span class="modal__input-list-item" on:click={(e) => useSelect(e)}>
                {industry.serviceName}
              </span>
            {/each}
            <span class="modal__input-list-item" on:click={(e) => useSelect(e)}> Other... </span>
          </div>
        </div>
        <div class="modal__input-wrapper">
          <label for="name" class="modal__label">Name</label>
          <input type="text" name="name" class="modal__input" required bind:value={name} />
        </div>
        <div class="modal__input-wrapper">
          <label for="phone" class="modal__label">Phone</label>
          <input type="text" name="phone" class="modal__input" required bind:value={phone} />
        </div>
        <div class="modal__input-wrapper">
          <label for="email" class="modal__label">Corporate Email</label>
          <input type="email" name="email" class="modal__input" required bind:value={email} />
        </div>
        <div class="modal__input-wrapper">
          <label for="requirements" class="modal__label">Project requirements</label>
          <textarea
            name="requirements"
            id="requirements"
            class="modal__input modal__input--textarea"
            bind:value={requirements}
          />
        </div>
        <div class="modal__file-input">
          <input
            type="file"
            name="file"
            id="file"
            class="modal__file"
            accept=".doc, .docx,.pdf"
            bind:value={file}
            on:change={(e) => selectFile(e)}
          />
          <img src="../icons/Paper.svg" alt="" class="modal__file-icon" />

          <label for="file" class="modal__file-text-wrapper">
            {#if textName == ''}
              <span>DROP YOUR TASK HERE, OR BROWSE</span>
              <span>Supports: DOC, DOCX, PDF, max size 5 Mb</span>
            {/if}
            {#if textName}
              <span>{textName}</span>
            {/if}
          </label>
        </div>
        <div class="modal__checkbox-wrapper">
          <div class="modal__checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label for="checkbox" class="modal__checkbox-box" />
          </div>
          <label for="checkbox" class="modal__checkbox-text">
            I want to protect my data by signing an NDA.
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn--fullwidth">Send request</button>
      <span class="modal__text">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
        apply.
      </span>
    </form>
    <span class="modal__background" />
    <div class={statusError ? 'modal__notice modal__notice--active' : 'modal__notice'}>
      {errorText}
    </div>
  </section>
{/if}

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 22;
    top: 0;

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
      z-index: 6;
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

    &__cross {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      display: flex;
      z-index: 7;
      align-items: center;
      justify-content: center;

      &::before,
      &::after {
        position: absolute;
        content: '';
        background-color: #212121;
        width: 25px;
        height: 3px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &__title {
      font-weight: 600;
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 24px;
        line-height: 29px;
        padding-bottom: 20px;
      }

      @include media-breakpoint-up(md) {
        font-size: 36px;
        padding-bottom: 40px;
        line-height: 43px;
      }
    }

    &__wrapper {
      position: relative;
      padding-top: 80px;
      padding-bottom: 40px;
      border-radius: 40px;
      background-color: #e9f6fb;
      z-index: 10;
      height: 100%;

      @include media-breakpoint-down(md) {
        margin-left: 20px;
        margin-right: 20px;
      }

      @include media-breakpoint-up(md) {
        width: 750px;
      }

      &::-webkit-scrollbar {
        background-color: transparent;
        border-radius: 40px;
        width: 0;
      }

      &::-webkit-scrollbar-thumb {
        transform: translate(-100px);
        background-color: #c7ecfa;
        border-radius: 20px;
      }

      @include media-breakpoint-down(sm) {
        padding-left: 20px;
        padding-right: 20px;
      }

      @include media-breakpoint-between(sm, md) {
        padding-left: 50px;
        padding-right: 50px;
      }

      @include media-breakpoint-between(md, xl) {
        padding-left: 85px;
        padding-right: 85px;
      }

      @include media-breakpoint-up(xl) {
        padding-left: 125px;
        padding-right: 125px;
      }
    }

    &__file {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    &__file:disabled ~ &__file-text-wrapper,
    &__file:disabled ~ &__file-icon {
      opacity: 0.5;
    }

    &__background {
      position: fixed;
      top: 0;
      left: 0;
      background-color: #00000080;
      width: 100%;
      height: 100%;
    }

    &__items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: calc(100% - 220px);
      overflow-y: auto;
      overflow-x: hidden;

      @include media-breakpoint-down(md) {
        column-gap: 20px;
        row-gap: 24px;
      }

      @include media-breakpoint-up(md) {
        column-gap: 30px;
        row-gap: 36px;
      }
    }

    &__items::-webkit-scrollbar {
      width: 2px;
    }

    &__items::-webkit-scrollbar-track {
      background: transparent;
    }

    &__items::-webkit-scrollbar-thumb {
      border-radius: 20px;
      border: 3px solid #006185;
    }

    &__label {
      margin-bottom: 5px;
      font-size: 16px;
      line-height: 24px;
      width: max-content;
    }

    &__input-wrapper {
      display: flex;
      flex-direction: column;
      grid-column-start: 1;
      grid-column-end: 3;

      &:nth-child(2) {
        @include media-breakpoint-up(md) {
          grid-column-start: 1;
          grid-column-end: 2;
        }
      }

      &:nth-child(3) {
        @include media-breakpoint-up(md) {
          grid-column-start: 2;
          grid-column-end: 3;
        }
      }

      &:nth-child(1) {
        position: relative;
      }

      &:nth-child(1) .modal__input {
        z-index: 5;
      }

      &:nth-child(1) .modal__label,
      &:nth-child(2) .modal__label,
      &:nth-child(3) .modal__label,
      &:nth-child(4) .modal__label {
        position: relative;

        &::after {
          position: absolute;
          top: 0;
          right: -10px;
          content: '*';
          color: red;
        }
      }
    }

    &__input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      resize: none;
      padding: 15px 25px;
      border-radius: 40px;
      font-size: 16px;
      border: none;
      outline: none;
      background-color: white;

      &--textarea {
        @include media-breakpoint-down(lg) {
          height: 140px;
        }
        @include media-breakpoint-up(lg) {
          height: 170px;
        }
      }
    }

    &__input-icon {
      position: absolute;
      z-index: 2;
      width: 20px;
      background-repeat: no-repeat;
      right: 25px;
      background-size: cover;
      height: 20px;
      background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 10L12.0005 16L6 10" stroke="%23838383" stroke-linecap="square"/></svg>');
    }

    &__input-list {
      overflow: hidden;
      display: none;
      padding-top: 50px;
      z-index: 2;
      background-color: rgb(255, 255, 255);
      left: 0;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: calc(100% - 50px);
      border-radius: 20px;
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.488);

      &--active {
        display: flex;
      }
    }

    &__input-list-item {
      user-select: none;
      cursor: pointer;
      padding: 10px 25px;
      font-size: 14px;

      &:first-of-type {
        border-top: 1px solid rgb(186, 186, 186);
      }

      &:not(&:last-of-type) {
        border-bottom: 1px solid rgb(186, 186, 186);
      }

      &:hover {
        background-color: #e9f6fb;
      }
    }

    &__input-value {
      background: white;
      position: relative;
      z-index: 10;
    }

    &__file-input {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      border: 1px dashed #006185;

      @include media-breakpoint-down(md) {
        padding-left: 20px;
        padding-right: 20px;
      }

      @include media-breakpoint-down(lg) {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      @include media-breakpoint-up(lg) {
        padding-top: 40px;
        padding-bottom: 30px;
      }

      grid-column-start: 1;
      grid-column-end: 3;
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

    &__checkbox {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      min-height: 16px;
    }

    &__checkbox-wrapper {
      display: flex;
      grid-column-start: 1;
      grid-column-end: 3;

      @include media-breakpoint-down(sm) {
        align-items: flex-start;
      }

      @include media-breakpoint-up(sm) {
        align-items: center;
      }

      @include media-breakpoint-down(lg) {
        margin-bottom: 15px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 30px;
      }
    }

    &__checkbox-text {
      margin-left: 8px;
      cursor: pointer;
    }

    #checkbox {
      display: none;
    }

    &__checkbox-box {
      position: absolute;
      width: 100%;
      cursor: pointer;
      height: 100%;
      border: 1px solid black;
    }

    #checkbox:checked + .modal__checkbox-box {
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('data:image/svg+xml,<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00009 4.6696C2.27021 5.50578 3.21922 7 3.21922 7H3.23826C3.23826 7 5.25442 3.28486 9 1" stroke="%23212121" stroke-linecap="square"/></svg>');
    }

    &__text {
      font-size: 14px;
      line-height: 21px;
    }

    .btn {
      @include media-breakpoint-down(lg) {
        margin-bottom: 40px;
        padding: 14px 30px;
      }

      @include media-breakpoint-up(lg) {
        margin-bottom: 39px;
        padding: 18px 30px;
      }
    }
  }

  .modal__wrapper.noscroll {
    overflow-y: hidden;
  }
</style>
