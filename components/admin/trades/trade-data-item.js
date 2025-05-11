import { useState } from "react"
import { toast } from "react-toastify"
import commaNumber from "comma-number"

function TradesDataItem({ item }) {
	const [isDeleting, setIsDeleting] = useState(false)
	const [gain, setGain] = useState("")
	const { id, trader, asset, value, duration, status, direction } = item
	async function handleUpdate({ id, type, gain }) {
		try {
			setIsDeleting(true)

			const request = await fetch("/api/trading/update-status", {
				method: "PUT",
				body: JSON.stringify({ id, type, gain }),
				headers: {
					"Content-Type": "application/json",
				},
			})

			const response = await request.json()

			if (response.status === true) {
				setIsDeleting(false)
				toast.success(response.message)
			} else {
				throw new Error(response.message)
			}
		} catch (error) {
			setIsDeleting(false)
			toast.error(error.message)
		}
	}
	return (
		<tr>
			<td>{trader}</td>
			<td>{asset}</td>
			<td>{commaNumber(value)}</td>
			<td>{duration}</td>
			<td>{status}</td>
			<td>{direction}</td>
			<td>
				<input
					className='px-3 py-2 outline-none max-w-[100px]'
					type='number'
					value={gain}
					onChange={(e) => setGain(e.target.value)}
				/>
			</td>
			<td className='flex gap-3'>
				{status === "open" && (
					<>
						<a
							title='Close trade with lose'
							disabled={isDeleting}
							onClick={() => handleUpdate({ id, type: "lose" })}
							href='#'
							className='px-3 py-2 bg-red-500 text-white rounded-md'>
							<i className='fe fe-arrow-down'></i>
						</a>
						<a
							title='Close trade with gain'
							disabled={isDeleting}
							onClick={() => handleUpdate({ id, type: "gain", gain })}
							href='#'
							className='px-3 py-2 bg-green-500 text-white rounded-md'>
							<i className='fe fe-arrow-up'></i>
						</a>
					</>
				)}
			</td>
		</tr>
	)
}

export default TradesDataItem
