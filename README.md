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
```
curl -X POST "localhost:3000/posts" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "post": { "title":"Best exempel", "body": "Here comes a perfect text"}, "author": { "firstName": "Michele", "lastName":"Byman" }}' | jq

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
