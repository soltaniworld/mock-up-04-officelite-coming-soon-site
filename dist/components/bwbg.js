// black white background 

class bwbackground extends HTMLElement {
  constructor() {
      super();
  }
  connectedCallback() {
      this.innerHTML = `
      <div class="bg-container">
        <div class="bg bg--light"></div>
        <div class="bg bg--dark"></div>
      </div>
      
      `
  }
}

//register element so it can be called
customElements.define('bwbg-component', bwbackground);