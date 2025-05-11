import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { removeAssetCategory } from '../../../features/assets-category/assetsCategorySlice'


function AssetsCategoriesData() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.assetsCategory.categories)
    const [isLoading, setIsLoading] = useState(false)

    async function handleDelete({ _id }) {

        try {
            setIsLoading(true)
            const response = await fetch("/api/assets/categories/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ _id })
            })

            const data = await response.json()

            const { status, message } = data

            if(status === true) {
                dispatch(removeAssetCategory(_id))
                toast.success(message)
                setIsLoading(false)
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
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div className="card">
                    <div className="card-header border-bottom-0 pb-0">
                        <div className="d-flex justify-content-between">
                            <label className="main-content-label mb-0 pt-1">
                                Categories
                            </label>
                            <div className="ml-auto float-right"></div>
                        </div>
                        <p className="tx-12 tx-gray-500 mt-0 mb-2">
                            Categories which each assets must be under
                        </p>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive border userlist-table">
                            <table
                                className="table card-table table-striped table-vcenter text-nowrap mb-0"
                            >
                                <thead>
                                    <tr>
                                        <th className="wd-lg-8p"><span>Name</span></th>
                                        <th className="wd-lg-20p">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories && categories.length && categories.length > 0 && categories.map(item => (

                                            <tr key={item._id}>
                                                <td>{ item.name }</td>
                                                <td>
                                                    <a disabled={isLoading} onClick={() => handleDelete({ _id: item._id })} href='#' className='btn btn-sm btn-danger'>
                                                        <i className="fe fe-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            )
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- COL END --> */}
        </div>

    )
}

export default AssetsCategoriesData