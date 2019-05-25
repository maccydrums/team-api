**API Exercise**
----
* **All you need to set up this on your computer should be below**

* **URL**

* **Error Response:**

  * **Code:** default  
    **Content:**




* **CURL**
 ```
// we use curl in our terminal to be able to send requests. 
Exampel: curl -X GET "localhost:3000/users" 
 ```


  * **Brew for mac**
 ```
"So, Homebrew is a package manager for OS X that allows a user to easily install software from the larger body of UNIX and open source software on the Mac" 
source:
https://www.quora.com/What-is-Homebrew-for-OS-X


Paste that in a macOS Terminal: 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
 ```


 * **JQ**
 ```
 //We use jq in our request to make it more readable. 
 Install jq by typing this in your terminal: brew install jq
 Now we can do requests that looks nicer
 Exampel: curl -X GET "localhost:3000/users"  | jq
 ```


* **Express**
 ```
 // ????  Is a HTTP-server we use 

 Setting it up from scratch
Paste that in your Terminal: 
npm init
npm install --save express

add the "start": "node index.js",in package json under scripts for convenience

Create and add the contents to ìndex.js file

npm start
press ctrl-c to break execution.


Instructions
npm install
npm start

when you do a request you will see that it is powered by Express. 

try it by typing this in your terminal. 

curl -i localhost:YourPortGoesHERE

should get this:

HTTP/1.1 200 OK
X-Powered-By: Express
 ```


 * **Mongoose**
 ```
 //Mongoose is an NPM lib used to communicate with a mongodb database.

This example can add a user and will respond with the user added

Setting it up from scratch
Paste that in your Terminal: 
npm install --save mongoose

????   Instructions  
npm install
npm start
 ```


* **Methods:**
  `GET` | `POST` | `DELETE` | `PUT` | `PATCH`
  

*  **URL Params**
   /users/{userId}  
   /posts/{postId}


* **Sample Call Users:**
```
curl localhost:3000/users | jq
curl localhost:3000/users/{_id} | jq
```


* **GET** -users
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


* **POST** -users
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


* **PATCH** -users
```
// In this example you should change the _id ( "localhost:3000/users/ThisIsWhereYouChange_id" ) and what ever you want to change in the object, this will ONLY overwrite what you want to  change, but you will receive the object you sent and when you do a new get you will see the updated version.
Example: You could use PATCH method to update title. 

curl -X PATCH "localhost:3000/users/5ce809cdc2b01d0317a13e0c" -H "accept: application/json" -H "Content-Type: application/json" -d '{"user":{"email":"kalle@gmail.com", "userName":"KalleAnka"}, "name":{"firstName":"Kalle", "lastName":"Anka"}}' | jq

 {
    "user": {
      "name": {
        "firstName": "Charlie",
        "lastName": "Carham"
      },
      "email": "kalle@gmail.com",
      "userName": "KalleAnka"
    },
    "_id": "5ce809cdc2b01d0317a13e0c",
    "__v": 0
  }
```

* **PUT** -users
```
// In this example you should change the _id ( "localhost:3000/users/ThisIsWhereYouChange_id" ) and what ever you want to CHANGE in the object, this will overwrite the WHOLE object if the object does not exist it will create a new object with unique _id that you send with it

curl -X PUT "localhost:3000/users/5ce821fce0a6fe04c0ef18bb" -H "accept: application/json" -H "Content-Type: application/json" -d '{ "post": { "title":"Best exempel", "body": "Here comes a perfect text"}, "author": { "firstName": "YOU DID IT AGAIN",  "lastName":" Now You should know it" }}'  | jq

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


* **DELETE** -users
```
//  In this example you should change the _id ( "localhost:3000/users/ThisIsWhereYouChange_id" ) and this request will DELETE the post with that unique _id

curl -X DELETE "localhost:3000/users/5ce809cdc2b01d0317a13e0c" -H "accept: application/json" | jq

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

curl -X DELETE "localhost:3000/users/5ce80a02c2b01d0317a13e0d" -H "accept: application/json" -i

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 151
ETag: W/"97-EkBzpAaounB/HiYjjJ8HaTFWz5w"
Date: Fri, 24 May 2019 18:04:04 GMT
Connection: keep-alive

{"user":{"name":{"firstName":"Charlie","lastName":"Carham"},"email":"kalle@gmail.com","userName":"KalleAnka"},"_id":"5ce809cdc2b01d0317a13e0c","__v":0}%
```


* **Sample Call Posts:**
```
curl localhost:3000/posts | jq
curl localhost:3000/posts/{_id} | jq
```


* **GET** -posts
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


* **POST** -posts
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


* **PATCH** -posts
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


* **PUT** -posts
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


* **DELETE** -posts
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


* **Routing:** 
```
Should we explaine this in more detail? just copy pasted this/Michele

Listens to HTTP get on / and returns what you have specified in the router-set-up.

This solution shows how to receive parameter data by showing query or path parameters as well as received headers

There are three kinds of parameters in HTTP. 

Path parameter
A path parameter is supplied on the path itself by adding a colon (:) on the path.

router.get("/:pathParameter", helloWorld.params)
the value of this parameter is available as req.params.pathParameter

Query parameter
Query parameters are supplied at the end of the path

localhost:3000/someparam?name=value
the value of this parameter is available as req.query.name

Header parameter
Header parameters are supplied in the request header as key: value

localhost:3000/someparam -H "key: value"
the value of this parameter is avaulable as req.header.key
```


  * **Methods and Return Codes**

  * **GET** -methods
```
  Exampel: 

  curl -X GET "localhost:3000/methods" -i -s

  HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
custom-response-header: yep
Content-Type: text/html; charset=utf-8
Content-Length: 55
ETag: W/"37-FMexziSDJRl0DK7vYVWavjogAQg"
Date: Sat, 25 May 2019 07:06:36 GMT
Connection: keep-alive

You sent a GET request and got a custom response header%
```


  * **POST** -methods
```
  Exampel: 

  curl -X POST "localhost:3000/methods" -i -s

HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 84
ETag: W/"54-B4RA+fvUKWrqYQGvH0iUAOY+qUM"
Date: Sat, 25 May 2019 07:09:01 GMT
Connection: keep-alive

You sent a POST, I will respond with a status of 201 (created) even though I did not%
```

  * **PUT** -methods
```
  Exampel: 

  curl -X PUT "localhost:3000/methods" -i -s

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 14
ETag: W/"e-6XNIWqfL1LQQ9w1i3Wjy2MWweYQ"
Date: Sat, 25 May 2019 07:09:51 GMT
Connection: keep-alive

You sent a PUT%
```
  * **PATCH** -methods
```
  Exampel: 

  curl -X PATCH "localhost:3000/methods" -i -s

HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 16
ETag: W/"10-nX0RfNJ/n1Mf1M8j4CP/opHdyTc"
Date: Sat, 25 May 2019 07:10:38 GMT
Connection: keep-alive

You sent a Patch%
```


  * **Delete** -methods
```
  A no content response literally has no content even if you try to send it. 

  Exampel: 

  curl -X DELETE "localhost:3000/methods" -i -s

HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: *
ETag: W/"11-yp0gotY8srpDtZiKnzBnAbuFms8"
Date: Sat, 25 May 2019 07:12:02 GMT
Connection: keep-alive
```
  
