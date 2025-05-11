/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import { BASE_IMG_URL } from "../../../config"

function UserProfileDisplay() {
	const router = useRouter()
	const { userId } = router.query
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [profile, setProfile] = useState({})
	const [signal, setSignal] = useState(0)
	const [isUpdating, setIsUpdating] = useState(false)
	const [isApproving, setIsApproving] = useState(false)
	const [isDeleting, setIsDeleting] = useState(false)

	async function approveUserProfile() {
		try {
			setIsApproving(true)

			const response = await fetch(`/api/user/${userId}/approve`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			})

			const data = await response.json()

			const { status, message } = data

			if (status === true) {
				toast.success(message)
				setIsApproving(false)
				setProfile({ ...profile, is_verified: true })
			} else {
				throw new Error(message)
			}
		} catch (error) {
			toast.error(error.message)
			setIsApproving(false)
		}
	}

	async function deleteUserProfile() {
		try {
			setIsDeleting(true)

			const response = await fetch(`/api/user/${userId}/delete`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})

			const data = await response.json()

			const { status, message } = data

			if (status === true) {
				toast.success(message)
				router.push("/admin/users")
			} else {
				throw new Error(message)
			}
		} catch (error) {
			toast.error(error.message)
			setIsDeleting(false)
		}
	}

	async function updateSignalStrength(e) {
		e.preventDefault()
		try {
			setIsUpdating(true)

			const response = await fetch(`/api/user/${userId}/update-signal`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ signal }),
			})

			const data = await response.json()

			const { status, message } = data

			if (status === true) {
				setIsUpdating(false)
				toast.success(message)
			} else {
				throw new Error(message)
			}
		} catch (error) {
			toast.error(error.message)
			setIsUpdating(false)
		}
	}

	useEffect(() => {
		async function loadProfile() {
			try {
				setIsLoading(true)
				const response = await fetch(`/api/user/${userId}/profile`)

				const data = await response.json()

				const { status, message, user } = data

				if (status === true) {
					setProfile(user)
					setSignal(user.signal_strength || 1)
					setIsError(false)
					setIsLoading(false)
				} else {
					throw new Error(message)
				}
			} catch (error) {
				toast.error(error.message)
				setSignal(0)
				setProfile({})
				setIsError(true)
				setIsLoading(false)
			}
		}

		loadProfile()
	}, [userId])
	return (
		<div className='row'>
			<div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin'>
				<div className='card'>
					{/* <div className="card-header border-bottom-0 pb-0">
                        <div className="d-flex justify-content-between">
                            <label className="main-content-label mb-0 pt-1">Users Table</label>
                            <div className="ml-auto float-right">
                            </div>
                        </div>
                        <p className="tx-12 tx-gray-500 mt-0 mb-2">List of users.</p>
                    </div> */}
					<div className='card-body'>
						{isLoading ? (
							<Oval height={200} width={200} />
						) : (
							<div className='tab-pane fade active show' id='profile' role='tabpanel'>
								{isError ? (
									<div className='d-flex align-items-start pb-3'>An error occured</div>
								) : (
									<>
										<div className='d-flex align-items-start pb-3'>
											<img
												src={`${BASE_IMG_URL}${profile.img ? profile.img : "camera.png"}`}
												className='img rounded-circle avatar-xl'
												alt={profile.firstname}
											/>
											<div className='pl-sm-4 pl-2' id='img-section'>
												<b>
													{profile.firstname} {profile.lastname}
												</b>
												{/* <p className="mb-1">Accepted file type .png. Less than 1MB</p> */}
												<br />
												<button
													onClick={approveUserProfile}
													disabled={profile.is_verified || isApproving}
													className='btn button border btn-sm btn-success'>
													<b>{profile.is_verified ? "Approved" : "Approve"}</b>
												</button>
												<button
													onClick={deleteUserProfile}
													disabled={isDeleting}
													className='btn button border btn-sm btn-danger'>
													<b>{isDeleting ? "Deleting..." : "Delete Account"}</b>
												</button>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<form disabled={isUpdating} onSubmit={updateSignalStrength} action='/signal'>
													<label htmlFor='signal-strength'>Strength: {signal}</label>
													<input
														disabled={isUpdating}
														type='range'
														min='1'
														max='100'
														onChange={(e) => setSignal(e.target.value)}
														value={signal}
														className='form-control signal-strength'
														id='signal-strength'
													/>
													<button
														disabled={isUpdating}
														type='submit'
														className='btn btn-sm btn-primary btn-rounded'>
														{isUpdating ? (
															<span>Updating...</span>
														) : (
															<span>Update signal strength</span>
														)}
													</button>
												</form>
											</div>
										</div>
										<div className='py-2'>
											<div className='row py-2'>
												<div className='col-md-6'>
													<label id='emailid'>Email Address</label>
													<input
														readOnly
														type='text'
														className='form-control'
														placeholder='steve_@email.com'
														value={profile.email}
													/>
												</div>
												<div className='col-md-6 pt-md-0 pt-3'>
													<label id='phoneno'>Phone Number</label>
													<input
														readOnly
														type='tel'
														className='form-control'
														placeholder='+1 213-548-6015'
														value={` ${profile.dial}${profile.mobile}`}
													/>
												</div>
											</div>
											<div className='row py-2'>
												<div className='col-md-6'>
													<label htmlFor='country'>Country</label>
													<input
														readOnly
														type='text'
														className='form-control'
														placeholder='United States'
														value={profile.country}
													/>
												</div>
												<div className='col-md-6 pt-md-0 pt-3' id='lang'>
													<label htmlFor='state'>State</label>
													<input
														readOnly
														type='text'
														className='form-control'
														placeholder='State...'
														value={profile.state}
													/>
												</div>
											</div>
											<div className='row py-2'>
												<div className='col-md-6'>
													<label htmlFor='country'>City</label>
													<input
														readOnly
														type='text'
														className='form-control'
														placeholder='City...'
														value={profile.city}
													/>
												</div>
												<div className='col-md-6 pt-md-0 pt-3' id='lang'>
													<label htmlFor='state'>Address</label>
													<input
														readOnly
														type='text'
														className='form-control'
														placeholder='No 3 French road'
														value={profile.street}
													/>
												</div>
											</div>
											<div className='row py-2'>
												<div className='col-md-6'>
													<label htmlFor='country'>Postal Code</label>
													<input
														readOnly
														type='text'
														className='form-control'
														placeholder='123456...'
														value={profile.postcode}
													/>
												</div>
												<div className='col-md-6'>
													<label htmlFor='password'>Password</label>
													<input
														readOnly
														type='text'
														id='password'
														className='form-control'
														placeholder='123456...'
														value={profile.temp_password}
													/>
												</div>
											</div>
										</div>
									</>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfileDisplay
