const Host = require('../models/host');

async function register( input, ctx ) {

    // create Host
    try {
        // Verify user
        let user = await User.findById(ctx.user.id)
        if(!user) throw new Error("Invalid user!");

        const host = new Host();
        host.save();

        // set host id
        user.host = host.id
        console.log(host)

        // user.save()

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