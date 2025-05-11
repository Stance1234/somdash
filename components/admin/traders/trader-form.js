import { useState } from "react"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"

function TraderForm() {
	const [data, setData] = useState({ name: "", win_rate: null, profit_share: null, type: "", profile_img: null, price: null })
	const [isLoading, setIsLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()
		try {
			setIsLoading(true)

			if (!data.name) throw new Error("Enter trader's name")
			if (!data.win_rate) throw new Error("Please, specify a win rate")
			if (!data.profit_share) throw new Error("Please, specify trader's profit share")
			if (!data.type) throw new Error("Type of trader is important")
			if (!data.profile_img) throw new Error("Please, select a profile image")

			const form = new FormData()

			Object.keys(data).forEach((key) => {
				form.append(key, data[key])
			})

			// setIsLoading(false)

			const res = await fetch("/api/trader/create", {
				method: "POST",
				body: form,
			})

			const response = await res.json()

			if (response.status === true) {
				setData({ name: "", win_rate: "", profit_share: "", type: "", profile_img: null, price: "" })
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
		<div className='row'>
			<div className='col-lg-6 col-md-12'>
				<div className='card'>
					<form onSubmit={handleSubmit} className='card-body'>
						<div>
							<h6 className='main-content-label mb-1'>Add New Trader</h6>
							<p className='text-muted card-sub-title'>Add a new trader for copying by users</p>
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
									onChange={(e) => setData({ ...data, name: e.target.value })}
								/>
							</div>
							<div className='form-group'>
								<input
									name='win_rate'
									className='form-control'
									placeholder='Win Rate'
									type='number'
									required
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
									required
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
									required
									value={data.address}
									onChange={(e) => setData({ ...data, price: e.target.value })}
								/>
							</div>
							<div className='form-group m-0'>
								<label className='rdiobox'>
									<input
										checked={data.type === "Human"}
										required
										onChange={(e) => setData({ ...data, type: e.target.value })}
										name='type'
										type='radio'
										value='Human'
									/>
									<span>Human</span>
								</label>
								<label className='rdiobox'>
									<input
										checked={data.type === "Bot"}
										required
										onChange={(e) => setData({ ...data, type: e.target.value })}
										name='type'
										type='radio'
										value='Bot'
									/>
									<span>Bot</span>
								</label>
							</div>

							<div className='form-group'>
								<div className='input-group file-browser'>
									<input
										name='profilt_img_name'
										type='text'
										className='form-control border-right-0 browse-file'
										placeholder='choose'
										readOnly={true}
										value={data.profile_img?.name || ""}
										onChange={() => console.log("new file")}
									/>
									<label className='input-group-btn'>
										<span className='btn btn-primary'>
											Browse
											<input
												name='profilt_img'
												accept='image/*'
												type='file'
												style={{ display: "none" }}
												onChange={(e) => setData({ ...data, profile_img: e.target.files[0] })}
											/>
										</span>
									</label>
								</div>
							</div>
							<button name='submit' type='submit' disabled={isLoading} className='btn ripple btn-main-primary'>
								{isLoading ? <Oval height={30} width={30} /> : <span>Submit</span>}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default TraderForm
