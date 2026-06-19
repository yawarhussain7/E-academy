import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const secret_key = process.env.SECRET_KEY

if(!secret_key){
    throw new Error('Secret key not found')
}

const generate_token=(id,email)=>{
    return jwt.sign({id,email},secret_key,{expiresIn:'1d'})
}

export default generate_token