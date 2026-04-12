import React from 'react'
import RegisterForm from '../forms/RegisterForm'
import StartSection from '../components/StartSection'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen justify-center items-center gap-8">
      <StartSection title={"Get Started Now!"} />
      <div className="w-1/2 flex justify-center items-center">
        <RegisterForm />
      </div>
    </div>
  );
}
