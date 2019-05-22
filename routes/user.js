get = (req, res, next) => {
    req.models.User.find().then((users) => {
        return res.send(users);
    }).catch((error) => {
        next(error)
    })
}

post = (req, res, next) => {
    req.models.User.create({
        user: {
            email: req.body.user.email,
            userName: req.body.user.userName,
            name: {
                firstName: req.body.name.firstName,
                lastName: req.body.name.lastName
            }
        }
    }).then((user) => {
        return res.status(201).send(user);
    }).catch((error) => {
        next(error);
    })
}

// put = (req, res, next) => {
//     res.send(req.params)
//     // req.models.User.create({
//     //     user: {
//     //         email: req.body.user.email,
//     //         userName: req.body.user.userName,
//     //         name: {
//     //             firstName: req.body.name.firstName,
//     //             lastName: req.body.name.lastName
//     //         }
//     //     }
//     // }).then((user) => {
//     //     return res.status(201).send(user);
//     // }).catch((error) => {
//     //     next(error);
//     // })
// }

module.exports = {
    get: get,
    post: post,
    // put:put,
}

