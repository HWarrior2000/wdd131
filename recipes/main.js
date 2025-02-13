function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('\n');
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
		// else output an empty star
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
}

function recipeTemplate (recipe) {
    return `<section class="recipe">
                <img src="${recipe.image}" alt="">
                <div class="info">
                    <ul class="recipe-tags">
                        ${tagsTemplate(recipe.tags)}
                    </ul>
                    <h2><a href="#">${recipe.name}</a></h2>
                    ${ratingTemplate(recipe.rating)}
                    <p class="recipe-description">${recipe.description}</p>
                </div>
            </section>`
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const outputElement = document.querySelector('#content');

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const listOfRecipes = recipeList.map(recipeTemplate)
    
	// Set the HTML strings as the innerHTML of our output element.
    outputElement.insertAdjacentHTML("beforeend", listOfRecipes);
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
  }

function filterRecipes(query) {
    function searchRecipes(recipe) {
        return recipe.name.toLowerCase().includes(query) || 
        recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query)) || 
        recipe.description.toLowerCase().includes(query) || 
        recipe.tags.find(tag => tag.toLowerCase().includes(query)); 
    }
    return recipes.filter(searchRecipes);
}

function sortNames(a,b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
   // a must be equal to b
   return 0;
  }

init();

document.querySelector("#search-bar").addEventListener("submit", function(event) {
    event.preventDefault();
    let searchQuery = event.target.search.value.toLowerCase();
    //clear the search bar
    event.target.search.value = "";
    // reset the content area after searching
    document.querySelector("#content").innerHTML = "";

    // render the filtered sorted list of recipies
    // console.log(filterRecipes(searchQuery).sort(sortNames));
    renderRecipes(filterRecipes(searchQuery).sort(sortNames));
});

