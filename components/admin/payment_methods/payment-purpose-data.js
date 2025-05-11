import { useEffect, useState } from 'react'
import useSWR from 'swr'
import PaymentPurposeDataItem from './payment-pupose-data-item'

const fetcher = url => fetch(url).then(r => r.json())
function PaymentPurposeData({ paymentPurposes }) {
    const [list, setList] = useState(JSON.parse(paymentPurposes))
    const { data, error } = useSWR('/api/payment-purpose/get', fetcher, { refreshInterval: 1000 })

    useEffect(() => {
        if(!error) {
            if(data) {
                setList(data.paymentPurposes)
            }
        }
    }, [data])

    return (
        <div className="card-body p-0 pt-1">
            <div className="">
                <div className="table-responsive">
                    <table className="table text-nowrap" >
                        <thead className="border-top">
                            <tr>
                                <th className="bg-transparent">S.no</th>
                                <th className="bg-transparent">Name</th>
                                <th className="bg-transparent">Desc</th>
                                <th className="bg-transparent">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list && list.length && list.length > 0 && (
                                        
                                    list.map((item, i) => <PaymentPurposeDataItem key={item._id} item={ item } count={ i + 1} length={ list.length } />)
                                        
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaymentPurposeData