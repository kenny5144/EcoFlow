import React from 'react'
import { signIn } from '../lib/auth'

const GithubSignIn = () => {
  return (
    <form
    action={async()=>{
        "use server"
        await signIn("github")
    }}
    >


        <button className=' border-4 '>git hub 

        </button>
    </form>
  )
}

export  {GithubSignIn}