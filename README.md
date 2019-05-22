# team-api

//request
curl -X POST "localhost:3000/users" -H "accept: application/json" -H "Content-Type: application/json" -d '{"user":{"email":"michelebyman@gmail.com", "userName":"Miche"}, "name":{"firstName":"Michele", "lastName":"Byman"}}' 

//response
{
  "user": {
    "name": {
      "firstName": "Michele",
      "lastName": "Byman"
    },
    "email": "michelebyman@gmail.com",
    "userName": "Miche"
  },
  "_id": "5ce5441867ba502f2ac36942",
  "__v": 0
}
//request:

curl -X POST "localhost:3000/posts" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "post": { "title":"hello", "body": "hello"}, "author": { "firstName": "hello", "lastName":"Kleleleeevdvdv" }}'

// response:
{
  "post": {
    "title": "hello",
    "body": "hello"
  },
  "author": {
    "firstName": "hello",
    "lastName": "Kleleleeevdvdv"
  }
}
