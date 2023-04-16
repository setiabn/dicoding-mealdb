import './style/style.css';
import './components/header-bar';
import './components/recipe-detail';
import './components/card';

import axios from 'axios';

// ============== Result bar ======================================================
const resultBar = document.getElementById('result-bar');
const recipeDetail = document.getElementById('recipe-detail');

const renderResult = (meals) => {
  resultBar.innerHTML = '';
  if (meals) {
    meals.forEach((meal) => {
      const card = document.createElement('card-recipe');
      card.meal = meal;
      card.addEventListener('click', () => {
        recipeDetail.meal = meal;
        recipeDetail.style.display = 'block';
      });
      resultBar.appendChild(card);
    });
  } else {
    resultBar.innerHTML = '<h1>No result</h1>';
  }
};

// ============== Search bar ======================================================
const searchBar = document.getElementById('form-search');
const formInput = document.getElementById('form-input');

const searchMeals = async (query = '') => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
  );
  return response.data.meals;
};

searchBar.addEventListener('submit', (event) => {
  event.preventDefault();

  searchMeals(formInput.value).then((meals) => {
    renderResult(meals);
  });
  event.target.reset();
});

// fill initial data
searchMeals().then((meals) => renderResult(meals));
