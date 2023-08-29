<script>
  import { onMount } from 'svelte'

  let curSelect, active

  onMount(() => {
    curSelect.addEventListener('click', () => {
      active = !active
    })
  })
</script>

<section class="modal">
  <form action="#" class="modal__wrapper">
    <span class="modal__cross" />
    <h2 class="modal__title">Let’s discuss your project</h2>
    <div class="modal__items">
      <div class="modal__input-wrapper">
        <label for="industry" class="modal__label">Industry</label>
        <div name="industry" class="modal__input" bind:this={curSelect}>
          <span class="modal__input-value">Select your industry</span>
          <span class="modal__input-icon" />
        </div>
        <div class={active ? 'modal__input-list modal__input-list--active' : 'modal__input-list'}>
          <span class="modal__input-list-item">E-commerce</span>
          <span class="modal__input-list-item">Web-development</span>
          <span class="modal__input-list-item">UI,UX design</span>
          <span class="modal__input-list-item">E-commerce</span>
          <span class="modal__input-list-item">UI,UX design</span>
          <span class="modal__input-list-item">E-commerce</span>
        </div>
      </div>
      <div class="modal__input-wrapper">
        <label for="name" class="modal__label">Name</label>
        <input type="text" name="name" class="modal__input" />
      </div>
      <div class="modal__input-wrapper">
        <label for="phone" class="modal__label">Phone</label>
        <input type="text" name="phone" class="modal__input" />
      </div>
      <div class="modal__input-wrapper">
        <label for="email" class="modal__label">Corporate Email</label>
        <input type="email" name="email" class="modal__input" />
      </div>
      <div class="modal__input-wrapper">
        <label for="requirements" class="modal__label">Project requirements</label>
        <textarea name="requirements" id="requirements" rows="10" class="modal__input" />
      </div>
      <div class="modal__file-input">
        <img src="../icons/Paper.svg" alt="" lass="modal__file-icon" />
        <div class="modal__file-text-wrapper">
          <span>DROP YOUR CV HERE, OR BROWSE</span>
          <span>Supports: DOC, DOCX, PDF, max size 5 Mb</span>
        </div>
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
      This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
    </span>
  </form>
  <span class="modal__background" />
</section>

<style lang="scss">
  @import '../styles/base/mixins.scss';

  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 12;

    &__cross {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      display: flex;
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
      overflow-y: auto;
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

      @include media-breakpoint-down(md) {
        gap: 20px;
      }

      @include media-breakpoint-up(md) {
        gap: 30px;
      }
    }

    &__label {
      margin-bottom: 5px;
      font-size: 16px;
      line-height: 24px;
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
      padding: 15px 25px;

      &:first-of-type {
        border-top: 1px solid rgb(186, 186, 186);
      }

      &:not(&:last-of-type) {
        border-bottom: 1px solid rgb(186, 186, 186);
      }
    }

    &__input-value {
      background: white;
      position: relative;
      z-index: 10;
    }

    &__file-input {
      padding-top: 40px;
      padding-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed #006185;

      @include media-breakpoint-down(md) {
        padding-left: 20px;
        padding-right: 20px;
      }

      grid-column-start: 1;
      grid-column-end: 3;
    }

    &__file-text-wrapper {
      display: flex;
      flex-direction: column;

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
      margin-bottom: 30px;

      @include media-breakpoint-down(sm) {
        align-items: flex-start;
      }

      @include media-breakpoint-up(sm) {
        align-items: center;
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
      margin-bottom: 30px;
    }
  }
</style>
