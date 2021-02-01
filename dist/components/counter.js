class Counter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
      <div class="counter__inner-container">
        <div class="counter-digits-container">
          <div class="counter-digits__number days">
            47
          </div> <div class="counter-digits__label">
            Days
          </div>
        </div>
        <div class="counter-digits-container">
          <div class="counter-digits__number hours">
            07
          </div> <div class="counter-digits__label">
            Hours
          </div>
        </div>
        <div class="counter-digits-container">
          <div class="counter-digits__number mins">
            56
          </div> <div class="counter-digits__label">
            Min
          </div>
        </div>
        <div class="counter-digits-container">
          <div class="counter-digits__number secs">
            14
          </div> <div class="counter-digits__label">
            Sec
          </div>
        </div>
      </div>
        `
    }
}

//register element so it can be called
customElements.define('counter-component', Counter);