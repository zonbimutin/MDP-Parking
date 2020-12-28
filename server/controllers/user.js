const User = require("./../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


function createToken(user, SECRET_KEY, expiresIn){
    const {id, username, email} = user;
    const payload = {
        id,
        username,
        email,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}


async function register( input ) {
    const newUser = input;
    // format inputs 
    newUser.email = newUser.email.toLowerCase();
    newUser.username = newUser.username.toLowerCase();

    const { email, username, password } = newUser;

    // Revisamos que el email no este en uso

    const foundEmail = await User.findOne({ email });
    if(foundEmail) throw new Error('El email esta en uso');

    const foundUsername = await User.findOne({ username });
    if(foundUsername) throw new Error('El username esta en uso');

    // Encriptar password
    const salt = await bcryptjs.genSaltSync(10);
    newUser.password = await bcryptjs.hash(password, salt);

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

    // Returnar el token js

    //const token = createToken(userFound, process.env.SECRET_KEY, "24h");
    
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