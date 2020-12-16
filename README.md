# Backend APIs for 15 React Projects 
MERN backend code for 15 React Projects (Node.js, Express.js, MongoDB).   
Moved the database originally hosted from mLab to MongoDB Atlas. 
* [Streamers API](http://plant-app-1.herokuapp.com/streamers)
* [Plants API](http://plant-app-1.herokuapp.com/plants) 
* [Recipes API](http://plant-app-1.herokuapp.com/recipes)
* [Users API](http://plant-app-1.herokuapp.com/users)

## Features: 
- **User authentication** to login/signup using [Bcrypt](https://www.npmjs.com/package/bcryptjs) to hash passwords securely. Passwords cannot be reverse engineered to find original 
- Models, routes, and controllers for three different Mongoose schemas (Plants, Recipes, Users) 
- CRUD (create, read, update, destroy) functionality for all routes (`GET, POST, PUT, DELETE`) 
- Streamers API uses `findOne()` and `findOneAndDelete()` to add/delete based on the given streamer ID, not the database ID, to maximize efficiency by passing in the given streamer ID without having to fetch the database ID 

## To use: 
- connect to the database API URL (example: `http://plant-app-1.herokuapp.com/plants`) in [Postman](https://www.postman.com/)
  - `GET`: returns all entries 
  - `POST`: add to the database by supplying the entry parameters in the body 
  - `PUT /:id` : edit a specific entry by supplying the entry ID in the route and add the new entry parameters in the body  
  - `DELETE /:id` - delete a specific entry by supplying the ID in the route 

## Uses: 
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose 
- Heroku 
- BodyParser 
- Morgan 
- Bcrypt (Bcrypt and Bcrypt.js) 

