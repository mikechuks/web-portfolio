const bcrypt = require('bcrypt');
const User = require('../../models/FirstSecHome');


// exports.login = async (req, res) => {
//     const userCompany = new User({
//         username:req.body.username,
//         password:req.body.email
//     });


//     try{
//         const savedUser = await userCompany.save();
//         res.status(200).json(savedUser);
//     }catch(err){
//         // res.status(500).json(err)
//         console.log(err)
//     }

//   };

  exports.register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const userCompany = new User({
            username: req.body.username,
            password: hashedPassword
        });

        const savedUser = await userCompany.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};