import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Oval } from 'react-loader-spinner'
import { BASE_IMG_URL } from '../../../config'

function MiningDataItem({ item }) {
    const [isDeleting, setIsDeleting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [isLoadingAsset, setIsLoadingAsset] = useState(false)
    const { name, _assetId, power, growth_rate, duration, _id, price } = item
    const [image, setImage] = useState("")
    const [showModal, setShowModal] = useState(false)

    // modal state
    const [newPrice, setNewPrice] = useState(price)
    const [newGrowthRate, setNewGrowthRate] = useState(growth_rate)
    const [newMiningPower, setNewMiningPower] = useState(power)

    useEffect(() => {
        async function getAsset() {
            try {
                setIsLoadingAsset(true)
                const response = await fetch(`/api/assets/items/${ _assetId }/get`)

                const data = await response.json()

                const { status, message, asset } = data

                if(status === true) {
                    setImage(asset.logo)
                    setIsLoadingAsset(false)
                } else {
                    throw new Error(message)
                }

            } catch(error) {
                setIsLoadingAsset(false)
            }
        }

        getAsset()
    }, [])

    async function handleDelete({ id }) {
        
        try {
            setIsDeleting(true)

            const request = await fetch("/api/mining/delete", {
                method: "DELETE",
                body: JSON.stringify({ id }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const response = await request.json()

            if(response.status === true) {
                setIsDeleting(false)
                toast.success(response.message)
            } else {
                throw new Error(response.message)
            }
        } catch(error) {
            setIsDeleting(false)
            toast.error(error.message)
        }
    }

    async function handleUpdate({ id }) {
        
        try {
            setIsSaving(true)

            const request = await fetch("/api/mining/update", {
                method: "PUT",
                body: JSON.stringify({ id, growth_rate: newGrowthRate, mining_power: newMiningPower, price: newPrice }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const response = await request.json()

            if(response.status === true) {
                setIsSaving(false)
                toast.success(response.message)
            } else {
                throw new Error(response.message)
            }
        } catch(error) {
            setIsSaving(false)
            toast.error(error.message)
        }
    }
    return (
        <>
        
            <tr>
                <td>
                    {
                        isLoadingAsset ? (
                            "Loading..."
                        ) : (

                            <img alt="avatar" className="rounded-circle avatar-md mr-2" src={`${ BASE_IMG_URL }${ image }`}/>
                        )
                    }
                </td>
                <td>{ name }</td>
                <td>{ power }</td>
                <td>{ growth_rate }</td>
                <td className="text-center">{ duration }</td>
                <td>
                    <a disabled={isDeleting} onClick={() => handleDelete({id: _id })} href="#" className="btn btn-sm btn-danger mr-3">
                        <i className="fe fe-trash"></i>
                    </a>
                    <a onClick={() => setShowModal(true)} href="#" className="btn btn-sm btn-info">
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
                                    <h6 className="modal-title">{ name }</h6>
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
                                        <div className="form-group">
                                            <label htmlFor="price">Price</label>
                                            <input value={newPrice} onChange={e => setNewPrice(e.target.value)} type="number" name="price" className="form-control" placeholder="New price..." />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="growth_rate">Growth rate</label>
                                            <input value={newGrowthRate} onChange={e => setNewGrowthRate(e.target.value)} type="number" name="growth_rate" className="form-control" placeholder="New growth rate..." />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="growth_rate">Mining power</label>
                                            <input value={newMiningPower} onChange={e => setNewMiningPower(e.target.value)} type="number" name="power" className="form-control" placeholder="New mining power..." />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => handleUpdate({ id: _id })} disabled={ isLoading || isSaving} className="btn ripple btn-primary" type="button">
                                        {
                                            isSaving ? (
                                                <Oval width={20} height={20} />
                                            ) : (
                                                <span>Update</span>
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

export default MiningDataItem