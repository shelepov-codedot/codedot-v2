<script>
  export let data
  import { TelInput, normalizedCountries } from 'svelte-tel-input'

  let selectedCountry = 'PL'
  let value = ''
  let classInput = 'tel-input'
  let valid = true
  let detailedValue = null

  let errorText,
    statusError,
    textName = '',
    name = '',
    lastName = '',
    email = '',
    phone = '',
    comments = '',
    file,
    filter = '',
    flag = '',
    errors = {},
    prefix = '',
    succes = false,
    openList = false

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
      if (phone.length <= 8) {
        errors.phone = 'Phone length is min'
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

  const handleList = () => {
    openList = !openList
  }

  const selectMask = (e) => {
    flag = e.target.dataset.flag
    prefix = e.target.dataset.prefix
    selectedCountry = flag.toUpperCase()
    validateForm()
    openList = !openList
  }

  const handleInput = (e) => {
    phone = prefix + e.target.value
    console.log(phone)
    validateForm()
  }

  const handleFilter = (e) => {
    filter = e.target.value
    validateForm()
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
              <label for="phone" class="job-text__label">Phone</label>
              <div
                class={errors.phone ? 'job-text__input job-text__input--error' : 'job-text__input'}
              >
                <div class="job-text__phone-list">
                  <div class="job-text__phone-item">
                    <span class={`job-text__phone-flag flag flag-${flag}`} on:click={handleList} />
                    <span class="job-text__phone-prefix">
                      {prefix}
                    </span>
                    <input type="hidden" id="phone" name="phone" bind:value={phone} />
                    <TelInput
                      bind:country={selectedCountry}
                      bind:value
                      bind:valid
                      bind:detailedValue
                      bind:class={classInput}
                      on:change={(e) => handleInput(e)}
                    />
                  </div>

                  <div
                    class={openList
                      ? 'job-text__phone-list-items job-text__phone-list-items--active'
                      : 'job-text__phone-list-items '}
                  >
                    <div class="job-text__phone-search-wrapper">
                      <span class="job-text__phone-search-icon">🔎</span>
                      <input
                        type="search"
                        class="job-text__phone-search-input"
                        on:input={(e) => handleFilter(e)}
                      />
                    </div>
                    {#each normalizedCountries as currentCountry (currentCountry.id)}
                      {#if currentCountry.name.toLowerCase().includes(filter.toLowerCase())}
                        <span
                          class="job-text__phone-list-item"
                          on:click={selectMask}
                          data-flag={currentCountry.iso2.toLowerCase()}
                          data-prefix={`+${currentCountry.dialCode}`}
                        >
                          <span
                            class={`job-text__phone-flag flag flag-${currentCountry.iso2.toLowerCase()}`}
                          />
                          <span class="job-text__phone-prefix">
                            {currentCountry.name} (+{currentCountry.dialCode})
                          </span>
                        </span>
                      {/if}
                    {/each}
                  </div>
                </div>
              </div>

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

    &__phone-input {
      display: flex;
      align-items: center;
      height: 50px;
      position: relative;
    }

    &__phone-search-wrapper {
      position: sticky;
      top: 0;
      background-color: white;
      left: 0;
      padding: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__phone-search-input {
      width: 100%;
      border-radius: 10px;
      border: 1px solid black;
      outline: none;
      padding: 3px 10px;
    }

    &__phone-prefix {
      font-size: 12px;
      width: max-content;
    }

    &__phone-list-items {
      display: none;
      flex-direction: column;
      width: 100%;
      height: 225px;
      overflow: auto;
      box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.196);
      left: 0;
      border-radius: 10px;
      top: 85px;
      position: absolute;
      z-index: 5;
      background-color: white;

      &--active {
        display: flex;
      }

      &::-webkit-scrollbar {
        border-radius: 20px;
        width: 2px;
        overflow: hidden;
      }
      &::-webkit-scrollbar-track {
        border-radius: 20px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        border: 3px solid #006185;
      }
    }

    &__phone-item {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    &__phone-list-item {
      display: flex;
      padding: 10px;
      gap: 10px;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.055);
      }

      .job-text__phone-flag {
        pointer-events: none;
      }

      .job-text__phone-prefix {
        pointer-events: none;
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

  span.flag {
    min-width: 28px;
    height: 19px;
    display: inline-block;
    cursor: pointer;
  }
  img.flag {
    width: 30px;
  }
  .flag {
    background-image: url('/icons/flags_responsive.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .flag-ad {
    background-position: 0 0.413223%;
  }
  .flag-ae {
    background-position: 0 0.826446%;
  }
  .flag-af {
    background-position: 0 1.239669%;
  }
  .flag-ag {
    background-position: 0 1.652893%;
  }
  .flag-ai {
    background-position: 0 2.066116%;
  }
  .flag-al {
    background-position: 0 2.479339%;
  }
  .flag-am {
    background-position: 0 2.892562%;
  }
  .flag-an {
    background-position: 0 3.305785%;
  }
  .flag-ao {
    background-position: 0 3.719008%;
  }
  .flag-aq {
    background-position: 0 4.132231%;
  }
  .flag-ar {
    background-position: 0 4.545455%;
  }
  .flag-as {
    background-position: 0 4.958678%;
  }
  .flag-at {
    background-position: 0 5.371901%;
  }
  .flag-au {
    background-position: 0 5.785124%;
  }
  .flag-aw {
    background-position: 0 6.198347%;
  }
  .flag-az {
    background-position: 0 6.61157%;
  }
  .flag-ba {
    background-position: 0 7.024793%;
  }
  .flag-bb {
    background-position: 0 7.438017%;
  }
  .flag-bd {
    background-position: 0 7.85124%;
  }
  .flag-be {
    background-position: 0 8.264463%;
  }
  .flag-bf {
    background-position: 0 8.677686%;
  }
  .flag-bg {
    background-position: 0 9.090909%;
  }
  .flag-bh {
    background-position: 0 9.504132%;
  }
  .flag-bi {
    background-position: 0 9.917355%;
  }
  .flag-bj {
    background-position: 0 10.330579%;
  }
  .flag-bm {
    background-position: 0 10.743802%;
  }
  .flag-bn {
    background-position: 0 11.157025%;
  }
  .flag-bo {
    background-position: 0 11.570248%;
  }
  .flag-br {
    background-position: 0 11.983471%;
  }
  .flag-bs {
    background-position: 0 12.396694%;
  }
  .flag-bt {
    background-position: 0 12.809917%;
  }
  .flag-bv {
    background-position: 0 13.22314%;
  }
  .flag-bw {
    background-position: 0 13.636364%;
  }
  .flag-by {
    background-position: 0 14.049587%;
  }
  .flag-bz {
    background-position: 0 14.46281%;
  }
  .flag-ca {
    background-position: 0 14.876033%;
  }
  .flag-cc {
    background-position: 0 15.289256%;
  }
  .flag-cd {
    background-position: 0 15.702479%;
  }
  .flag-cf {
    background-position: 0 16.115702%;
  }
  .flag-cg {
    background-position: 0 16.528926%;
  }
  .flag-ch {
    background-position: 0 16.942149%;
  }
  .flag-ci {
    background-position: 0 17.355372%;
  }
  .flag-ck {
    background-position: 0 17.768595%;
  }
  .flag-cl {
    background-position: 0 18.181818%;
  }
  .flag-cm {
    background-position: 0 18.595041%;
  }
  .flag-cn {
    background-position: 0 19.008264%;
  }
  .flag-co {
    background-position: 0 19.421488%;
  }
  .flag-cr {
    background-position: 0 19.834711%;
  }
  .flag-cu {
    background-position: 0 20.247934%;
  }
  .flag-cv {
    background-position: 0 20.661157%;
  }
  .flag-cx {
    background-position: 0 21.07438%;
  }
  .flag-cy {
    background-position: 0 21.487603%;
  }
  .flag-cz {
    background-position: 0 21.900826%;
  }
  .flag-de {
    background-position: 0 22.31405%;
  }
  .flag-dj {
    background-position: 0 22.727273%;
  }
  .flag-dk {
    background-position: 0 23.140496%;
  }
  .flag-dm {
    background-position: 0 23.553719%;
  }
  .flag-do {
    background-position: 0 23.966942%;
  }
  .flag-dz {
    background-position: 0 24.380165%;
  }
  .flag-ec {
    background-position: 0 24.793388%;
  }
  .flag-ee {
    background-position: 0 25.206612%;
  }
  .flag-eg {
    background-position: 0 25.619835%;
  }
  .flag-eh {
    background-position: 0 26.033058%;
  }
  .flag-er {
    background-position: 0 26.446281%;
  }
  .flag-es {
    background-position: 0 26.859504%;
  }
  .flag-et {
    background-position: 0 27.272727%;
  }
  .flag-fi {
    background-position: 0 27.68595%;
  }
  .flag-fj {
    background-position: 0 28.099174%;
  }
  .flag-fk {
    background-position: 0 28.512397%;
  }
  .flag-fm {
    background-position: 0 28.92562%;
  }
  .flag-fo {
    background-position: 0 29.338843%;
  }
  .flag-fr {
    background-position: 0 29.752066%;
  }
  .flag-ga {
    background-position: 0 30.165289%;
  }
  .flag-gd {
    background-position: 0 30.578512%;
  }
  .flag-ge {
    background-position: 0 30.991736%;
  }
  .flag-gf {
    background-position: 0 31.404959%;
  }
  .flag-gh {
    background-position: 0 31.818182%;
  }
  .flag-gi {
    background-position: 0 32.231405%;
  }
  .flag-gl {
    background-position: 0 32.644628%;
  }
  .flag-gm {
    background-position: 0 33.057851%;
  }
  .flag-gn {
    background-position: 0 33.471074%;
  }
  .flag-gp {
    background-position: 0 33.884298%;
  }
  .flag-gq {
    background-position: 0 34.297521%;
  }
  .flag-gr {
    background-position: 0 34.710744%;
  }
  .flag-gs {
    background-position: 0 35.123967%;
  }
  .flag-gt {
    background-position: 0 35.53719%;
  }
  .flag-gu {
    background-position: 0 35.950413%;
  }
  .flag-gw {
    background-position: 0 36.363636%;
  }
  .flag-gy {
    background-position: 0 36.77686%;
  }
  .flag-hk {
    background-position: 0 37.190083%;
  }
  .flag-hm {
    background-position: 0 37.603306%;
  }
  .flag-hn {
    background-position: 0 38.016529%;
  }
  .flag-hr {
    background-position: 0 38.429752%;
  }
  .flag-ht {
    background-position: 0 38.842975%;
  }
  .flag-hu {
    background-position: 0 39.256198%;
  }
  .flag-id {
    background-position: 0 39.669421%;
  }
  .flag-ie {
    background-position: 0 40.082645%;
  }
  .flag-il {
    background-position: 0 40.495868%;
  }
  .flag-in {
    background-position: 0 40.909091%;
  }
  .flag-io {
    background-position: 0 41.322314%;
  }
  .flag-iq {
    background-position: 0 41.735537%;
  }
  .flag-ir {
    background-position: 0 42.14876%;
  }
  .flag-is {
    background-position: 0 42.561983%;
  }
  .flag-it {
    background-position: 0 42.975207%;
  }
  .flag-jm {
    background-position: 0 43.38843%;
  }
  .flag-jo {
    background-position: 0 43.801653%;
  }
  .flag-jp {
    background-position: 0 44.214876%;
  }
  .flag-ke {
    background-position: 0 44.628099%;
  }
  .flag-kg {
    background-position: 0 45.041322%;
  }
  .flag-kh {
    background-position: 0 45.454545%;
  }
  .flag-ki {
    background-position: 0 45.867769%;
  }
  .flag-km {
    background-position: 0 46.280992%;
  }
  .flag-kn {
    background-position: 0 46.694215%;
  }
  .flag-kp {
    background-position: 0 47.107438%;
  }
  .flag-kr {
    background-position: 0 47.520661%;
  }
  .flag-kw {
    background-position: 0 47.933884%;
  }
  .flag-ky {
    background-position: 0 48.347107%;
  }
  .flag-kz {
    background-position: 0 48.760331%;
  }
  .flag-la {
    background-position: 0 49.173554%;
  }
  .flag-lb {
    background-position: 0 49.586777%;
  }
  .flag-lc {
    background-position: 0 50%;
  }
  .flag-li {
    background-position: 0 50.413223%;
  }
  .flag-lk {
    background-position: 0 50.826446%;
  }
  .flag-lr {
    background-position: 0 51.239669%;
  }
  .flag-ls {
    background-position: 0 51.652893%;
  }
  .flag-lt {
    background-position: 0 52.066116%;
  }
  .flag-lu {
    background-position: 0 52.479339%;
  }
  .flag-lv {
    background-position: 0 52.892562%;
  }
  .flag-ly {
    background-position: 0 53.305785%;
  }
  .flag-ma {
    background-position: 0 53.719008%;
  }
  .flag-mc {
    background-position: 0 54.132231%;
  }
  .flag-md {
    background-position: 0 54.545455%;
  }
  .flag-me {
    background-position: 0 54.958678%;
  }
  .flag-mg {
    background-position: 0 55.371901%;
  }
  .flag-mh {
    background-position: 0 55.785124%;
  }
  .flag-mk {
    background-position: 0 56.198347%;
  }
  .flag-ml {
    background-position: 0 56.61157%;
  }
  .flag-mm {
    background-position: 0 57.024793%;
  }
  .flag-mn {
    background-position: 0 57.438017%;
  }
  .flag-mo {
    background-position: 0 57.85124%;
  }
  .flag-mp {
    background-position: 0 58.264463%;
  }
  .flag-mq {
    background-position: 0 58.677686%;
  }
  .flag-mr {
    background-position: 0 59.090909%;
  }
  .flag-ms {
    background-position: 0 59.504132%;
  }
  .flag-mt {
    background-position: 0 59.917355%;
  }
  .flag-mu {
    background-position: 0 60.330579%;
  }
  .flag-mv {
    background-position: 0 60.743802%;
  }
  .flag-mw {
    background-position: 0 61.157025%;
  }
  .flag-mx {
    background-position: 0 61.570248%;
  }
  .flag-my {
    background-position: 0 61.983471%;
  }
  .flag-mz {
    background-position: 0 62.396694%;
  }
  .flag-na {
    background-position: 0 62.809917%;
  }
  .flag-nc {
    background-position: 0 63.22314%;
  }
  .flag-ne {
    background-position: 0 63.636364%;
  }
  .flag-nf {
    background-position: 0 64.049587%;
  }
  .flag-ng {
    background-position: 0 64.46281%;
  }
  .flag-ni {
    background-position: 0 64.876033%;
  }
  .flag-nl {
    background-position: 0 65.289256%;
  }
  .flag-no {
    background-position: 0 65.702479%;
  }
  .flag-np {
    background-position: 0 66.115702%;
  }
  .flag-nr {
    background-position: 0 66.528926%;
  }
  .flag-nu {
    background-position: 0 66.942149%;
  }
  .flag-nz {
    background-position: 0 67.355372%;
  }
  .flag-om {
    background-position: 0 67.768595%;
  }
  .flag-pa {
    background-position: 0 68.181818%;
  }
  .flag-pe {
    background-position: 0 68.595041%;
  }
  .flag-pf {
    background-position: 0 69.008264%;
  }
  .flag-pg {
    background-position: 0 69.421488%;
  }
  .flag-ph {
    background-position: 0 69.834711%;
  }
  .flag-pk {
    background-position: 0 70.247934%;
  }
  .flag-pl {
    background-position: 0 70.661157%;
  }
  .flag-pm {
    background-position: 0 71.07438%;
  }
  .flag-pn {
    background-position: 0 71.487603%;
  }
  .flag-pr {
    background-position: 0 71.900826%;
  }
  .flag-pt {
    background-position: 0 72.31405%;
  }
  .flag-pw {
    background-position: 0 72.727273%;
  }
  .flag-py {
    background-position: 0 73.140496%;
  }
  .flag-qa {
    background-position: 0 73.553719%;
  }
  .flag-re {
    background-position: 0 73.966942%;
  }
  .flag-ro {
    background-position: 0 74.380165%;
  }
  .flag-rs {
    background-position: 0 74.793388%;
  }
  .flag-ru {
    background-position: 0 75.206612%;
  }
  .flag-rw {
    background-position: 0 75.619835%;
  }
  .flag-sa {
    background-position: 0 76.033058%;
  }
  .flag-sb {
    background-position: 0 76.446281%;
  }
  .flag-sc {
    background-position: 0 76.859504%;
  }
  .flag-sd {
    background-position: 0 77.272727%;
  }
  .flag-se {
    background-position: 0 77.68595%;
  }
  .flag-sg {
    background-position: 0 78.099174%;
  }
  .flag-sh {
    background-position: 0 78.512397%;
  }
  .flag-si {
    background-position: 0 78.92562%;
  }
  .flag-sj {
    background-position: 0 79.338843%;
  }
  .flag-sk {
    background-position: 0 79.752066%;
  }
  .flag-sl {
    background-position: 0 80.165289%;
  }
  .flag-sm {
    background-position: 0 80.578512%;
  }
  .flag-sn {
    background-position: 0 80.991736%;
  }
  .flag-so {
    background-position: 0 81.404959%;
  }
  .flag-sr {
    background-position: 0 81.818182%;
  }
  .flag-ss {
    background-position: 0 82.231405%;
  }
  .flag-st {
    background-position: 0 82.644628%;
  }
  .flag-sv {
    background-position: 0 83.057851%;
  }
  .flag-sy {
    background-position: 0 83.471074%;
  }
  .flag-sz {
    background-position: 0 83.884298%;
  }
  .flag-tc {
    background-position: 0 84.297521%;
  }
  .flag-td {
    background-position: 0 84.710744%;
  }
  .flag-tf {
    background-position: 0 85.123967%;
  }
  .flag-tg {
    background-position: 0 85.53719%;
  }
  .flag-th {
    background-position: 0 85.950413%;
  }
  .flag-tj {
    background-position: 0 86.363636%;
  }
  .flag-tk {
    background-position: 0 86.77686%;
  }
  .flag-tl {
    background-position: 0 87.190083%;
  }
  .flag-tm {
    background-position: 0 87.603306%;
  }
  .flag-tn {
    background-position: 0 88.016529%;
  }
  .flag-to {
    background-position: 0 88.429752%;
  }
  .flag-tp {
    background-position: 0 88.842975%;
  }
  .flag-tr {
    background-position: 0 89.256198%;
  }
  .flag-tt {
    background-position: 0 89.669421%;
  }
  .flag-tv {
    background-position: 0 90.082645%;
  }
  .flag-tw {
    background-position: 0 90.495868%;
  }
  .flag-ty {
    background-position: 0 90.909091%;
  }
  .flag-tz {
    background-position: 0 91.322314%;
  }
  .flag-ua {
    background-position: 0 91.735537%;
  }
  .flag-ug {
    background-position: 0 92.14876%;
  }
  .flag-gb,
  .flag-uk {
    background-position: 0 92.561983%;
  }
  .flag-um {
    background-position: 0 92.975207%;
  }
  .flag-us {
    background-position: 0 93.38843%;
  }
  .flag-uy {
    background-position: 0 93.801653%;
  }
  .flag-uz {
    background-position: 0 94.214876%;
  }
  .flag-va {
    background-position: 0 94.628099%;
  }
  .flag-vc {
    background-position: 0 95.041322%;
  }
  .flag-ve {
    background-position: 0 95.454545%;
  }
  .flag-vg {
    background-position: 0 95.867769%;
  }
  .flag-vi {
    background-position: 0 96.280992%;
  }
  .flag-vn {
    background-position: 0 96.694215%;
  }
  .flag-vu {
    background-position: 0 97.107438%;
  }
  .flag-wf {
    background-position: 0 97.520661%;
  }
  .flag-ws {
    background-position: 0 97.933884%;
  }
  .flag-ye {
    background-position: 0 98.347107%;
  }
  .flag-za {
    background-position: 0 98.760331%;
  }
  .flag-zm {
    background-position: 0 99.173554%;
  }
  .flag-zr {
    background-position: 0 99.586777%;
  }
  .flag-zw {
    background-position: 0 100%;
  }
</style>
