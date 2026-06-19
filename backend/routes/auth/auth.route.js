import express from 'express'
import {signUpUser,signInUser} from '../../controllers/auth/user.controller.js'
const auth_router =express.Router()

auth_router.post('/signUp',signUpUser)
auth_router.post('/signIn',signInUser)

export default auth_router