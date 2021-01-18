const User = require("./../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


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

function getUser(){
    return null;
}

module.exports = {
    register,
    getUser,
    login,
}