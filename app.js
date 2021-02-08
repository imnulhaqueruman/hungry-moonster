const searchBtn =  () =>{
    const inputMeal = document.getElementById('meal-name').value;
    const url  = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
    .catch(error => desiplayError('Something went wrong!! Please try agian Later !'))

}

const displayFood = food =>{
    const parentNode = document.getElementById('food-container');
    parentNode.innerHTML = '';
    // ingredient hide for every search 
    const foodDiv = document.getElementById('food-detail');
    foodDiv.innerText ="";

    food.forEach(foodItem => { 
        const div = document.createElement('div');
        div.className = 'food';
        const foodInfo = `
        <div>
        <img onclick="showDetail('${foodItem.idMeal}')" src=${foodItem.strMealThumb}>      
        </div>
        <div>
        <h1 style="text-align:center; font-size:20px;">${foodItem.strMeal} </h1>     
        </div>       
        `;
        div.innerHTML = foodInfo;
        parentNode.appendChild(div);
        
    });
   
}
const showDetail =  foodId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mealDetails(data.meals[0]))
    .catch(error => desiplayError('Something went wrong !! Please try again later'))
    

}
const mealDetails = meal =>{
    const foodDiv = document.getElementById('food-detail');
    foodDiv.innerHTML =  `
    <div>    
    <img src=${meal.strMealThumb}>
    <h1> ${meal.strMeal}</h1>
    <h3>Ingredient</h3>
    <li>${meal.strIngredient1}</li>
    <li>${meal.strIngredient2}</li>
    <li>${meal.strIngredient3}</li>
    <li>${meal.strIngredient4}</li>
    <li>${meal.strIngredient5}</li>
    <li>${meal.strIngredient7}</li>
    <li>${meal.strIngredient8}</li>
   
    </div>      
    `  
}

const desiplayError = error =>{
    const errorText = document.getElementById('error-messeage');
    errorText.innerText = error;
}

    
