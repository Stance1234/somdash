import { useState } from 'react'
import { toast } from 'react-toastify'
import commaNumber from 'comma-number'
import { Oval } from 'react-loader-spinner'

function AssetsItemDataTableRow({ item, removeAssetFromList, index }) {
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [price, setPrice] = useState("")

    async function handleDelete({ id }) {
        try {
            setIsLoading(true)
            const response = await fetch("/api/assets/items/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id })
            })

            const data = await response.json()

            const { status, message } = data

            if(status === true) {
                setShowModal(false)
                setIsLoading(false)
                toast.success(message)
                removeAssetFromList({ id })
            } else {
                throw new Error(message)
            }

        } catch(error) {
            setIsLoading(false)
            toast.error(error.message)
        }
    }

    async function handleUpdate({ id }) {
        try {
            setIsSaving(true)
            const response = await fetch("/api/assets/items/update-price", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, price })
            })

            const data = await response.json()

            const { status, message } = data

            if(status === true) {
                setIsSaving(false)
                toast.success(message)
                setShowModal(false)
            } else {
                throw new Error(message)
            }

        } catch(error) {
            setIsSaving(false)
            toast.error(error.message)
        }
    }

    return (
        <>
            <tr role="row" className={`${index % 2 === 0 ? "even" : "odd"}`}>
                <td className="sorting_1">{ item.name }</td>
                <td>{ item.symbol }</td>
                <td>{ commaNumber(item.price) }</td>
                <td>
                    <span disabled={isLoading} onClick={() => setShowModal(true)} className="btn btn-info">Edit</span>
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
                                    <h6 className="modal-title">{ item.name }</h6>
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
                                    <h6>Price update</h6>
                                    <input value={price} onChange={e => setPrice(e.target.value)} type="number" name="price" className="form-control" placeholder="New price..." />
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => handleUpdate({ id: item._id })} disabled={ isLoading || isSaving} className="btn ripple btn-primary" type="button">
                                        {
                                            isSaving ? (
                                                <Oval width={20} height={20} />
                                            ) : (
                                                <span>Save</span>
                                            )
                                        }
                                        
                                    </button>
                                    <button
                                        disabled={ isLoading || isSaving}
                                        className="btn ripple btn-secondary"
                                        type="button"
                                        onClick={() => handleDelete({ id: item._id })}
                                    >
                                        {
                                            isLoading ? (
                                                <Oval width={20} height={20} />
                                            ) : (
                                                <span>Delete</span>
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

export default AssetsItemDataTableRow