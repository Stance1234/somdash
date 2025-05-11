import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'


function PaymentMethodForm() {
    const [data, setData] = useState({ name: "", method: "", address: "" })
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit() {
        try {
            setIsLoading(true)

            const res = await fetch("/api/payment-method/create", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": 'application/json'
                }
            })

            const response = await res.json()

            if(response.status === true) {
                setData({ name: "", method: "", address: "" })
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
                    <div className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">Setup payment method</h6>
                            <p className="text-muted card-sub-title">
                                Enter information to allow users make payment
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Payment Name (BTC Bitcoin)"
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={e => setData({ ...data, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Payment Method (BTC)"
                                    type="text"
                                    required
                                    value={data.method}
                                    onChange={e => setData({ ...data, method: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Your Wallet Address"
                                    type="text"
                                    required
                                    value={data.address}
                                    onChange={e => setData({ ...data, address: e.target.value })}
                                />
                            </div>
                            <button disabled={isLoading} onClick={handleSubmit} className="btn ripple btn-main-primary">
                                {
                                    isLoading ? (
                                        <Oval height={30} width={30} />
                                    ) : (
                                        <span>Submit</span>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaymentMethodForm