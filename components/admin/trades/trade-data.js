import { useEffect, useState } from "react"
import Link from "next/link"
import useSWR from "swr"
import TradesDataItem from "./trade-data-item"

const fetcher = (url) => fetch(url).then((r) => r.json())
function TradesData() {
	const [list, setList] = useState([])
	const { data, error } = useSWR("/api/trading/get-trades", fetcher, { refreshInterval: 1000 })

	useEffect(() => {
		if (!error) {
			if (data) {
				setList(data.data)
				// console.log(data)
			}
		}
	}, [data, error])

	return (
		<div className='row'>
			<div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin'>
				<div className='card'>
					<div className='card-header border-bottom-0 pb-0'>
						<div className='d-flex justify-content-between'>
							<label className='main-content-label mb-0 pt-1'>Trades Table</label>
							<div className='ml-auto float-right'></div>
						</div>
						<p className='tx-12 tx-gray-500 mt-0 mb-2'>List of trades.</p>
					</div>
					<div className='card-body'>
						<Link href='/admin/trades/create'>
							<a className='btn btn-primary mb-3'>Place trade</a>
						</Link>
						<div className='table-responsive border userlist-table'>
							<table className='table card-table table-striped table-vcenter text-nowrap mb-0'>
								<thead>
									<tr>
										<th className='wd-lg-20p'>
											<span>Trader</span>
										</th>
										<th className='wd-lg-20p'>
											<span>Asset</span>
										</th>
										<th className='wd-lg-20p'>
											<span>Value ($)</span>
										</th>
										<th className='wd-lg-20p'>
											<span>Duration</span>
										</th>
										<th className='wd-lg-20p'>
											<span>Status</span>
										</th>
										<th className='wd-lg-20p'>
											<span>Direction</span>
										</th>
										<th className='wd-lg-20p'>Gain</th>
										<th className='wd-lg-20p'>Action</th>
									</tr>
								</thead>
								<tbody>
									{list && list.length && list.length > 0 ? (
										list.map((item) => <TradesDataItem key={item.id} item={item} />)
									) : (
										<tr>
											<td colSpan={8}>No Active Trades found</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TradesData
