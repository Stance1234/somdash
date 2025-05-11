import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import commaNumber from 'comma-number'


function MiningGridDataItem({ miner }) {
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(miner.status)

    async function handleUpdate({ id }) {
        try {
            setIsLoading(true)
            const response = await fetch(`/api/mining/${ id }/update-status`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status })
            })

            const data = await response.json()

            const { status: reqStat, message, newStatus } = data

            if(reqStat === true) {
                setStatus(newStatus)
                toast.success(message)
                setIsLoading(false)
            } else {
                throw new Error(message)
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(error.message)
        }
    }

    return (
        <>
        
            <tr>
                <td>{ miner.miner }</td>
                <td>{ commaNumber(miner.balance.toFixed(2)) }</td>
                <td>{ commaNumber(miner.quantity.toFixed(6)) }</td>
                <td>{ miner.expires_at }</td>
                <td>
                    <span className={`badge badge-pill ${miner.status === "active" ? "badge-success" : miner.status === "pending" ? "badge-warning" : "badge-danger"}`}>{ miner.status }</span>
                </td>
                <td>
                    <a onClick={() => setShowModal(true) }  href="#" className="btn btn-sm btn-info">
                        <i className="fe fe-eye"></i>
                    </a>
                </td>
            </tr>

            {/* modal */}

            {
                showModal && (

                    <div
                        className="modal show"
                        id="select2modal"
                        style={{display: "block", paddingRight: "3px", backgroundColor: "rgba(0,0,0,.4)", backdropFilter: "blur(5px)"}}
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content modal-content-demo">
                                <div className="modal-header">
                                    <h6 className="modal-title">{ miner.miner } mining contract</h6>
                                    <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h6>Mining update</h6>
                                    <form action="/update">
                                        <select value={ status } onChange={ e => setStatus(e.target.value) } className='form-control'>
                                            <option value="" disabled > -- status -- </option>
                                            <option disabled={ status === "pending" } value="pending">Pending</option>
                                            <option disabled={ status === "active" } value="active">Active</option>
                                            <option disabled={ status === "cancel" } value="cancel">Cancel</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => handleUpdate({ id: miner.id })} disabled={ isLoading } className="btn ripple btn-primary" type="button">
                                        {
                                            isLoading ? (
                                                <Oval width={20} height={20} />
                                            ) : (
                                                <span>Change status</span>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MiningGridDataItem