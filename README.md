Welcome to my Node.js Express MongoDB RESTful API learning project repository!

This project is a part of my journey to improve my skills in building RESTful APIs using Node.js, Express, and MongoDB. The primary purposes of this API project are:

Self-Improvement: Building and maintaining this RESTful API is a learning experience for me. It allows me to enhance my knowledge and skills in back-end development.

Web Application Development: I plan to use this API as the backend for a web application, likely built with React or other frontend technologies. It serves as the foundation for future web development projects.

Future Use: By developing and documenting this RESTful API, I create a reusable resource for future projects. It can save time and effort when I need to implement similar functionality in other applications.

Feel free to explore the API, contribute to its development, or use it as a reference for your own projects. Your feedback and contributions are highly appreciated.

Disclaimer
This REST API is primarily developed for learning purposes. It may not adhere to all industry best practices, and there could be areas that need improvement. If you intend to use it I strongly recommend it to be only for educational purposes.

Usage
User Endpoints
User Login
Endpoint: /api/user/login
HTTP Method: POST
Request Example:
POST /api/user/login
Content-Type: application/json

{
  "_id": "64fa06e4989b5026f8bce1d8",
  "email": "test@test.bg",
  "token": "token"
}
Endpoint: /api/user/register
HTTP Method: POST
Request Example:
POST /api/user/register
Content-Type: application/json
{
"_id": "64fa06e4989b5026f8bce1d8",
"email": "test@test.bg",
"token": "token"
}
User Profile Creation
Endpoint: /api/user/profile
HTTP Method: POST
Request Example:
POST /api/user/register
Content-Type: application/json
Authorization: token
{
  "userId": "64fa06e4989b5026f8bce1d8",
  "username": "test",
  "avatarImg": "test",
  "category": "test",
  "about": "about",
  "goals": [],
  "_id": "64f5b8ea66c6d563829cdc6f",
  "createdAt": "2023-09-04T11:00:58.307Z",
  "updatedAt": "2023-09-04T11:00:58.307Z",
  "__v": 0
}
Get User Profile
Endpoint: /api/user/profile/:userId
HTTP Method: GET
Response Example:
{
 "username": "test",
 "avatarImg": "test",
 "category": "test",
 "about": "about",
 "goals": []
}
Update User Profile
Endpoint: /api/user/profile/:userId
HTTP Method: PUT
Request Example:
POST /api/user/register
Content-Type: application/json
Authorization: token
{
 "title": "Updated Goal Title",
 "description": "Updated Goal Description"
}

Authorization
JSON Web Tokens (JWT)
This API uses JSON Web Tokens (JWT) for user authentication and authorization. Here's how it works:

When a user registers or logs in successfully, they receive a JWT token.
This token should be included in the Authorization header of their subsequent requests to protected routes.
The API uses a middleware to verify and decode the JWT token to determine the user's identity and authorization level.
Middleware for Authorization
To ensure that certain routes are accessible only to authenticated users, this API employs a middleware called authorization. Here's how it works:

Token Extraction: When a user makes a request to a protected route, the client should include the JWT token in the Authorization header of the request.

Token Verification: The authorization middleware intercepts the request and extracts the token from the Authorization header.

Token Decoding: It then verifies the token's validity using the verifyToken function, which checks if the token is valid and not expired.

User Identification: If the token is valid, the middleware decodes it to extract user information, such as the user's ID and email. This information is attached to the request object (req.user) for further processing in the route handler.

Access Granted: If the token is valid and the user is authenticated, the middleware allows the request to proceed to the route handler. The route can then access the user's information from req.user and perform actions based on the user's identity.

Access Denied: If the token is invalid, expired, or missing, the middleware throws an error, indicating that the user is not authorized to access the protected route.

Remember to include the JWT token in the Authorization header of your requests to protected routes to ensure successful authentication and access.

Installation
Follow these steps to set up and run the Node.js Express MongoDB RESTful API on your local machine:

Requirements
Before you begin, ensure you have the following software and tools installed:

Node.js: Ensure you have Node.js installed. You can download it from the official website.
MongoDB: MongoDB is the database used by this API. Download and install the MongoDB Community Edition on your machine.
Clone the Repository
Clone this repository to your local machine using your preferred method (HTTPS or SSH)

Navigate to the project's root directory

Install Dependencies
Install the project dependencies using npm

Create a .env file based and use this example:

NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/RestApi
JWT_SECRET=dsadsad1221dasd

Start the Server
The server will start, and you'll see a message indicating that it's running, typically on port 5000 (http://localhost:3030).

Test
Now that the API is running locally with MongoDB and your environment variables configured, you can use tools like Postman to make requests to the API endpoints. Refer to the "Usage" section of this README for details on available endpoints and their expected responses.

License
This project is licensed under the MIT License.