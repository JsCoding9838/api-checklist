const loadSigleUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}
// loadSigleUser();



const displaySingleUser = (user) => {
    console.log(user);
}
// meal db
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
    document.getElementById('meals').style.display = displayStyle;
}


const searchMeal = () => {
    const searchText = document.getElementById('search').value;
    
    // display spinner
    toggleSpinner('block');
    toggleSearchResult('none');
    loadMeals(searchText);
    document.getElementById('search').value = '';
}


const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}


const displayMeals = (meals) => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if(!meals){
        
        document.getElementById('rongInputError').style.display = 'block';
    }
    else {
        document.getElementById('rongInputError').style.display = 'none';
    }
    meals?.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <h4>${meal.idMeal}</h4>
            <p>${meal.strArea ? meal.strArea : 'strArea None'}</p>
            <p>${meal.strInstructions.slice(0, 50)}</p>
            <button onclick="loadMealDetail('${meal.strMeal}')">Click me</button>
        `;
        container.appendChild(div);
    });
    // display spinner
    toggleSpinner('none');
    toggleSearchResult('block');
}

const loadMealDetail = mealName => {
    console.log(mealName);
}