import User from "../../model/auth_model/authUser.model.js";
import bcrypt from 'bcrypt'
import generate_token from '../../utils/generate_token.js'

const signUp = async ({name,email,password,role}) => {
    try {
        const exist_user = await User.findOne({ email })
        if (exist_user) {
            throw new Error('User already exist')
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            name,
            email,
            role,
            password: hashedPassword
        })

        
        const token = generate_token(user._id,user.email)
        
        return {
            _id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:token
        };

    } catch (error) {
        console.error('User serivce error occured: ' + error.message)
        throw error
    }
}

const signIn = async ({email,password,role})=>{
    try{

        const user = await User.findOne({email})
        if (!user) {
            throw new Error('Invalid email or password')
        }
        const isPassword_Match = await bcrypt.compare(password,user.password)
        if(!isPassword_Match){
            throw new Error('Invalid email or password')
        }
        const token = generate_token(user._id,user.email)
        return {
            _id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
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