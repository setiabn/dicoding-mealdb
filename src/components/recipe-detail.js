/* eslint-disable indent */
class RecipeDetail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set meal(value) {
    this.m_meal = value;
    this.render();
  }

  render() {
    const { strMeal, strMealThumb, strInstructions } = this.m_meal;
    const instructions = strInstructions.replace(/[\n\r]+/, '\n\n');

    const ingredients = [];

    for (let index = 1; index <= 20; index += 1) {
      const ingredient = this.m_meal[`strIngredient${index}`];
      const measure = this.m_meal[`strMeasure${index}`];

      if (ingredient && measure) {
        ingredients.push(`${ingredient}: ${measure}`);
      }
    }

    this.shadowDOM.innerHTML = /* html */ `
      <style>

        :host{
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.636);

          display: flex;
          align-items: center;
          justify-content: center;


          overflow-y: scroll;
        }

        .modal-container {
          position: fixed;
          width: 90%;
          height: 90%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 800px;
          background-color: white;
          margin: auto auto;
          padding: 20px;
          box-shadow: 1px 1px 5px gray;
          overflow-y: scroll;

        }

        .modal-header{
          display: flex;
          gap: 20px;
          height: 250px;
          justify-content: center;
        }

        .meal-picture {
          width: 200px;  
          height: 200px;
          margin: 10px auto;
          fit-content: cover;          
        }

        .right-header{
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .meal-name{
          padding: 0 15px;
          font-size: 32px;
          font-weight: bold;
        }

        .meal-ingredients {
          display: grid;
          flex: 1;
          column-gap: 20px;
          grid-template-columns: auto;
          overflow-y: scroll;
          height: 100%;

        }
        li{
          font-size: 14px;
          line-break: anywhere;
        }


        .instruction{
          white-space: pre-line;
        }

        .modal-close {
          position: absolute;
          right: 30px;
          top: 5px;
          border: none;
          cursor: pointer;
          padding: 12px;
          background-color: black;
          font-size: 42px;
          color: white;
          z-index: 10;
        }

      </style>

        ${
          // eslint-disable-next-line operator-linebreak
          this.m_meal &&
          `<div class="modal-container">
          <div class="modal-header">
            <img src=${strMealThumb} alt="" class="meal-picture"/>
            <div class="right-header">
              <div class="meal-name">${strMeal}</div>
              <ul class="meal-ingredients">
                ${ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join('\n')}
              </ul>
            </div>
          </div>
          <p class="instruction">${instructions}</p>
        </div>`
        }
      `;

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('modal-close');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', () => {
      this.style.display = 'none';
    });
    this.shadowDOM.appendChild(closeBtn);
  }
}

customElements.define('recipe-detail', RecipeDetail);
