class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = /* html */ `

    <style>
      :host{
        display: flex;
        flex-direction: column;
      }

      q{
        font-size: 22px;
        text-align: center;
        margin: 20px auto;
        max-width: 80%;
      }

      div{
        text-align: right;
        font-weight: bold;
        font-size: 16px;
        margin: 0 20px;
      }
    </style>
    
    
    <q class="quotes">
        Ask not what you can do for your country. Ask what's for <i><b>lunch.</b></i>
    </q>
    <div class="author">-Orson Welles</div>
    `;
  }
}

customElements.define('header-bar', HeaderBar);
