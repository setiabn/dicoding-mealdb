class CardRecipe extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    // this.shadowDOM.classList.add("card");
  }

  set meal(meal) {
    this.m_meal = meal;
    this.render();
  }

  render() {
    const meal = this.m_meal;
    this.shadowDOM.innerHTML = /* html */ `
      <style>
        :host {
          width: 100%;
          background-color: white;
          border-radius: 5px;
          margin: 10px 20px;
          box-sizing: border-box;
          cursor: pointer;
        }

        img {
          width: 100%;

          object-fit: cover;
        }

        h1 {
          font-size: 20px;
          padding: 5px 15px 15px 15px;
        }

      </style>
      <img src=${meal.strMealThumb} alt=${meal.strMeal}>
      <h1>${meal.strMeal}</h1>
      `;
  }
}

customElements.define('card-recipe', CardRecipe);
