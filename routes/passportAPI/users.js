//const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');

const router = express.Router();
const auth = require('../auth');
//const Users = mongoose.model('Users');
const Users = require('../../models/user');

//POST new user route (optional, everyone has access)
router.get('/test-route', function (req, res) {
    res.json('ROUTE WORKS!')
})


//POST login route (optional, everyone has access)
router.post('/signup', auth.optional, (req, res, next) => {
    const user = req.body
    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            }
        });
    }

    let finalUser = new Users(user);
    finalUser = finalUser.setPassword(user.password)

    finalUser.save().then(userWithPW => {

        res.json({ user: finalUser.toAuthJSON() })
    })

});

// router.post('/signup', auth.optional, async (req, res, next) => {
//     console.log("user info is", req.body);
//     try {
//         const newUser = new Users(req.body);
//         newUser.save().then(res => {
//             console.log("user has been saved");
//             return;
//         })
//     } catch (err) {
//         console.log("err is", err)
//     }

//     res.sendStatus(200);

// })

//POST login route (optional, everyone has access)

router.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;

    if (!user.email) {
        return res.status(422).json({
            errors: {
                email: 'is required',
            },
        });
    }

    if (!user.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if (err) {
            return next(err);
        }

        if (passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({ user: user.toAuthJSON() });
        }
        return status(400).info;
    })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', auth.required, (req, res, next) => {
    const { payload: { id } } = req;

    return Users.findById(id)
        .then((user) => {
            if (!user) {

                return res.sendStatus(400);
            }

            return res.json({ user: user.toAuthJSON() });
        });
});

module.exports = router;
