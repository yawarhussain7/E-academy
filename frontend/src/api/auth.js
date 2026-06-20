import api from './axios.js'

export const signInApi = async(userData)=>{
    try{
        const response = await api.post('/auth/signIn',userData)
        return response.data
    }catch(error){
        console.log('ERORR SignIn : '+error.message)
        throw error
    }
}

export const signUpApi = async(userData)=>{
    try{
        const response = await api.post('/auth/signUp',userData)
        return response.data;
    }catch(error){
        console.log('ERORR SignUp : '+error.message)
        throw error
    }
}