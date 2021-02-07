const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () =>{
    const inputMeal = document.getElementById('meal-name').value;
    getInput();
    const url  = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayFood(data.meals))
})
const getInput = () =>{
    
    let foodContainer = document.getElementById('food-container');
    const foodDiv = document.getElementById('food-detail');
    foodDiv.innerText ="";
    foodContainer.innerText = "";
};
const displayFood = food =>{
    const parentNode = document.getElementById('food-container');
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
const showDetail = foodId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => mealDetails(data.meals[0]));

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

    /*console.log(foodDetail.strIngredient1);
    for (let i = 1; i <21; i++) {
        const element = foodDetail.strIngredient + [i];
        console.log(element);
        
    }
    
    
    
    
    
    
    
    for (let i = 0; i < food.length; i++) {
        const foodItem = food[i];
        console.log(foodItem);
        const div = document.createElement('div');
        div.className = 'food';
        const foodInfo = `
        <div>
        <img src=${foodItem.strMealThumb}>
        </div>
        <div>
        <h1 style="text-align:center;">${foodItem.strMeal} </h1>
        </div>
        `;
        div.innerHTML = foodInfo;
        parentNode.appendChild(div);
    }*/
