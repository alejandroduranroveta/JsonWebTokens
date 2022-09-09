
const verifyUser = ( req,res,next)=> {

    if(req.body.email != undefined && req.body.password != undefined){
        next();
    }else{
        return res.status(401).json('debe ingresar correctamente');
    }
}
module.exports = verifyUser