import React, { useState,useEffect } from 'react';
import AuthFormUI from '../../components/auth/AuthFormUI'
import { useNavigate, useParams } from 'react-router-dom';
import {signInApi, signUpApi} from '../../api/auth.js'

export default function AuthPage() {
  const navigate = useNavigate();
  const { type } = useParams();

  const [role, setRole] = useState('student'); // 'student' | 'teacher'
  const [isSignIn, setIsSignIn] = useState(type === 'signIn');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(()=>{
    setIsSignIn(type === 'signIn')
  },[type])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleViewToggle = (targetSignInState) => {
    const path = targetSignInState ? '/auth/signIn' : '/auth/signUp';
    navigate(path);
    setIsSignIn(targetSignInState);
    setFormData({ name: '', email: '', password: '', rememberMe: false });
    setError('');
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const endpoint = isSignIn ? '/auth/signIn' : '/auth/signUp';
    const payload = isSignIn
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password, role };

    try {
        const data = isSignIn ? await signInApi(payload):await signUpApi(payload)

        if(!data.success){
          throw new Error(data.message)
        }
       console.log('Auth Success:', data);
      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('token', data.data.token);

      // Redirect based on role
      if (role === 'teacher') {
        navigate('/teacher/dashboard');
      } else {
        navigate('/student/dashboard');
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormUI
      isSignIn={isSignIn}
      setIsSignIn={handleViewToggle}
      role={role}
      setRole={setRole}
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleFormSubmission}
      isLoading={isLoading}
      error={error}
    />
  );
}
