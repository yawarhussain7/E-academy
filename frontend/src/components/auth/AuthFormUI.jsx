import React, { useState } from 'react';
import { ArrowRight, Briefcase, GraduationCap, Lock, Mail, User, Eye, EyeOff } from 'lucide-react';

export default function AuthFormUI({
  isSignIn,
  setIsSignIn,
  role,
  setRole,
  formData,
  onInputChange,
  onSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex h-screen w-screen max-h-screen items-center justify-center overflow-hidden bg-[#07060a] text-gray-300 selection:bg-purple-600/30 selection:text-white">
      
      {/* Structural Minimalist Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/[0.06] rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-48 w-48 bg-blue-500/[0.03] rounded-full blur-[80px]" />

      <div className="relative z-10 w-full max-w-[420px] p-4">
        {/* Main Glassmorphic Auth Frame */}
        <div className="rounded-2xl border border-white/[0.05] bg-[#0d0c12]/80 backdrop-blur-2xl p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-white/[0.08] sm:p-8">
          
          {/* Brand Identity Module */}
          <div className="mb-6 flex flex-col items-center gap-2 select-none text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 font-black text-lg text-white shadow-[0_4px_20px_rgba(147,51,234,0.4)]">
              L
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase font-mono">
                E-academy <span className="text-purple-500">LMS</span>
              </span>
              <h2 className="text-xl font-black tracking-tight text-white pt-1">
                {isSignIn ? 'Welcome back' : 'Create account'}
              </h2>
              <p className="text-[11px] text-gray-500 font-medium">
                {isSignIn ? `Secure sign-in for authorized ${role}s` : `Register terminal node as an instructor`}
              </p>
            </div>
          </div>

          {/* Segmented Micro-Tab Role Selectors */}
          <div className="mb-6 flex rounded-xl bg-[#050408] p-1 border border-white/[0.03]">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out ${
                role === 'student'
                  ? 'bg-[#14121a] text-purple-400 shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-white/[0.04]'
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole('teacher')}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-out ${
                role === 'teacher'
                  ? 'bg-[#14121a] text-purple-400 shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-white/[0.04]'
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              <Briefcase className="h-3.5 w-3.5" />
              Instructor
            </button>
          </div>

          {/* Core Input Pipeline Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            
            {/* Conditional Input Field: Full Name */}
            {!isSignIn && (
              <div className="relative group border-b border-white/[0.06] focus-within:border-purple-500 transition-colors duration-300 pb-1.5">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 font-mono">Full Name</span>
                <div className="flex items-center mt-1">
                  <User className="h-4 w-4 text-gray-600 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name || ''}
                    onChange={onInputChange}
                    placeholder="John Doe"
                    className="w-full bg-transparent px-3 py-1 text-xs text-gray-200 placeholder-gray-700 outline-none focus:ring-0"
                  />
                </div>
              </div>
            )}

            {/* Input Field: Email */}
            <div className="relative group border-b border-white/[0.06] focus-within:border-purple-500 transition-colors duration-300 pb-1.5">
              <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 font-mono">Email Address</span>
              <div className="flex items-center mt-1">
                <Mail className="h-4 w-4 text-gray-600 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email || ''}
                  onChange={onInputChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent px-3 py-1 text-xs text-gray-200 placeholder-gray-700 outline-none focus:ring-0"
                />
              </div>
            </div>

            {/* Input Field: Password */}
            <div className="relative group border-b border-white/[0.06] focus-within:border-purple-500 transition-colors duration-300 pb-1.5">
              <div className="flex justify-between items-center">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 font-mono">Password</span>
                {isSignIn && (
                  <a href="#forgot" className="text-[10px] text-purple-400/80 hover:text-purple-400 transition-colors font-semibold">Forgot?</a>
                )}
              </div>
              <div className="flex items-center mt-1">
                <Lock className="h-4 w-4 text-gray-600 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password || ''}
                  onChange={onInputChange}
                  placeholder="••••••••••••"
                  className="w-full bg-transparent px-3 py-1 text-xs text-gray-200 placeholder-gray-700 outline-none focus:ring-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-600 hover:text-gray-400 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

            {/* Custom Checkbox Config Persistence Switch */}
            {isSignIn && (
              <div className="flex items-center select-none pt-0.5">
                <label className="flex cursor-pointer items-center gap-2 group">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe || false}
                    onChange={onInputChange}
                    className="h-3.5 w-3.5 rounded border-white/10 bg-[#050408] text-purple-600 focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer"
                  />
                  <span className="text-[11px] text-gray-500 group-hover:text-gray-400 transition-colors">Keep session persistence alive</span>
                </label>
              </div>
            )}

            {/* Action Trigger Button Panel */}
            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-purple-600 py-3 text-xs font-bold text-white shadow-[0_4px_24px_rgba(147,51,234,0.2)] transition-all duration-300 ease-out hover:bg-purple-500 hover:shadow-[0_4px_30px_rgba(147,51,234,0.35)] active:scale-[0.99]"
            >
              <span>{isSignIn ? 'Authenticate Portal' : 'Provision Secure Node'}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          {/* Lower Component Interactive View Footer */}
          <div className="mt-5 select-none border-t border-white/[0.04] pt-4 text-center">
            <p className="text-xs text-gray-500">
              {isSignIn ? "New to this platform ecosystem?" : "Already hold access clearance?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignIn(!isSignIn)}
                className="ml-0.5 font-bold text-purple-400 hover:text-purple-300 focus:outline-none transition-colors"
              >
                {isSignIn ? 'Sign up here' : 'Sign in'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}