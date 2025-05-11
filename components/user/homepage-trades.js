import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { Oval } from "react-loader-spinner"
import TradeItems from "./tradeItems"

function HomepageTradesList() {
	const [tab, setTab] = useState("close")
	const [isLoading, setIsLoading] = useState(false)
	const [list, setList] = useState([])

	useEffect(() => {
		async function loadTrades() {
			try {
				const response = await fetch(`/api/trading/get-user-trades?status=${tab}`)
				const data = await response.json()

				const { status, message, trades } = data

				if (status === true) {
					setList(trades)
					setIsLoading(false)
				} else {
					throw new Error(message)
				}
			} catch (error) {
				setList([])
				// toast.error(error.message)
				setIsLoading(false)
			}
		}

		loadTrades()
	}, [tab])
	return (
		<div className='col l8 s12'>
			<center>
				<ul className='tabs bg'>
					<li className='tab col s6'>
						<a style={{ cursor: "pointer" }} onClick={() => setTab("close")} className={`${tab === "close" && "active"}`}>
							<span className='material-icons notranslate'>hourglass_full</span>
							<span>Closed</span>
						</a>
					</li>
					<li className='tab col s6'>
						<a style={{ cursor: "pointer" }} onClick={() => setTab("open")} className={`${tab === "open" && "active"}`}>
							<span className='material-icons notranslate'>hourglass_top</span>
							<span>Active </span>
						</a>
					</li>
					<li
						className='indicator'
						style={{ left: `${tab === "close" ? "0px" : "439px"}`, right: `${tab === "open" ? "0px" : "439px"}` }}></li>
				</ul>
			</center>
			<div className='active'>
				<div className='app-py-1'>
					<ul className='collection dark:bg-transparent'>
						{isLoading ? (
							<li className='collection-item app-py-2'>
								<Oval height={30} width={30} />
							</li>
						) : list && list.length && list.length > 0 ? (
							list.map((item) => <TradeItems key={item.id} trade={item} />)
						) : (
							<ul className='collection'>
								<li className='collection-item app-py-2'>
									<p id='no-data' style={{ textAlign: "center" }}>
										<span className='app-font-normal'>NO DATA</span>
									</p>
								</li>
							</ul>
						)}
					</ul>
				</div>
			</div>
			{/* <div id="open" style={{display: "none"}}>
                <div className="app-py-1">
                <ul className="collection">
                    <li className="collection-item app-py-2">
                    <p id="no-data" style={{textAlign: "center"}}>
                        <span className="app-font-normal">NO OPEN POSITIONS</span>
                    </p>
                    </li>
                </ul>
                </div>
            </div> */}
		</div>
	)
}

export default HomepageTradesList
