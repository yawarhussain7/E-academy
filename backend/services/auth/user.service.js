import User from "../../model/auth_model/authUser.model.js";
import bcrypt from 'bcrypt'
import generate_token from '../../utils/generate_token.js'

const signUp = async ({name,email,password}) => {
    try {
        const exist_user = await User.findOne({ email })
        if (exist_user) {
            throw new Error('User already exist')
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        
        const token = generate_token(user._id,user._email)

        return {
            _id:user.id,
            name:user.name,
            email:user.email,
            token:token
        };

    } catch (error) {
        console.error('User serivce error occured: ' + error.message)
        throw error
    }
}

const signIn = async ({email,password})=>{
    try{

        const user = await User.findOne({email})
        const isPassword_Match = await bcrypt.compare(password,user.password)
        if(!isPassword_Match){
            throw new Error('Invalid password Or email')
        }
        return {
            _id:user.id,
            name:user.name,
            email:user.email,
            token
        }
    }catch(error){
        console.error('Loggin Error: '+error.message)
        throw error
    }
}

export {
    signUp,
    signIn
}