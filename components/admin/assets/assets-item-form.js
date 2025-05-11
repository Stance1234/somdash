import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'

const initialState = {
    name: "",
    price: "",
    symbol: "",
    category: "",
    type: "",
    logo: null
}

function AssetsItemForm({ categories }) {
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    const list = JSON.parse(categories)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setIsLoading(true)
            
            if(!data.name) throw new Error("Enter asset's name")
            if(!data.symbol) throw new Error("Enter asset's symbol")
            if(!data.price) throw new Error("Enter asset's price")
            if(!data.category) throw new Error("Enter asset's category")
            if(!data.logo) throw new Error("Enter asset's logo")
            if(!data.type) throw new Error("Enter asset's Type")

            const form = new FormData()

            Object.keys(data).forEach(key => {
                form.append(key, data[key])
            })

            const response = await fetch("/api/assets/items/create", {
                method: "POST",
                body: form
            })

            const item = await response.json()

            const { status, message } = item

            if(status === true) {
                toast.success(message)
                setIsLoading(false)
                setData(initialState)
            } else {
                throw new Error(message)
            }
            
            
        } catch (error) {
            toast.error(error.message)
            setIsLoading(false)
        }
    }

    return (
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="card">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">New Asset Item</h6>
                            <p className="text-muted card-sub-title">
                                Add a new asset item to existing category
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter your asset name"
                                    type="text"
                                    value={ data.name }
                                    onChange={e => setData({ ...data, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    value={ data.category }
                                    onChange={e => setData({ ...data, category: e.target.value })}
                                >
                                    <option label="Select category" data-select2-id="15"></option>
                                    {
                                        list && list.length && list.length > 0 && list.map(item => (
                                            <option key={ item._id } value={item._id} data-select2-id={item._id}>{ item.name }</option>
                                        ))
                                    }
                                </select>

                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter your asset price"
                                    type="number"
                                    value={ data.price }
                                    onChange={e => setData({ ...data, price: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter asset's type (ETHUSDT)"
                                    type="text"
                                    value={ data.type }
                                    onChange={e => setData({ ...data, type: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter asset's symbol (BINANCE:ETHUSDT)"
                                    type="text"
                                    value={ data.symbol }
                                    onChange={e => setData({ ...data, symbol: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <div className="input-group file-browser">
                                    <input
                                        name="profilt_img_name"
                                        type="text"
                                        className="form-control border-right-0 browse-file"
                                        placeholder="choose"
                                        readOnly={true}
                                        value={data.logo?.name || ""}
                                        onChange={() => console.log("new file")}
                                    />
                                    <label className="input-group-btn">
                                        <span className="btn btn-primary">
                                            Browse
                                            <input name="logo" accept='image/*' type="file" style={{display: "none"}} onChange={e => setData({ ...data, logo: e.target.files[0] })} />
                                        </span>
                                    </label>
                                </div>

                            </div>
                            <button disabled={isLoading} className="btn ripple btn-main-primary">
                                {
                                    isLoading ? (
                                        <Oval height={20} width={20} color='#fff' />
                                    ) : (
                                        <span>Add</span>
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

export default AssetsItemForm