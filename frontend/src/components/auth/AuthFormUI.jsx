import React from 'react';
import { ArrowRight, Briefcase, GraduationCap, Lock, Mail, User } from 'lucide-react';

export default function AuthFormUI({
  isSignIn,
  setIsSignIn,
  role,
  setRole,
  formData,
  onInputChange,
  onSubmit,
}) {
  return (
    <div className="relative flex h-dvh overflow-auto bg-[#0d0e12] p-3 text-gray-300 selection:bg-purple-500 selection:text-white sm:p-4">
      <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-purple-600/10 blur-[100px] sm:h-105 sm:w-105" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-purple-500/5 blur-[100px] sm:h-105 sm:w-105" />

      <div className="relative z-10 m-auto flex w-full max-w-sm flex-col items-center py-1 sm:max-w-md sm:py-2">
        <div className="mb-3 flex select-none items-center gap-2 sm:mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-600 text-sm font-bold text-white">
            E
          </div>
          <span className="text-lg font-bold uppercase tracking-wider text-white">
            Academy
          </span>
        </div>

        <div className="w-full rounded-lg border border-gray-800/60 bg-[#13151a] p-4 shadow-2xl transition-all duration-300 sm:p-5">
          <div className="mb-4 flex gap-1 rounded-lg border border-gray-800/30 bg-[#090a0f] p-1">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex-1 rounded-md py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                role === 'student'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Student
              </span>
            </button>
            <button
              type="button"
              onClick={() => setRole('teacher')}
              className={`flex-1 rounded-md py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
                role === 'teacher'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Briefcase className="h-4 w-4" />
                Teacher
              </span>
            </button>
          </div>

          <div className="mb-4 select-none text-left">
            <h2 className="text-xl font-bold tracking-tight text-white">
              {isSignIn ? 'Welcome back!' : 'Create your account'}
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              {isSignIn
                ? `Access your ${role} workspace dashboard.`
                : `Join SkillFinder as a certified ${role}.`}
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            {!isSignIn && (
              <div className="space-y-1">
                <label className="text-[11px] font-medium uppercase tracking-wider text-gray-500">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-gray-600" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name || ''}
                    onChange={onInputChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-800/80 bg-[#1b1e25] py-2.5 pl-11 pr-4 text-sm text-gray-200 placeholder-gray-700 transition-colors focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[11px] font-medium uppercase tracking-wider text-gray-500">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-gray-600" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email || ''}
                  onChange={onInputChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-800/80 bg-[#1b1e25] py-2.5 pl-11 pr-4 text-sm text-gray-200 placeholder-gray-700 transition-colors focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-medium uppercase tracking-wider text-gray-500">Password</label>
                {isSignIn && (
                  <a href="#forgot" className="text-[10px] text-purple-400 hover:underline">
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-gray-600" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password || ''}
                  onChange={onInputChange}
                  placeholder="Password"
                  className="w-full rounded-lg border border-gray-800/80 bg-[#1b1e25] py-2.5 pl-11 pr-4 text-sm text-gray-200 placeholder-gray-700 transition-colors focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            {isSignIn && (
              <div className="flex select-none items-center justify-between pt-1">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe || false}
                    onChange={onInputChange}
                    className="h-3.5 w-3.5 rounded border-gray-800 bg-[#1b1e25] text-purple-600 focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-[11px] text-gray-500">Keep me signed in</span>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="group mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all hover:bg-purple-700"
            >
              {isSignIn ? 'Sign In to Portal' : 'Register Account'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-4 select-none border-t border-gray-800/40 pt-3 text-center">
            <p className="text-xs text-gray-500">
              {isSignIn ? "Don't have an account yet?" : 'Already have an account?'}{' '}
              <button
                type="button"
                onClick={() => setIsSignIn(!isSignIn)}
                className="ml-1 font-medium text-purple-400 hover:underline focus:outline-none"
              >
                {isSignIn ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
