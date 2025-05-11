import { useEffect, useState } from 'react'
import useSWR from 'swr'
import MiningDataItem from './mining-data-item'
// import TradersDataItem from './traders-data-item'

const fetcher = url => fetch(url).then(r => r.json())
function MiningData() {
    const [list, setList] = useState([])
    const { data, error } = useSWR('/api/mining/get', fetcher, { refreshInterval: 1000 })

    useEffect(() => {
        if(!error) {
            if(data) {
                setList(data.contracts)
            }
        }
    }, [data])
    
    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div className="card">
                    <div className="card-header border-bottom-0 pb-0">
                        <div className="d-flex justify-content-between">
                            <label className="main-content-label mb-0 pt-1">Mining Contracts Table</label>
                            <div className="ml-auto float-right">
                            </div>
                        </div>
                        <p className="tx-12 tx-gray-500 mt-0 mb-2">List of mining contracts.</p>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive border userlist-table">
                            <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className="wd-lg-8p"><span>Name</span></th>
                                        <th className="wd-lg-20p"><span></span></th>
                                        <th className="wd-lg-20p"><span>Mining power (GH/S)</span></th>
                                        <th className="wd-lg-20p"><span>Growth Rate</span></th>
                                        <th className="wd-lg-20p"><span>Duration (week)</span></th>
                                        <th className="wd-lg-20p">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list && list.length && list.length > 0 ? list.map(item => (
                                            <MiningDataItem key={item._id} item={item} />
                                        )) : (
                                            <tr>
                                                <td colSpan={6}>No Mining contract found</td>
                                            </tr>
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

export default MiningData