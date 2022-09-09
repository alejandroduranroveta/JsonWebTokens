const fs = require( 'fs');
const generateJWT = require('../helpers/generateJWT');

const login = async (req, res) => { 
   let email = req.body.email
   let password = req.body.password

   try {
      const dbUsers = fs.readFileSync("/Users/marioalejandroduran/Desktop/BootCamp/ejercio JWT/db/users.json", 'utf-8');
      const users = JSON.parse(dbUsers);

      const user = users.find(user => user.email == email && user.password == password);
      
      if (!user) {
         return res.status(400).json({
            ok: false,
            msg: "Este email no existe"
         })
      }else{
         let aux = {
            id:user.id ,
            name: user.name,
            age: user.age,
            email: user.email,
            role: user.role
         }
         const token = await generateJWT(aux);
         res.json({
            ok: true,
            msg: 'Usuario logueado',
            token
         })
      } 

      
   }catch(error){
      console.log(error);
      res.status(500).json({
         ok: false,
         msg: 'Login'
      })
   }
}
module.exports = {
   login
}