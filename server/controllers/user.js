const User = require("./../models/user");
const Parking = require("./../models/parking");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


function createToken(user, SECRET_KEY, expiresIn){
    const {id, username, firstname, lastname, email, host} = user;
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

// Mutation

async function register( input ) {
    const newUser = input;
    // format inputs 
    newUser.email = newUser.email.toLowerCase();
    newUser.username = newUser.username.toLowerCase();

    const { email, password, username } = newUser;

    // Revisamos que el email no este en uso
    const foundEmail = await User.findOne({ email });
    if(foundEmail) throw new Error('Email already exists');
    
    const foundUsername = await User.findOne({ username })
    if(foundUsername) throw new Error('Username already exists');

    // Encriptar password
    const salt = await bcryptjs.genSaltSync(10);
    newUser.password = await bcryptjs.hash(password, salt);

    // Guardar el user en la DB
    try {
        const user = new User(newUser);
        user.save();
        return user;
    } catch (error) {
        throw new Error('Cannot create user!')
    }
}

async function login( input ){

    const { email, password } = input;

    // Verificar que el email existe
    const userFound = await User.findOne({email: email.toLowerCase()})
    if(!userFound) throw new Error("Email or password invalid");

    // Verificar que en password es correcto
    const passwordSuccess = await bcryptjs.compare(password, userFound.password);
    if(!passwordSuccess) throw new Error("Email or password invalid");

    // Retornar el token js
    
    return {
        token: createToken(userFound, process.env.SECRET_KEY, "24h")
    };

}

async function addIntoWishlist(idParking, ctx){

    const {id} = ctx.user

    const parking = await Parking.findById(idParking)
    if(!parking) throw new Error('Parking not finded')

    try {

        let user = await User.findOne({_id: id})
        if(user.wishlist.indexOf(idParking) > -1) throw new Error('Paking ya esta en la lista')
        user.wishlist.push(parking._id)
        user.save()
        return 'Saved correctly'

    } catch (error) {
        throw new Error('Cannot save this parking')
    }
}



// Queries

async function getWishlist(ctx){
    const {id} = ctx.user
    try {
        const user = await User.findById(id).populate('wishlist')
        return user.wishlist
    } catch (error) {
        console.log(error.message)
    }
}

function getUser(){
    return null;
}

module.exports = {
    register,
    getUser,
    login,
    getWishlist,
    addIntoWishlist
}