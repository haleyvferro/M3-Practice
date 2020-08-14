function main(){
    fetchFoodItem()
}


function fetchFoodItem(){
    fetch('http://localhost:3000/foodItems/1')
    .then(resp => resp.json())
    .then(foodItem => {
        renderFoodItem(foodItem)
    })
}

function renderFoodItem(foodItem){
    const foodDetailsDiv = document.querySelector('.food-details')
    const foodItemHtml = `
    <h2>${foodItem.name}</h2>
        <img src="${foodItem.image_url}">

        <form class="description">
          <textarea class="description-field">${foodItem.description}</textarea>
          <button data-id="${foodItem.id}">Update Food Item description</button>
        </form>

        <h3>Leave a Review</h3>
        <form class="review-form">
          <textarea></textarea>
          <input type="submit" value="Submit">
        </form>

        <h3>Customer Reviews</h3>
        <ul class="reviews">
          
        </ul>
    `
    foodDetailsDiv.innerHTML += foodItemHtml

    const foodReviews = document.querySelector('.reviews')
    foodItem.reviews.forEach(review => {
        const foodReviewHtml = `<li>${review}</li>`
        foodReviews.innerHTML += foodReviewHtml
    })


    // grab the ul to put the lis in
    //grab reviews
    // iterate over rviews
    // each review gets an LI
    // put each li in ul
    updateDesctription()
    addReview(foodItem)
}

function addReview(foodItem){
    const foodReviewField = document.querySelector('.review-form')
    foodReviewField.addEventListener('submit', function(event){
        event.preventDefault()
        const review = event.target[0].value 
        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                reviews: [...foodItem.reviews, review]
            })
        }
        fetch(`http://localhost:3000/foodItems`, reqObj)
        .then(resp => resp.json())
        .then(newReview => {
            const foodReviewField = document.querySelector('.reviews')
            const reviewsArray = newReview.reviews
            foodReviewField.innerHTML += `<li>${reviewsArray.pop()}</li>`
            foodReviewField.reset()
            // technically this passes the challenge, but doesn't save the review when we refresh?
    })
    })
}

function updateDesctription(){
    const foodDescription = document.querySelector('.description')
    foodDescription.addEventListener('submit', function(event){
        // event.preventDefault()
        const description = {
        description: event.target[0].value
    }
    const reqObj = {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(description)
    }


    fetch(`http://localhost:3000/foodItems/1`, reqObj)
    .then(resp => resp.json())
    .then(foodDescription => {
        const foodDescriptionField = document.querySelector('.description-field')
        foodDescriptionField.innerText = foodDescription
    })
    })

    //X  grab existing description
    //X add event listener to 'submit'
    //X prevent default
    //X scrape the data from the form
    //X send a patch request to the backend
    //show that new description on the front end
}

main()