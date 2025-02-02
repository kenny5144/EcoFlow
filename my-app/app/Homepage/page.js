import { auth } from '../lib/auth'
import { redirect } from 'next/navigation'
import SignOut from '../Component/sign-out'
import Home from '../Component/Home'
const page = async () => {
    const session = await auth()
    if (!session) redirect("/Signin")
      
     
    
  return (
    <>
      <SignOut />
     {/* <Home */}
     <Home session={session}/>
    </>
  )
}

export default page
