import React from 'react'
import { auth } from '../lib/auth'
import { redirect } from 'next/navigation'
import SignOut from '../Component/sign-out'
const page = async () => {
    const session = await auth()
    if (!session) redirect("/Signin")
  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:{session.user.email}</p>
        <p className="font-medium">ei</p>
      </div>

      <SignOut />
    </>
  )
}

export default page