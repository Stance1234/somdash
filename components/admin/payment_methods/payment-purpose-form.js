import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'


function PaymentPurposeForm() {
    const [data, setData] = useState({ name: "", desc: "", id: null, max: null, min: null })
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit() {
        try {
            setIsLoading(true)

            const res = await fetch("/api/payment-purpose/create", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": 'application/json'
                }
            })

            const response = await res.json()

            if(response.status === true) {
                setData({ name: "", desc: "", id: null, max: null, min: null })
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
                            <h6 className="main-content-label mb-1">Setup payment purpose</h6>
                            <p className="text-muted card-sub-title">
                                Enter choices for purpose of payment
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Payment Purpose Name"
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={e => setData({ ...data, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Payment Purpose Desc"
                                    type="text"
                                    required
                                    value={data.desc}
                                    onChange={e => setData({ ...data, desc: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Payment Purpose ID"
                                    type="number"
                                    required
                                    min="1"
                                    value={data.id}
                                    onChange={e => setData({ ...data, id: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Payment Purpose Min Value"
                                    type="number"
                                    required
                                    min="1"
                                    value={data.min}
                                    onChange={e => setData({ ...data, min: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter Payment Purpose Max Value"
                                    type="number"
                                    required
                                    min="1"
                                    value={data.max}
                                    onChange={e => setData({ ...data, max: e.target.value })}
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

export default PaymentPurposeForm