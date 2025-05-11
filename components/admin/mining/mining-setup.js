import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'


function MiningSetupForm({ users, contracts }) {
    const [userId, setUserId] = useState("")
    const [contractId, setContractId] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function initializeMining() {
        try {
            setIsLoading(true)
            const response = await fetch("/api/mining/init", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({ userId, contractId })
            })

            const data = await response.json()

            const { status, message } = data

            if(status === true) {
                toast.success(message)
                setUserId("")
                setContractId("")
                setIsLoading(false)
            } else {
                throw new Error(message)
            }

        } catch(error) {
            toast.error(error.message)
            setIsLoading(false)
        }
    }
    
    return (
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">Mining setup</h6>
                            <p className="text-muted card-sub-title">
                                A form to initialize mining contract for a user
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-xl-12">
                                <div className="">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <label className="">User</label>
                                                <select 
                                                    value={userId}
                                                    onChange={ e => setUserId(e.target.value) }
                                                    className="form-control"
                                                    required
                                                >
                                                    <option> -- User -- </option>
                                                    {
                                                        users && users.length && users.length > 0 && users.map(user => (
                                                            <option key={ user.id } value={ user.id }>{ user.firstname} { user.lastname }</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <label className="">Contract</label>
                                                <select
                                                    value={ contractId }
                                                    onChange={ e => setContractId(e.target.value) }
                                                    className="form-control"
                                                    required
                                                >
                                                    <option> -- Contract -- </option>
                                                    {
                                                        contracts && contracts.length && contracts.length > 0 && contracts.map(contract => (
                                                            <option key={ contract.id } value={ contract.id }>{ contract.name }</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={initializeMining} className="btn ripple btn-main-primary btn-block">
                                        {
                                            isLoading ? (
                                                <Oval color='#fff' width={20} height={20} />
                                            ) : (
                                                "Start Mining"
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MiningSetupForm