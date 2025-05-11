import { useState, useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'


function MiningForm({ assetsCategories }) {
  
    const [data, setData] = useState({ name: "", growth_rate: "", duration: "", mining_power: "", assetId: "", price: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState(JSON.parse(assetsCategories))
    const [categoryId, setCategoryId] = useState("")
    const [assets, setAssets] = useState([])

    useEffect(() => {
        if(!categoryId) return
        
        async function getAssets({ categoryId }) {
            
            try {
                setIsLoading(true)
                const response = await fetch(`/api/assets/categories/${ categoryId }/items`)

                const data = await response.json()

                const { status, message, assets } = data

                if(status === true) {
                    setAssets(assets)
                    setIsLoading(false)
                } else {
                    throw new Error(message)
                }
            } catch (error) {
                setIsLoading(false)
                toast.error(error.message)
            }
        }

        getAssets({ categoryId })
    }, [categoryId])

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setIsLoading(true)

            // if(!data.name) throw new Error("Enter trader's name")
            // if(!data.win_rate) throw new Error("Please, specify a win rate")
            // if(!data.profit_share) throw new Error("Please, specify trader's profit share")
            // if(!data.type) throw new Error("Type of trader is important")
            // if(!data.profile_img) throw new Error("Please, select a profile image")

            // setIsLoading(false)

            const res = await fetch("/api/mining/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const response = await res.json()

            if(response.status === true) {
                setData({ name: "", growth_rate: "", duration: "", mining_power: "", assetId: "", price: ""})
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
                            <h6 className="main-content-label mb-1">Add New Mining Contract</h6>
                            <p className="text-muted card-sub-title">
                               Add a new mining contract that users can buy
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="form-group">
                                <input
                                    name='name'
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={e => setData({ ...data, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    name="mining_power"
                                    className="form-control"
                                    placeholder="Mining power (GH/S)"
                                    type="number"
                                    required
                                    value={data.mining_power}
                                    onChange={e => setData({ ...data, mining_power: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    name="growth_rate"
                                    className="form-control"
                                    placeholder="Growth rate (Per hour)"
                                    type="number"
                                    required
                                    value={data.growth_rate}
                                    onChange={e => setData({ ...data, growth_rate: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    name="duration"
                                    className="form-control"
                                    placeholder="duration (weeks)"
                                    type="number"
                                    required
                                    value={data.duration}
                                    onChange={e => setData({ ...data, duration: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    name="price"
                                    className="form-control"
                                    placeholder="price"
                                    type="number"
                                    required
                                    value={data.price}
                                    onChange={e => setData({ ...data, price: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <select required value={categoryId} onChange={ e => setCategoryId(e.target.value) } className='form-control'>
                                    <option value="" disabled> -- Category -- </option>
                                    {
                                        categories && categories.length && categories.length > 0 && categories.map(cate => (
                                            <option key={ cate._id } value={ cate._id }>{ cate.name }</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <select required value={data.assetId} onChange={ e => setData({ ...data, assetId: e.target.value })} className='form-control'>
                                    <option value="" disabled> -- Asset -- </option>
                                    {
                                        assets && assets.length && assets.length > 0 && assets.map(item => (
                                            <option key={ item._id } value={ item._id }>{ item.name }</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <button name="submit" type="submit" disabled={isLoading} className="btn ripple btn-main-primary">
                                {
                                    isLoading ? (
                                        <Oval color='#fff' height={30} width={30} />
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

export default MiningForm