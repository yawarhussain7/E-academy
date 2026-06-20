import { signUp, signIn } from '../../services/auth/user.service.js'

export const signUpUser = async (req,res) => {
    try {
        const { name, email, password, role } = req.body
        if (name === '' || email === '' || password === '') {
            throw new Error('all fields are required for signIn...')
        }
        console.log(`Request is : ${name,email,password}`)
        const user = await signUp({ name, email, password, role })

        //** */ store token in cookies
        res.cookie("token",user.token,{
            httpOnly:true,
            secure:false,
            sameSite:'lax',
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
        console.error(error.message)
    }
}

export const signInUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (email === '' || password === '') {
            throw new Error('email & password not be null')
        }

        const user = await signIn({ email, password, role })

         //** */ store token in cookies
        res.cookie('token',user.token, {
            httpOnly:true,
            secure:false,
            sameSite:'lax',
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
        console.error(error.message)
    }
}