const User     = require("./../models/user");
const Feedback = require("./../models/feedback");
const bcryptjs = require("bcryptjs");
const jwt      = require("jsonwebtoken");


function createToken(user, SECRET_KEY, expiresIn){
    const {id, firstname, lastname, email} = user;
    const payload = {
        id,
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

    const { email, password } = newUser;

    // Revisamos que el email no este en uso

    const foundEmail = await User.findOne({ email });
    if(foundEmail) throw new Error('El email esta en uso');

    // Encriptar password
    const salt = await bcryptjs.genSaltSync(10);
    newUser.password = await bcryptjs.hash(password, salt);

    //TODO: crear UserStripe 

    //TODO: guardar UserStripe en User

    // Guardar el user en la DB
    try {
        const user = new User(newUser);
        user.save();
        return user;
    } catch (error) {
        throw new Error('No se pudo crear el usuario')
    }
}

async function login( input ){

    const { email, password } = input;

    // Verificar que el email existe
    const userFound = await User.findOne({email: email.toLowerCase()})
    if(!userFound) throw new Error("Email o contraseña no validos");

    // Verificar que en password es correcto
    const passwordSuccess = await bcryptjs.compare(password, userFound.password);
    if(!passwordSuccess) throw new Error("Email o contraseña no validos");

    // Retornar el token js
    
    return {
        token: createToken(userFound, process.env.SECRET_KEY, "24h")
    };
}

/*async function getFeedback(req, res, next) {
    const { feedback } = req.params;
    const user = await User.find(feedback);
    res.status(200).json(user);
}

function getUser(){
    return null;
}*/

module.exports = {
    register,
    getUser,
    login,
    getFeedback,
}

exports.createUser = (req, res, next) => {
    delete req.body._id;
    const review = new Review({
        ...req.body
    });

    User.save()
        .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.editUser = (req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
        .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then(()     => res.status(200).json({ message: 'Objet suprimé' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user   => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

exports.getUsers = (req, res, next) => {
    User.find()
        .then(users  => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
};

exports.getFeedbacks = (req, res, next) => {
    Feedback.find()
        .then(feedbacks => res.status(200).json(feedbacks))
        .catch(error    => res.status(400).json({ error }));
};