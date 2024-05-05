import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

const Auth = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <SignInButton mode="modal" />
    </div>
  )
}

export default Auth