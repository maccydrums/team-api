dotify = require('node-dotify');

get = (req, res, next) => {
    console.log(req.query.userName);
    
    var query;
    if (req.query.userName) {
        query = req.models.User.findOne({ "user.userName": req.query.userName });
    }
    else {
        query = req.models.User.find()
    }

    query.exec().then((user) => {
        return res.send(user);
    }).catch((error) => next(error));
};

post = (req, res, next) => {
    req.models.User.create({
        user: {
            userName: req.body.user.userName,
            email: req.body.user.email,
            name: {
                firstName: req.body.name.firstName,
                lastName: req.body.name.lastName
            }
        }
    }).then((user) => {
        return res.status(201).send(user);
    }).catch((error) => {
        next(error);
    });
};

getById = (req, res, next) => {
    req.models.User.findById(req.params.id).then((user) => {
        return res.send(user);
    }).catch((error) => next(error));
};

deleteById = (req, res, next) => {
    req.models.User.findOneAndDelete(req.params.id).then((deleted) => {
        if (deleted)
            return res.send(deleted).status(200);
        res.sendStatus(204);
    }).catch((error) => next(error));
};

put = (req, res, next) => {
    req.models.User.updateOne({ _id: req.params.id },
        {
            user: {
                email: req.body.user.email,
                userName: req.body.user.userName,
                name: {
                    firstName: req.body.name.firstName,
                    lastName: req.body.name.lastName
                }
            },
        }, {
            new: true,
            upsert: true,
            runvalidators: true,

        }).then((status) => {
            console.log("status: ", status)
            if (status.upserted)
                res.status(201)
            else if (status.nModified)
                res.status(200)
            else
                res.status(204)
            res.send()
        }).catch((error) => next(error))
}

patch = (req, res, next) => {
    req.models.User.findByIdAndUpdate(req.params.id,
        {
            $set: dotify(req.body)
        },
        {
            returnNewDocument: true,
        }).then((user) => {
            console.log(user)
            res.send(user)
        }).catch((error) => next(error))
}

module.exports = {
    get,
    post,
    getById,
    deleteById,
    put,
    patch

}