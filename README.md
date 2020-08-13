# Resturant

Today you'll be building an app for viewing and editing food item. You will be using a local API and building out the frontend for our app, Resturant.


## Setup

- Fork and clone this repository
- Run `json-server --watch db.json` to get the backend started
- Open `index.html` in your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/foodItems/[:id]` (start with /foodItems/1)
- PATCH `/foodItems/[:id]`
- GET `/foodItems` (for Advanced Deliverables only)

## Core Deliverables

As a user, I can:

- See the FIRST foodItems's details, including its **name, image, description, and reviews**, when the page loads
- Change the beer's description and **still see that change when reloading the page**
- Add a review for the beer (no persistence needed)

## Advanced Deliverables

These deliverables are not required to pass the code challenge.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

- Still see the review after refreshing the page
- Delete a review
- See a menu of all foodItems on the left side of the page - clicking a foodItem's name replaces the currently displayed foodItem's details with the details of the foodItem I clicked on (it's OK if the update foodItem description and add review buttons still persist data to the first beer instead of the selected foodItem)
