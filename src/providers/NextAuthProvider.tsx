'use client'

import { SessionProvider } from "next-auth/react"

export default function NextAuthProvider({session, children} : {session : any, children : React.ReactNode}){
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}