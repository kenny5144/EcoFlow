// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
export const { auth, handlers, signIn } = NextAuth({ providers: [GitHub, Credentials({
    credentials:{
        email:{},
        password:{},
        
    },
    authorize: async (credentials) => {
       
        const email = "ojok761@gmail.com"
        const password="$Ktheman123"
        if (credentials.email===email && credentials.password===password){
            return{email, password}
        }else{
          throw new Error("Invalid credentials.");
        }

      },
})] })
 