import { useState } from 'react'
import { useRouter } from 'next/router'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'


function WithdrawalForm({ type }) {
    const router = useRouter()
    const { withdrawalId } = router.query
    const [status, setStatus] = useState("")
    const [msg, setMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setIsLoading(true)

            const res = await fetch(`/api/fund/withdrawal/${ withdrawalId }`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status, msg, type })
            })

            const response = await res.json()

            if(response.status === true) {
                
                setIsLoading(false)
                toast.success(response.message)
            } else {
                throw new Error(response.message)
            }

        } catch(error) {
            setIsLoading(false)
            toast.error(error.message)
        }
    }
    return (
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="card">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">Update withdrawal status</h6>
                            <p className="text-muted card-sub-title">
                               Update withdrawal status and attach a message
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="form-group">
                                <select className='form-control' required value={status} onChange={ e => setStatus(e.target.value) }>
                                    <option value="" disabled> -- select status -- </option>
                                    <option value="pending">Pending</option>
                                    <option value="veryfying">Veryfying</option>
                                    <option value="approved">Approved</option>
                                    <option value="fullfilled">Fulfilled</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    name="msg"
                                    className="form-control"
                                    placeholder="Message..."
                                    type="text"
                                    required
                                    value={msg}
                                    onChange={e => setMsg(e.target.value)}
                                />
                            </div>
                            <button name="submit" type="submit" disabled={isLoading} className="btn ripple btn-main-primary">
                                {
                                    isLoading ? (
                                        <Oval height={30} width={30} />
                                    ) : (
                                        <span>Submit</span>
                                    )
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default WithdrawalForm