import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Oval } from 'react-loader-spinner'
import MiningGridDataItem from "./mining-grid-data-item"


function MiningGrid({ contracts }) {
    const [contractId, setContractId] = useState("")
    const [miners, setMiners] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function getMiners() {
        try {
            const response = await fetch(`/api/mining/${ contractId }/miners`)

            const data = await response.json()

            const { status, message, miners: list } = data

            if(status === true) {
                setMiners(list)
                setIsLoading(false)
            } else {
                setIsLoading(true)
                setMiners([])
                throw new Error(message)
            }

        } catch (error) {
            toast.error(error.message)
            setMiners([])
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(!contractId) return

        getMiners()

    }, [contractId])

    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div className="card">
                    <div className="card-header border-bottom-0 pb-0">
                        <div className="d-flex justify-content-between">
                            <label className="main-content-label mb-0 pt-1">Miners Tabel</label>
                            <div className="ml-auto float-right">
                            </div>
                        </div>
                        <p className="tx-12 tx-gray-500 mt-0 mb-2">List of miners.</p>
                    </div>
                    <div className="card-body">
                        <form action="/miners" method="post">
                            <div className="form-group">

                                <select disabled={isLoading} value={ contractId } onChange={ e => setContractId(e.target.value) } className="form-control" name="contracts" id="contracts">
                                    <option disabled value=""> -- mining contracts -- </option>
                                    {
                                        contracts && contracts.length && contracts.length > 0 && contracts.map(contract => (
                                            <option key={ contract.id } value={ contract.id }>{ contract.name }</option>
                                        ))
                                    }   
                                </select>
                            </div>
                        </form>
                        <div className="table-responsive border userlist-table">
                            <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className="wd-lg-20p"><span>Miner</span></th>
                                        <th className="wd-lg-20p"><span>Balance ($)</span></th>
                                        <th className="wd-lg-20p"><span>Quantity</span></th>
                                        <th className="wd-lg-20p"><span>Expires</span></th>
                                        <th className="wd-lg-20p"><span>Status</span></th>
                                        <th className="wd-lg-20p">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        miners && miners.length && miners.length > 0 ? miners.map(miner => (

                                            <MiningGridDataItem key={ miner.id } miner={ miner } />
                                        )) : (
                                            isLoading ? (
                                                <tr>
                                                    <td colSpan={6}>
                                                        <Oval width={16} height={16} />
                                                    </td>
                                                </tr>
                                            ) : (
                                                <tr>
                                                    <td colSpan={6}>No miners to display</td>
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
        </div>
    )
}

export default MiningGrid