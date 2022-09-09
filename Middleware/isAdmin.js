const jwt = require('jsonwebtoken');

const isAdmin = ( req,res,next)=> {
    try{
        const token = req.headers.token;
        const {role} = jwt.verify(token, process.env.JWT_PRIVATE);
    
        if(role == "ADMIN"){
            console.log("Pasaste");
            next();
        }else{
            res.status(400).json({error: "No eres admin"})
        }
    }catch(err){
        console.log(err);
        return res.status(401).json({
           ok: false,
           msg: "Token invalido"
        })
    }
   
    
}

module.exports = isAdmin;