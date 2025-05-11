import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

function useAuthChat() {
    const { data: session, status } = useSession()

    useEffect(() => {
        if(typeof window !== "undefined") {
            if(typeof smartupp !== "undefined") {
                if(status === "authenticated") {
                    smartupp("name", session.user.name)
                    smartupp("email", session.user.email)
                }
            }
        }
    })
}

export default useAuthChat