import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import { BASE_IMG_URL } from '../../../config'

function UserIdentityDisplay() {
    const router = useRouter()
    const { userId } = router.query
    const [ids, setIds] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function loadIndentities() {
            try {
                setIsLoading(true)
    
                const response = await fetch(`/api/user/${ userId }/identities`)
    
                const data = await response.json()
    
                const { status, message } = data
    
                if(status === true) {
                    setIsLoading(false)
                    toast.success(message)
                    setIds(data.ids)
                } else {
                    throw new Error(message)
                }
    
            } catch (error) {
                toast.error(error.message)
                setIsError(true)
                setIsLoading(false)
            }
        }

        loadIndentities()
    }, [])

    return (
        <>
        
            <h3>ID&apos;s</h3>
            <div className="row">
                {
                    isLoading ? (
                        <div className="col-md-6">
                            <div className="card overflow-hidden">
                                <Oval height={100} width={100} />
                            </div>
                        </div>
                    ) : (
                        isError ? (
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        An error occured
                                    </div>
                                </div>
                            </div>
                        ) : (

                            <>
                                <div className="col-md-6">
                                    <div className="card overflow-hidden">
                                        <img
                                            alt="Image"
                                            className="img-fluid b-img"
                                            src={`${ BASE_IMG_URL }${ ids.front }`}
                                        />
                                        <div className="card-body">
                                            <p className="card-text">
                                                Front
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card overflow-hidden">
                                        <img
                                            alt="Image"
                                            className="img-fluid b-img"
                                            src={`${ BASE_IMG_URL }${ ids.back }`}
                                        />
                                        <div className="card-body">
                                            <p className="card-text">
                                                Back
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    )
                }
            </div>
        </>

    )
}

export default UserIdentityDisplay