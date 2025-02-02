"use client"

import {signOut} from "next-auth/react"
const SignOut = () => {
    const handlesubmit=async()=>{
        await signOut()
    }
  return (
    <div>
        <button onClick={handlesubmit}> Signout</button>
    </div>
  )
}

export default SignOut