class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set onSubmit(onSubmit) {
    this._onsubmit = onSubmit;
  }

  render() {
    const { strMeal, strMealThumb } = this._meal;

    this.shadowDOM.innerHTML = `
    
    <style>
      :host{
        width: 100%;
        max-width: 480px;
        padding: 20px;
        cursor: pointer;
        transition: all 0.3s;
      }

      :host>:hover {
        border-radius: 10px;
        box-shadow: 2px 2px 5px gray;
      }
      
      img {
          width: 100%;
          border-radius: 5px;
      }
      
      h1 {
          text-align: center;
          padding-bottom: 20px
      }
    </style>

    <div class="meal-card">
      <img src="${strMealThumb}" alt="${this._meal.strMeal}">
      <h1>${strMeal}</h1>
    </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
