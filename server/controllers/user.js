const User     = require("./../models/user");
const Feedback = require("./../models/feedback");
const bcryptjs = require("bcryptjs");
const jwt      = require("jsonwebtoken");


<<<<<<< HEAD
function createToken(user, SECRET_KEY, expiresIn){
    const {id, username, firstname, lastname, email, host} = user;
=======
const createToken = (user, SECRET_KEY, expiresIn) => {
    const {id, firstname, lastname, email} = user;
>>>>>>> server
    const payload = {
        id,
        host,
        username,
        firstname,
        lastname,
        email,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

async function register( input ) {
    const newUser = input;
    // format inputs 
    newUser.email = newUser.email.toLowerCase();
    newUser.username = newUser.username.toLowerCase();

    const { email, password, username } = newUser;

<<<<<<< HEAD
    // Revisamos que el email no este en uso
    const foundEmail = await User.findOne({ email });
    if(foundEmail) throw new Error('Email already exists');
    
    const foundUsername = await User.findOne({ username })
    if(foundUsername) throw new Error('Username already exists');
=======
    // We check that the email is not in use
    const foundEmail = await User.findOne({ email });
    
    if(foundEmail)
        throw new Error('L\'email est en cours d\'utilisation');
>>>>>>> server

    // Encrypting the password
    const salt = await bcryptjs.genSaltSync(10);
    newUser.password = await bcryptjs.hash(password, salt);

<<<<<<< HEAD
    // Guardar el user en la DB
=======
    //TODO: create UserStripe 

    //TODO: keep UserStripe in User

    // Save the user in the database
>>>>>>> server
    try {
        const user = new User(newUser);
        user.save();
        return user;
    } catch (error) {
<<<<<<< HEAD
        throw new Error('Cannot create user!')
=======
        throw new Error('L\'utilisateur ne peut pas être créé');
>>>>>>> server
    }
}

async function login( input ){

    const { email, password } = input;

    // Verify that the email exists
    const userFound = await User.findOne({email: email.toLowerCase()})
<<<<<<< HEAD
    if(!userFound) throw new Error("Email or password invalid");
=======
    if(!userFound) throw new Error("Erreur, email ou mot de passe invalide");
>>>>>>> server

    // Check that the password exists
    const passwordSuccess = await bcryptjs.compare(password, userFound.password);
<<<<<<< HEAD
    if(!passwordSuccess) throw new Error("Email or password invalid");
=======
    if(!passwordSuccess) throw new Error("Erreur, email ou mot de passe invalide");
>>>>>>> server

    // Retornar el token js
    
    return {
        token: createToken(userFound, process.env.SECRET_KEY, "24h")
    };
}

async function editUser (id) {
    const user = await User.findByIdAndUpdate(id);
    return user;
}

async function deleteUser (id) {
    const user = await User.findByIdAndDelete(id);
    return user;
}

async function getUser (id) {
    const user = await User.findById(id);
    return user;
}

async function getUsers () {
    const users = await User.find();
    return users;
}

async function getFeedbacks (userId) {
    const feedbacks = await Feedback.find({ userId }).populate("idPerson");
    return feedbacks;
}

module.exports = {
    register,
    login,
    editUser,
    deleteUser,
    getUser,
    getUsers,
    getFeedbacks
};