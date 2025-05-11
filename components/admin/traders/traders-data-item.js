/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { toast } from "react-toastify"
import { Oval } from "react-loader-spinner"
import { BASE_IMG_URL } from "../../../config"
import TraderModal from "./trader-edit-modal"

function TradersDataItem({ item }) {
	const [isDeleting, setIsDeleting] = useState(false)
	const { name, type, win_rate, _id, profile_img, profit_share, price } = item
	const [data, setData] = useState({ name, win_rate, profit_share, profile_img, price })
	const [showModal, setShowModal] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	async function handleDelete({ id }) {
		try {
			setIsDeleting(true)

			const request = await fetch("/api/trader/delete", {
				method: "DELETE",
				body: JSON.stringify({ id }),
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

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setIsLoading(true)

			if (!data.win_rate || !data.profit_share || !data.price) throw new Error("Enter atleast one field to update")

			const form = new FormData()

			Object.keys(data).forEach((key) => {
				form.append(key, data[key])
			})

			form.append("id", _id)
			const res = await fetch("/api/trader/create", {
				method: "PUT",
				body: form,
			})

			const response = await res.json()

			if (response.status === true) {
				// setData({ name: "", win_rate: "", profit_share: "", type: "", profile_img: null, price: "" })
				setShowModal(false)
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
		<>
			<tr>
				<td>
					<img alt='avatar' className='rounded-circle avatar-md mr-2' src={`${BASE_IMG_URL}${profile_img}`} />
				</td>
				<td>{name}</td>
				<td className='text-center'>
					<span className='label text-muted d-flex'>
						<span className='dot-label bg-gray-300 mr-1'></span>
						{type}
					</span>
				</td>
				<td>{win_rate}%</td>
				<td>{profit_share}%</td>
				<td>
					<a disabled={isDeleting} onClick={() => handleDelete({ id: _id })} href='#' className='btn btn-sm btn-danger'>
						<i className='fe fe-trash'></i>
					</a>
					<a onClick={() => setShowModal(true)} disabled={isDeleting} href='#' className='btn btn-sm bg-[#0018A8]-500'>
						<i className='fe fe-edit-2'></i>
					</a>
				</td>
			</tr>
			{showModal && (
				<TraderModal>
					<div className='fixed top-0 left-0 w-screen min-h-screen bg-black/50 backdrop-blur-md z-[99999]'>
						<form onSubmit={handleSubmit} className='max-w-2xl mt-10 mx-auto p-5 bg-white relative'>
							<button onClick={() => setShowModal(false)} className='absolute top-4 right-4 text-4xl'>
								&times;
							</button>
							<div>
								<h6 className='main-content-label mb-1'>Edit Trader</h6>
								<p className='text-muted card-sub-title'>Edit trader info for copying by users</p>
							</div>
							<div className='d-flex flex-column'>
								<div className='form-group'>
									<input
										name='name'
										className='form-control'
										placeholder='Name'
										type='text'
										required
										value={data.name}
										readOnly
										onChange={(e) => setData({ ...data, name: e.target.value })}
									/>
								</div>
								<div className='form-group'>
									<input
										name='win_rate'
										className='form-control'
										placeholder='Win Rate'
										type='number'
										value={data.method}
										onChange={(e) => setData({ ...data, win_rate: e.target.value })}
									/>
								</div>
								<div className='form-group'>
									<input
										name='profit_share'
										className='form-control'
										placeholder='Profit Share'
										type='number'
										value={data.address}
										onChange={(e) => setData({ ...data, profit_share: e.target.value })}
									/>
								</div>
								<div className='form-group'>
									<input
										name='price'
										className='form-control'
										placeholder='Price'
										type='number'
										value={data.address}
										onChange={(e) => setData({ ...data, price: e.target.value })}
									/>
								</div>

								<button
									name='submit'
									type='submit'
									disabled={isLoading}
									className={`py-2 bg-[#0018A8]-500 text-white rounded-md hover:bg-[#0018A8]-700 disabled:bg-[#0018A8]-200 ${
										isLoading && "animate-pulse"
									}`}>
									{isLoading ? <Oval height={30} width={30} secondaryColor='#fff' /> : <span>Submit</span>}
								</button>
							</div>
						</form>
					</div>
				</TraderModal>
			)}
		</>
	)
}

export default TradersDataItem
