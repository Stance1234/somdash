import { useState } from 'react'
import WithdrawalDataItem from './withdrawal-data-item'

function WithdrawalListData({ withdrawals }) {
    const [list, setList] = useState(withdrawals || [])
    
    return (
        <div className="card-body p-0 pt-1">
            <div className="">
                <div className="table-responsive">
                    <table className="table text-nowrap" >
                        <thead className="border-top">
                            <tr>
                                <th className="bg-transparent">S.no</th>
                                <th className="bg-transparent">User</th>
                                <th className="bg-transparent">Amount ($)</th>
                                <th className="bg-transparent">Type</th>
                                <th className="bg-transparent">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list && list.length && list.length > 0 && (
                                        
                                    list.map((item, i) => <WithdrawalDataItem key={item.id} item={ item } count={ i + 1} length={ list.length } />)
                                        
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WithdrawalListData