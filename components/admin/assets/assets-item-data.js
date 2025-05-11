import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import AssetsItemDataTableRow from './assets-item-data-table-row'


function AssetsItemData({ categories }) {
    const [categoryId, setCategoryId] = useState("")
    const [assetList, setAssetList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const list = JSON.parse(categories)

    function removeAssetFromList({ id }) {
        const filteredList = assetList.filter(item => item._id !== id)

        setAssetList(filteredList)
    }

    useEffect(() => {
        if(!categoryId) return

        async function getAssets({ categoryId }) {
            try {
                setIsLoading(true)
                const response = await fetch(`/api/assets/categories/${ categoryId }/items`)

                const data = await response.json()

                const { status, message, assets } = data

                if(status === true) {
                    setAssetList(assets)
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
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card overflow-hidden">
                    <div className="card-body">
                        <div>
                            <h6 className="main-content-label mb-1">Assets Data Table</h6>
                            <p className="text-muted card-sub-title">
                                List of assets available
                            </p>
                        </div>
                        <div className="table-responsive">
                            <div
                                id="example1_wrapper"
                                className="dataTables_wrapper dt-bootstrap4 no-footer"
                                data-select2-id="example1_wrapper"
                            >
                                <div className="row">
                                    <div
                                        className="col-sm-12 col-md-6"
                                        data-select2-id="45"
                                    >
                                        <div
                                            className="dataTables_length"
                                        >
                                            <label>
                                                <select
                                                    className="form-control"
                                                    value={categoryId}
                                                    onChange={e => setCategoryId(e.target.value)}
                                                >
                                                    <option disabled value="">Category</option>
                                                    {
                                                        list && list.length && list.length > 0 && list.map(item => (
                                                            <option key={ item._id } value={ item._id }>{ item.name }</option>
                                                        ))
                                                    }
                                                </select>
                                                assets categories
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table
                                            className="table"
                                            role="grid"
                                            aria-describedby="example1_info"
                                        >
                                            <thead>
                                                <tr role="row">
                                                    <th
                                                        className="wd-20p sorting_asc"
                                                        tabIndex="0"
                                                        aria-controls="example1"
                                                        rowSpan="1"
                                                        colSpan="1"
                                                        aria-sort="ascending"
                                                        aria-label="Name: activate to sort column descending"
                                                        style={{width: "244.297px"}}
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        className="wd-25p sorting"
                                                        tabIndex="0"
                                                        aria-controls="example1"
                                                        rowSpan="1"
                                                        colSpan="1"
                                                        aria-label="Position: activate to sort column ascending"
                                                        style={{width: "353.5px"}}
                                                    >
                                                        Symbol
                                                    </th>
                                                    <th
                                                        className="wd-20p sorting"
                                                        tabIndex="0"
                                                        aria-controls="example1"
                                                        rowSpan="1"
                                                        colSpan="1"
                                                        aria-label="Office: activate to sort column ascending"
                                                        style={{width: "274.797px"}}
                                                    >
                                                        Price
                                                    </th>
                                                    <th>
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    assetList && assetList.length && assetList.length > 0 ? assetList.map((item, i) => (
                                                        <AssetsItemDataTableRow key={ item._id } item={ item } index={i} removeAssetFromList={removeAssetFromList} />
                                                    )) : (
                                                        <tr>
                                                            <td colSpan={3}>No assets</td>
                                                        </tr>
                                                    )
                                                }
                                                {/* <tr role="row" className="odd">
                                                    <td className="sorting_1">
                                                        Airi Satou
                                                    </td>
                                                    <td>Accountant</td>
                                                    <td>Tokyo</td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">
                                                        Angelica Ramos
                                                    </td>
                                                    <td>
                                                        Chief Executive Officer (CEO)
                                                    </td>
                                                    <td>London</td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AssetsItemData