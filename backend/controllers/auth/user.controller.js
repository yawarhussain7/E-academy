import { signUp, signIn } from '../../services/auth/user.service.js'

export const signUpUser = async (req,res) => {
    try {
        const { name, email, password } = req.body
        if (name === '' || email === '' || password === '') {
            throw new Error('all fields are required for signIn...')
        }
        const user = await signUp({ name, email, password })

        //** */ store token in cookies
        res.cookie("token",user.token,{
            httpOnly:true,
            secure:false,
            sameSite:'strict',
            maxAge:60*60*1000
        })

        res.status(201).send({
            message: 'user created successfully',
            success: true,
            data: user
        })

    } catch (error) {

        res.status(400).send({
            message: 'user created failed',
            success: false
        })
        throw error
    }
}

export const signInUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === '' || password === '') {
            throw new Error('email & password not be null')
        }

        const user = await signIn({ email, password })

         //** */ store token in cookies
        res.cookie('token',user.token, {
            httpOnly:true,
            secure:false,
            sameSite:'strict',
            maxAge:60*60*1000
        })

        res.status(200).send({
            message: 'Login successfull...',
            success: true,
            data:user
        })

    } catch (error) {

        res.status(400).send({
            message: 'Login failed...',
            success: false
        })
        throw error
    }
}