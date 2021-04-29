const Host = require('../models/host');
const User = require('../models/user');

async function register( input, ctx ) {

    // Verify user
    const { id } = ctx.user
    let user = await User.findOne({_id: id})
    if(!user) throw new Error("Invalid user!");
    // Verify user host 
    if(user.host) throw new Error("User is a host!");

    // create Host
    try {
        // Create host
        const host = new Host();
        host.save();
        // Update user host
        await User.findByIdAndUpdate(id, { host: host._id });
        console.log(user)
        user.save();
        return host;

    } catch (error) {
        throw new Error('No se pudo crear el parking')
    }
   
}

async function getAll(){
    
    return null;

}

module.exports = {
    register,
    getAll,
}