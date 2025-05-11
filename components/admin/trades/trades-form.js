import { useState, useEffect } from "react"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import Select from "react-select"
import makeAnimated from "react-select/animated"

const initialState = {
	user: "",
	userList: [],
	category: "",
	asset: "",
	value: "",
	duration: "",
	direction: "",
}

const animatedComponents = makeAnimated()

function TradesForm({ users, categories }) {
	const [data, setData] = useState(initialState)
	const [isLoading, setIsLoading] = useState(false)
	const [assets, setAssets] = useState([])

	useEffect(() => {
		if (!data.category) return

		async function getAssets({ categoryId }) {
			try {
				setIsLoading(true)
				const response = await fetch(`/api/assets/categories/${categoryId}/items`)

				const data = await response.json()

				const { status, message, assets } = data

				if (status === true) {
					setAssets(assets)
					setIsLoading(false)
				} else {
					throw new Error(message)
				}
			} catch (error) {
				setIsLoading(false)
				toast.error(error.message)
			}
		}

		getAssets({ categoryId: data.category })
	}, [data.category])

	// const list = JSON.parse(categories)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setIsLoading(true)

			if (!data.userList.length) throw new Error("Select a user")
			if (!data.category) throw new Error("Select asset category")
			if (!data.asset) throw new Error("Select assets")
			if (!data.value) throw new Error("Enter trading value")
			if (!data.duration) throw new Error("Select duration")
			if (!data.direction) throw new Error("Select direction of trade")

			const response = await fetch("/api/trading/admin-placetrade", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})

			const item = await response.json()

			const { status, message } = item

			if (status === true) {
				toast.success(message)
				setIsLoading(false)
				setData(initialState)
			} else {
				throw new Error(message)
			}
		} catch (error) {
			toast.error(error.message)
			setIsLoading(false)
		}
	}

	return (
		<div className='row'>
			<div className='col-lg-6 col-md-12'>
				<div className='card'>
					<form onSubmit={handleSubmit} className='card-body'>
						<div>
							<h6 className='main-content-label mb-1'>Create new trade</h6>
							<p className='text-muted card-sub-title'>Help users trade</p>
						</div>
						<div className='form-group'>
							{/* <select
								className='form-control'
								value={data.user}
								onChange={(e) => setData({ ...data, user: e.target.value })}
								multiple>
								<option label='Select user' data-select2-id='15' value='' disabled></option>
								{users &&
									users.length &&
									users.length > 0 &&
									users.map((item) => (
										<option
											key={item.id}
											value={item.id}
											data-select2-id={item.id}>{`${item.firstname} ${item.lastname}`}</option>
									))}
							</select> */}
							<Select
								className='form-control'
								closeMenuOnSelect={false}
								components={animatedComponents}
								isMulti
								options={
									users &&
									users.length &&
									users.length > 0 &&
									users.map((item) => ({ value: item.id, label: `${item.firstname} ${item.lastname}` }))
								}
								onChange={(incoming) => setData({ ...data, userList: incoming })}
								value={data.userList}
							/>
						</div>
						<div className='form-group'>
							<select
								className='form-control'
								value={data.category}
								onChange={(e) => setData({ ...data, category: e.target.value })}>
								<option label='Select category' data-select2-id='15' value='' disabled></option>
								{categories &&
									categories.length &&
									categories.length > 0 &&
									categories.map((item) => (
										<option key={item.id} value={item.id} data-select2-id={item.id}>
											{item.name}
										</option>
									))}
							</select>
						</div>
						<div className='form-group'>
							<select
								className='form-control'
								value={data.asset}
								onChange={(e) => setData({ ...data, asset: e.target.value })}>
								<option label='Select asset' data-select2-id='15' value='' disabled></option>
								{assets &&
									assets.length &&
									assets.length > 0 &&
									assets.map((item) => (
										<option key={item._id} value={item._id} data-select2-id={item._id}>
											{item.name}
										</option>
									))}
							</select>
						</div>
						<div className='d-flex flex-column'>
							<div className='form-group'>
								<input
									className='form-control'
									placeholder='Enter trade value'
									type='number'
									value={data.value}
									onChange={(e) => setData({ ...data, value: e.target.value })}
								/>
							</div>

							<div className='form-group'>
								<input
									className='form-control'
									placeholder='Select duration of trade'
									type='datetime-local'
									value={data.duration}
									onChange={(e) => setData({ ...data, duration: e.target.value })}
								/>
							</div>
							<div className='form-group'>
								<select
									className='form-control'
									value={data.direction}
									onChange={(e) => setData({ ...data, direction: e.target.value })}>
									<option label='Select direction' data-select2-id='15' value='' disabled></option>
									<option value='up' data-select2-id='up'>
										Up
									</option>
									<option value='down' data-select2-id='down'>
										Down
									</option>
								</select>
							</div>
							<button className='btn ripple btn-main-primary'>
								{isLoading ? <Oval height={20} width={20} color='#fff' /> : <span>Place Trade</span>}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default TradesForm
