// middleware == control de acceso

const isAdmin = (req,res,next)=>{
    if(req.body.isAdmin){
        next();
    }
    else{
        res.status(401).send({error:'no tienes acceso'});
    }
}

module.exports = isAdmin;