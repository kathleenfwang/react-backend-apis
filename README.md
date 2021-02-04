# Backend APIs for 15 React Projects 
MERN backend code for 15 React Projects (Node.js, Express.js, MongoDB).   
Moved the database originally hosted from mLab to MongoDB Atlas. 
* [Plants API](http://plant-app-1.herokuapp.com/plants) 
* [Recipes API](http://plant-app-1.herokuapp.com/recipes)
* [Users API](http://plant-app-1.herokuapp.com/users)
* [Streamers API](http://plant-app-1.herokuapp.com/streamers)

## Example Request:

`GET /plants/5e6150ee2e932200049a46a6`

Example Response:
```
{
"_id": "5e6150ee2e932200049a46a6",
"name": "Aloe Vera",
"description": "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.",
"image": "https://s7d1.scene7.com/is/image/terrain/53770426_000_a?$zoom2$",
"__v": 0,
"createdAt": "2020-03-05T19:20:14.997Z",
"updatedAt": "2020-12-01T02:01:42.046Z"
}
``` 
## To use: 
- connect to the database API URL (example: `http://plant-app-1.herokuapp.com/plants`) in [Postman](https://www.postman.com/) to use post/edit/delete functions 
  - `GET`: returns all entries 
  - `POST`: add to the database by supplying the entry parameters in the body 
  - `PUT /:id` : edit a specific entry by supplying the entry ID in the route and add the new entry parameters in the body  
  - `DELETE /:id` - delete a specific entry by supplying the ID in the route 
  
## Features: 
- **User authentication** to login/signup using [Bcrypt](https://www.npmjs.com/package/bcryptjs) to hash passwords securely. Passwords cannot be reverse engineered to find original 
- Models, routes, and controllers for three different Mongoose schemas (Plants, Recipes, Users) 
- CRUD (create, read, update, destroy) functionality for all routes (`GET, POST, PUT, DELETE`) 
- Streamers API uses `findOne()` and `findOneAndDelete()` to add/delete based on the given streamer ID, not the database ID, to maximize efficiency by passing in the given streamer ID without having to fetch the database ID 

## Uses: 
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose 
- Heroku 
- BodyParser 
- Morgan 
- Bcrypt (Bcrypt and Bcrypt.js) 

