import React, { useState } from 'react';
import AuthFormUI from '../../components/auth/AuthFormUI';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [role, setRole] = useState('student'); // 'student' | 'teacher'
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });

  // Master handler for keeping input text responsive across components
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Switch view tabs safely without tracking overlapping text entries
  const handleViewToggle = (targetSignInState) => {
    setIsSignIn(targetSignInState);
    setFormData({ name: '', email: '', password: '', rememberMe: false });
  };

  // Form handling logic (API integration, Validation, Router Redirects)
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(`Connecting API pipeline for: [${role.toUpperCase()}]`, formData);
    
    if (isSignIn) {
      // Execute login sequence
    } else {
      // Execute registration sequence
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
    />
  );
}