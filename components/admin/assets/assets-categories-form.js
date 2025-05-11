import { useState } from 'react'
import { toast } from 'react-toastify'
import { Oval } from 'react-loader-spinner'
import { useDispatch } from 'react-redux'
import { addAssetCategory } from '../../../features/assets-category/assetsCategorySlice'


function AssetsCategoriesForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setIsLoading(true)
            const response = await fetch("/api/assets/categories/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name })
            })

            const data = await response.json()

            const { status, message, category } = data

            if(status === true) {
                dispatch(addAssetCategory(category))
                toast.success(message)
                setIsLoading(false)
                setName("")
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
                            <h6 className="main-content-label mb-1">New Asset Category</h6>
                            <p className="text-muted card-sub-title">
                                Add a new category and start adding assets to it
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Enter your category name"
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <button disabled={isLoading} className="btn ripple btn-main-primary">
                                {
                                    isLoading ? (
                                        <Oval height={30} width={30} />
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

export default AssetsCategoriesForm