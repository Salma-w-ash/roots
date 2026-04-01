import React from 'react'
import StartSection from '../components/StartSection';
import LoginForm from '../forms/LoginForm';

export default function LoginPage() {
  return (
    <div className='flex justify-between items-center gap-4'>
      <StartSection title={"Welcome back!"}/>
      <LoginForm/>
    </div>
  );
}
