import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import commaNumber from 'comma-number'


function UserBalance() {
    const router = useRouter()
    const { userId } = router.query
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [balance, setBalance] = useState({ trading: 0, mining: 0 })
    const [newTadingBalance, setNewTradingBalance] = useState(null)
    const [signal, setSignal] = useState(0)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isApproving, setIsApproving] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    // async function approveUserProfile() {
    //     try {
    //         setIsApproving(true)

    //         const response = await fetch(`/api/user/${ userId }/approve`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })

    //         const data = await response.json()

    //         const { status, message } = data

    //         if(status === true) {
    //             toast.success(message)
    //             setIsApproving(false)
    //             setProfile({ ...profile, is_verified: true })
    //         } else {
    //             throw new Error(message)
    //         }

    //     } catch (error) {
    //         toast.error(error.message)
    //         setIsApproving(false)
    //     }
    // }

    // async function deleteUserProfile() {
    //     try {
    //         setIsDeleting(true)

    //         const response = await fetch(`/api/user/${ userId }/delete`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })

    //         const data = await response.json()

    //         const { status, message } = data

    //         if(status === true) {
    //             toast.success(message)
    //             router.push("/admin/users")
    //         } else {
    //             throw new Error(message)
    //         }

    //     } catch (error) {
    //         toast.error(error.message)
    //         setIsDeleting(false)
    //     }
    // }

    async function updateTradingBalance() {
        
        try {
            setIsUpdating(true)

            const response = await fetch(`/api/user/${ userId }/update-trading-balance`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newBalance: newTadingBalance })
            })

            const data = await response.json()

            const { status, message } = data

            if(status === true) {
                setIsUpdating(false)
                setBalance({ ...balance, trading: Number(newTadingBalance) })
                setNewTradingBalance(0)
                toast.success(message)
            } else {
                throw new Error(message)
            }

        } catch (error) {
            toast.error(error.message)
            setIsUpdating(false)
        }
    }

    useEffect(() => {
        async function loadBalance() {
            try {
                setIsLoading(true)
                const response = await fetch(`/api/user/${ userId }/balance`)

                const data = await response.json()

                const { status, message, trading, mining } = data

                if(status === true) {
                    setBalance({ trading, mining })
                    setIsError(false)
                    setIsLoading(false)
                } else {
                    throw new Error(message)
                }
            } catch (error) {
                toast.error(error.message)
                setBalance({ trading: 0, balance: 0 })
                setIsError(true)
                setIsLoading(false)
            }
        }

        loadBalance()

    }, [userId])

    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div className="card">
                    <div className="card-header border-bottom-0 pb-0">
                        <div className="d-flex justify-content-between">
                            <label className="main-content-label mb-0 pt-1">Balance</label>
                            <div className="ml-auto float-right">
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {
                            isLoading ? (
                                <Oval height={200} width={200} />
                            ) : (
                                <div className="tab-pane fade active show" id="profile" role="tabpanel">
                                    {
                                        isError ? (
                                            <div className='d-flex align-items-start pb-3'>An error occured</div>
                                        ) : (
                                            <>
                                              
                                                <div className="py-2">
                                                    <div className="row py-2">
                                                        <div className="col-md-6">
                                                            <label id="emailid">Trading Balance -- ${ commaNumber(balance.trading.toFixed(2)) }</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                placeholder="0.00"
                                                                value={ newTadingBalance }
                                                                onChange={ e => setNewTradingBalance(e.target.value) }
                                                            />
                                                        </div>
                                                        <div className="col-md-6 pt-md-0 pt-3">
                                                            <label id="phoneno">Mining Balance</label>
                                                            <input
                                                                readOnly
                                                                type="tel"
                                                                className="form-control"
                                                                placeholder="0.00"
                                                                value={ commaNumber(balance.mining.toFixed(2)) }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row py-2">
                                                        <div className="col-md-12">

                                                            <button onClick={ updateTradingBalance } disabled={ isUpdating } className="btn btn-primary">
                                                                {
                                                                    isUpdating ? (
                                                                        "Updating..."
                                                                    ) : (
                                                                        "Update Trading Balance"
                                                                    )
                                                                }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBalance