import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { BASE_IMG_URL } from '../../../config'

const fetcher = url => fetch(url).then(r => r.json())
function UserCopiedTraders() {
    const router = useRouter()
    const { userId } = router.query
    const [list, setList] = useState([])
    const { data, error } = useSWR(`/api/user/${ userId }/copied-traders`, fetcher, { refreshInterval: 1000 })

    useEffect(() => {
        if(!error) {
            if(data) {
                setList(data.traders)
            }
        }
    }, [data])

    return (
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                <div className="card">
                    <div className="card-header border-bottom-0 pb-0">
                        <div className="d-flex justify-content-between">
                            <label className="main-content-label mb-0 pt-1">Copied Traders Table</label>
                            <div className="ml-auto float-right">
                            </div>
                        </div>
                        <p className="tx-12 tx-gray-500 mt-0 mb-2">List of copied traders.</p>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive border userlist-table">
                            <table className="table card-table table-striped table-vcenter text-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className="wd-lg-8p"><span>Trader</span></th>
                                        <th className="wd-lg-20p"><span></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list && list.length && list.length > 0 ? list.map(item => (
                                            <tr key={ item.id }>
                                                <td>
                                                    <img alt="avatar" className="rounded-circle avatar-md mr-2" src={`${ BASE_IMG_URL }${ item.trader_profile_img }`}/>
                                                </td>
                                                <td>{ item.trader_name }</td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={6}>No Traders found</td>
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

export default UserCopiedTraders