import jwt from 'jsonwebtoken'


export const protected_route = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        res.status(400).send({
            message:'Token not found...',
            success:false
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        req.user = decoded;
        next();
        
    }catch(error){
        req.status(401).send({
            message:'Unauthorize access...',
            success:false
        })
    }
}