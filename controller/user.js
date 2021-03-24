const User = require('../Model/user');
const mongoose = require('mongoose');



module.exports = {


    // create user controller
    createUser: async (request, response) => {
        try {
            // check if user exist

            User.findOne({ email: request.body.email }).then(user => {
                if (user) {
                    response.status(400).json({ msg: "User exists" })

                }
            }
            )

            // Create new user instance
            const result = await User.create(request.body);

            await result.save();

            response.status(201).json(result)

        } catch (error) {
            response.status(500).json({ msg: error.message });
        }
    }
}
