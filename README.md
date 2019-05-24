**API Exercise**
----

* **URL**

* **Method:**

  `GET` | `POST` | `DELETE` | `PUT` | `PATCH`
  
*  **URL Params**

   /users/{userId}  
   /posts/{postId}

* **Data Params**

 ```
  user: {
            email: req.body.user.email,
            userName: req.body.user.userName,
            name: {
                firstName: req.body.name.firstName,
                lastName: req.body.name.lastName
            }
        }
 ```
 ```
  post: {
          title: req.body.post.title,
          body: req.body.post.body,
          author: {
              firstName: req.body.author.firstName,
              lastName: req.body.author.lastName
          }
      }
 ```

* **Success Response:**

  POST /posts
  * **Code:** 200
  ```
    {
    "post": {
      "author": {
        "firstName": "noob",
        "lastName": "noob"
      },
      "title": "löksdöf",
      "body": "noob"
    },
    "_id": "5ce6691a76edfe368ccab64a",
    "__v": 0
  }
  ```
  GET /users
  * **Code:** 200
  ```
  {
    "user": {
      "name": {
        "firstName": "Marcus",
        "lastName": "Andersson"
      },
      "email": "sdfsdfs",
      "userName": "sfsdfsd"
    },
    "_id": "5ce666ac5abb6d361587d536",
    "__v": 0
  }
  
  
* **Error Response:**

  * **Code:** default  
    **Content:**
    

* **Sample Call Users:**

```
-
curl localhost:3000/users | jq
curl localhost:3000/users/{_id} | jq
```
* **GET**
```
curl -X GET "localhost:3000/users" | jq

 {
    "user": {
      "name": {
        "firstName": "Michele",
        "lastName": "Byman"
      },
      "email": "michelebyman@gmail.com",
      "userName": "Miche"
    },
    "_id": "5ce646a0162aa905197ab93b",
    "__v": 0
  },
```

* **POST**
```
curl -X POST "localhost:3000/users" -H "accept: application/json" -H "Content-Type: application/json" -d '{"user":{"email":"carham@hotmail.com", "userName":"CarlieCarham"}, "name":{"firstName":"Charlie", "lastName":"Carham"}}' | jq

{
"user": {
    "name": {
      "firstName": "Marcus",
      "lastName": "Andersson"
    },
    "email": "michelebyman@gmail.com",
    "userName": "Miche"
  },
  "_id": "5ce66dfb038f2b37a9c0fe8d",
  "__v": 0
}
```







* **Sample Call Posts:**

```
-
curl localhost:3000/posts | jq
curl localhost:3000/posts/{_id} | jq
```
* **GET**
```
// In this example you you will get all posts that are made to the posts-path

curl -X GET "localhost:3000/posts" | jq
  {
    "post": {
      "author": {
        "firstName": "Firstname",
        "lastName": "Lastname"
      },
      "title": "Title",
      "body": "Body"
    },
    "_id": "5ce64749162aa905197ab93c",
    "__v": 0
  },
```
* **POST**
```
// In this example you you will post (create) a new post to the posts-path ??? rewrite -> (if user hits same requests 2 times it would create another new resource if there is no constraint.)
Example: Use POST method to save new user, it will get a unique _id.

curl -X POST "localhost:3000/posts" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "post": { "title":"Best example", "body": "Here comes a perfect text"}, "author": { "firstName": "Michele", "lastName":"Byman" }}' | jq

{
  "post": {
    "author": {
      "firstName": "Michele",
      "lastName": "Byman"
    },
    "title": "Best exempel",
    "body": "Here comes a perfect text"
  },
  "_id": "5ce80c43c2b01d0317a13e0f",
  "__v": 0
}

```
* **PATCH**
```
// In this example you should change the _id ( "localhost:3000/posts/ThisIsWhereYouChange_id" ) and what ever you want to change in the object, this will ONLY overwrite what you want to  change, but you will receive the object you sent and when you do a new get you will see the updated version.
Example: You could use PATCH method to update title. 

curl -X PATCH "localhost:3000/posts/5ce821fce0a6fe04c0ef18bb" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "post": { "title":"This is the next best example", "body": "Here comes another perfect text watch and you will find the difference"}, "author": { "firstName": "YOU DID IT", "lastName":"You know it" }}'  | jq

{
  "post": {
    "author": {
      "firstName": "Michele",
      "lastName": "Byman"
    },
    "title": "Best exempel",
    "body": "Here comes a perfect text"
  },
  "_id": "5ce8138ee0a6fe04c0ef18b9",
  "__v": 0
}
```
* **PUT**
```
// In this example you should change the _id ( "localhost:3000/posts/ThisIsWhereYouChange_id" ) and what ever you want to CHANGE in the object, this will overwrite the WHOLE object if the object does not exist it will create a new object with unique _id that you send with it

curl -X PUT "localhost:3000/posts/5ce821fce0a6fe04c0ef18bb" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "post": { "title":"Best exempel", "body": "Here comes a perfect text"}, "author": { "firstName": "YOU DID IT AGAIN",  "lastName":" Now You should know it" }}'  | jq

    "post": {
      "author": {
        "firstName": "YOU DID IT AGAIN",
        "lastName": " Now You should know it"
      },
      "title": "Best exempel",
      "body": "Here comes a perfect text"
    },
    "_id": "5ce821fce0a6fe04c0ef18bb",
    "__v": 0
  }

```
* **DELETE**
```
//  In this example you should change the _id ( "localhost:3000/posts/ThisIsWhereYouChange_id" ) and this request will DELETE the post with that unique _id

curl -X DELETE "localhost:3000/posts/5ce64753162aa905197ab93d" -H "accept: application/json" | jq

{
  "post": {
    "author": {
      "firstName": "Firstname",
      "lastName": "Lastname"
    },
    "title": "Title",
    "body": "Body"
  },
  "_id": "5ce64753162aa905197ab93d",
  "__v": 0
}

// here we use -i to get info about the request, this is something that you can do instead of | jq 

curl -X DELETE "localhost:3000/posts/5ce80c43c2b01d0317a13e0f" -H "accept: application/json" -i

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 161
ETag: W/"a1-iqPUnNfI8h0ystHFeMO/bi/9Mu4"
Date: Fri, 24 May 2019 15:42:21 GMT
Connection: keep-alive

{"post":{"author":{"firstName":"Michele","lastName":"Byman"},"title":"Best exempel","body":"Here comes a perfect text"},"_id":"5ce80c43c2b01d0317a13e0f","__v":0}%
```