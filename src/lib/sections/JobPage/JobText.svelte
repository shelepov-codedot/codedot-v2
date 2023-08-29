<script></script>

<section class="job-text">
  <div class="container">
    <div class="job-text__wrapper">
      <div class="job-text__text-wrapper">
        <div class="job-text__item">
          <span class="job-text__name">Your responsibilities</span>
          <ul class="job-text__list">
            <li>
              — Developing web applications with <b>TypeScript</b> in <b>Node.js</b> mostly using
              <b>Nest.js</b>, and <b>React</b>, <b>NextJS </b>on frontend
            </li>
            <li>
              — Creating apps for clients from various industries based mainly in Western and
              Northern Europe and the States
            </li>
            <li>— Working at a company proud of its <b>mature coding culture</b></li>
            <li>— Focusing on clean, readable code</li>
            <li>
              — Practicing Continuous Integration, Continuous Delivery, proper Scrum and regular
              Code Review
            </li>
            <li>— Utilizing the best architectural patterns like DDD, Event Sourcing, CQRS</li>
            <li>— Producing as a limited amount of documentation as possible</li>
            <li>
              — Being part of crucial project decisions: designing architecture, choosing frameworks
              and tools
            </li>
          </ul>
          <p />
        </div>
        <div class="job-text__item">
          <span class="job-text__name">Required Skills</span>
          <ul class="job-text__list">
            <li>
              — Developing web applications with <b>TypeScript</b> in <b>Node.js</b> mostly using
              <b>Nest.js</b>, and <b>React</b>, <b>NextJS </b>on frontend
            </li>
            <li>
              — Creating apps for clients from various industries based mainly in Western and
              Northern Europe and the States
            </li>
            <li>— Working at a company proud of its <b>mature coding culture</b></li>
            <li>— Focusing on clean, readable code</li>
            <li>
              — Practicing Continuous Integration, Continuous Delivery, proper Scrum and regular
              Code Review
            </li>
            <li>— Utilizing the best architectural patterns like DDD, Event Sourcing, CQRS</li>
            <li>— Producing as a limited amount of documentation as possible</li>
            <li>
              — Being part of crucial project decisions: designing architecture, choosing frameworks
              and tools
            </li>
          </ul>
          <p />
        </div>
        <div class="job-text__item">
          <span class="job-text__name">Will be a bonus</span>
          <ul class="job-text__list">
            <li>
              — Developing web applications with <b>TypeScript</b> in <b>Node.js</b> mostly using
              <b>Nest.js</b>, and <b>React</b>, <b>NextJS </b>on frontend
            </li>
            <li>
              — Creating apps for clients from various industries based mainly in Western and
              Northern Europe and the States
            </li>
            <li>— Working at a company proud of its <b>mature coding culture</b></li>
            <li>— Focusing on clean, readable code</li>
            <li>
              — Practicing Continuous Integration, Continuous Delivery, proper Scrum and regular
              Code Review
            </li>
            <li>— Utilizing the best architectural patterns like DDD, Event Sourcing, CQRS</li>
            <li>— Producing as a limited amount of documentation as possible</li>
            <li>
              — Being part of crucial project decisions: designing architecture, choosing frameworks
              and tools
            </li>
          </ul>
          <p />
        </div>
        <div class="job-text__item">
          <span class="job-text__name">What we offer</span>
          <ul class="job-text__list">
            <li>
              — Developing web applications with <b>TypeScript</b> in <b>Node.js</b> mostly using
              <b>Nest.js</b>, and <b>React</b>, <b>NextJS </b>on frontend
            </li>
            <li>
              — Creating apps for clients from various industries based mainly in Western and
              Northern Europe and the States
            </li>
            <li>— Working at a company proud of its <b>mature coding culture</b></li>
            <li>— Focusing on clean, readable code</li>
            <li>
              — Practicing Continuous Integration, Continuous Delivery, proper Scrum and regular
              Code Review
            </li>
            <li>— Utilizing the best architectural patterns like DDD, Event Sourcing, CQRS</li>
            <li>— Producing as a limited amount of documentation as possible</li>
            <li>
              — Being part of crucial project decisions: designing architecture, choosing frameworks
              and tools
            </li>
          </ul>
          <p />
        </div>
      </div>
      <form class="job-text__form">
        <span class="job-text__job-name">Senior Fullstack Developer</span>
        <div class="job-text__inputs">
          <div class="job-text__input-wrapper">
            <label for="name" class="job-text__input-name">Name</label>
            <input type="job-text__input" name="name" class="job-text__input" />
          </div>
          <div class="job-text__input-wrapper">
            <label for="last-name" class="job-text__input-name">Last name</label>
            <input type="job-text__input" name="last-name" class="job-text__input" />
          </div>
          <div class="job-text__input-wrapper">
            <label for="email" class="job-text__input-name">Email</label>
            <input type="email" name="email" class="job-text__input" />
          </div>
          <div class="job-text__input-wrapper">
            <label for="phone" class="job-text__input-name">Phone number</label>
            <input type="job-text__input" name="phone" class="job-text__input" />
          </div>
          <div class="job-text__input-wrapper job-text__input-wrapper--textarea">
            <label for="comments" class="job-text__input-name">Comments</label>
            <textarea name="comments" id="comments" rows="9" class="job-text__input" />
          </div>
          <div class="job-text__file-input">
            <img src="../icons/Paper.svg" alt="" lass="job-text__file-icon" />
            <div class="job-text__file-text-wrapper">
              <span>DROP YOUR CV HERE, OR BROWSE</span>
              <span>Supports: DOC, DOCX, PDF, max size 5 Mb</span>
            </div>
          </div>
          <button type="submit" class="btn btn--fullwidth">Apply</button>
        </div>
      </form>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../../styles/base/mixins.scss';

  .job-text {
    padding: 250px 0;
    &__wrapper {
      position: relative;
      display: grid;
      gap: 40px;

      @include media-breakpoint-up(lg) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__item {
      &:not(&:last-of-type) {
        margin-bottom: 40px;
      }
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
      font-size: 18px;

      &:not(&:last-of-type) {
        margin-bottom: 10px;
      }
    }

    &__form {
      display: flex;
      flex-direction: column;
      background-color: #b3dfef4d;
      border-radius: 40px;
      height: fit-content;
      @include media-breakpoint-down(md) {
        padding: 20px;
      }

      @include media-breakpoint-up(md) {
        padding: 40px;
      }
    }

    &__job-name {
      font-weight: 600;
      text-align: center;
      margin-bottom: 40px;

      @include media-breakpoint-down(md) {
        font-size: 24px;
      }

      @include media-breakpoint-up(md) {
        font-size: 36px;
      }
    }

    &__inputs {
      display: grid;
      gap: 20px;

      @include media-breakpoint-up(md) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__input-wrapper {
      display: flex;
      flex-direction: column;
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
      @include media-breakpoint-up(md) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    &__input {
      display: flex;
      border-radius: 40px;
      background-color: white;
      border: 0;
      resize: none;
      outline: 0;

      @include media-breakpoint-down(md) {
        padding: 15px 15px;
      }

      @include media-breakpoint-up(md) {
        padding: 15px 25px;
      }
    }

    &__input-name {
      position: relative;
      font-size: 16px;
      color: #212121;
      width: max-content;
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

      @include media-breakpoint-up(md) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
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
  }

  .btn {
    @include media-breakpoint-up(md) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
</style>
