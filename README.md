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
    

* **Sample Call:**

```
curl localhost:3000/posts | jq
curl localhost:3000/posts/{_id}
-
curl localhost:3000/users | jq
curl localhost:3000/users/{_id} | jq

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
```
```
curl -X POST "localhost:3000/users" -H "accept: application/json" -H "Content-Type: application/json" -d '{"user":{"email":"michelebyman@gmail.com", "userName":"Miche"}, "name":{"firstName":"Marcus", "lastName":"Andersson"}}' | jq

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
