get = (req, res, next) => {
  req.models.Post.find().then((posts) => {
      return res.send(posts);
  }).catch((error) => {
      next(error)
  })
}

post = (req, res, next) => {
  console.log(req.body);
  req.models.Post.create({
      post: {
          title: req.body.post.title,
          body: req.body.post.body,
          author: {
              firstName: req.body.author.firstName,
              lastName: req.body.author.lastName
          }
      }
  }).then((post) => {
      return res.status(201).send(post);
  }).catch((error) => {
      next(error);
  })
}

/*
'{
  "post": {
    "title": "hello",
    "body": "hello"
  },
  "author": {
      "firstName": "hello"
    }
}'
*/

// put = (req, res, next) => {
//   res.send(req.params)
//   // req.models.User.create({
//   //     user: {
//   //         email: req.body.user.email,
//   //         userName: req.body.user.userName,
//   //         name: {
//   //             firstName: req.body.name.firstName,
//   //             lastName: req.body.name.lastName
//   //         }
//   //     }
//   // }).then((user) => {
//   //     return res.status(201).send(user);
//   // }).catch((error) => {
//   //     next(error);
//   // })
// }

module.exports = {
  get: get,
  post: post,
}

