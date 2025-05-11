/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Link from "next/link"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { BASE_IMG_URL } from "../../../config"
import { addTrader, removeTrader } from "../../../features/copy-trade/copyTradeSlice"

function TraderCopyData({ item, copied }) {
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)

	async function handleCopy({ _traderId }) {
		try {
			setIsLoading(true)

			const request = await fetch("/api/copy-trader/create", {
				method: "POST",
				body: JSON.stringify({ _traderId }),
				headers: {
					"Content-Type": "application/json",
				},
			})

			const response = await request.json()

			console.log(response)

			if (response.status === true) {
				dispatch(addTrader(response.copyTrade))
				setIsLoading(false)
				toast.success(response.message)
			} else {
				throw new Error(response.message)
			}
		} catch (error) {
			setIsLoading(false)
			toast.error(error.message)
		}
	}

	async function handleRemove({ _traderId }) {
		try {
			setIsLoading(true)

			const request = await fetch("/api/copy-trader/delete", {
				method: "DELETE",
				body: JSON.stringify({ _traderId }),
				headers: {
					"Content-Type": "application/json",
				},
			})

			const response = await request.json()

			if (response.status === true) {
				dispatch(removeTrader(response.copiedTrade._traderId))
				setIsLoading(false)
				toast.success(response.message)
			} else {
				throw new Error(response.message)
			}
		} catch (error) {
			setIsLoading(false)
			toast.error(error.message)
		}
	}

	return (
		<div className='row bg app-py-1'>
			<div className='col l3 center'>
				<img src={`${BASE_IMG_URL}${item.profile_img}`} className='circle' style={{ maxHeight: "100px" }} alt='' />
			</div>
			<div className='col l6'>
				<span>
					<a href={`/user/trading/traders/${item._id}`}>{item.name}</a>
				</span>
				<br />
				{item.type === "Bot" && (
					<>
						<span>BOT {item.price && `[$${item.price}]`}</span>
						<br />
					</>
				)}

				<span>{item.win_rate}% Win Rate</span>
				<br />
				<span>{item.profit_share}% Profit Share</span>
			</div>
			<div className='col l3'>
				<br />
				{item.type === "Bot" ? (
					<Link href={`/user/deposits/crypto?amount=500&amp;to=7&amp;comment=William Hartmann Bot Purchase`}>
						<a className='btn'>BUY</a>
					</Link>
				) : copied ? (
					<a disabled={isLoading} onClick={() => handleRemove({ _traderId: item._id })} className='btn'>
						Remove
					</a>
				) : (
					<a disabled={isLoading} onClick={() => handleCopy({ _traderId: item._id })} className='btn'>
						Copy
					</a>
				)}
			</div>
		</div>
	)
}

export default TraderCopyData
