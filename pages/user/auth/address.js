import { useState } from "react"
import { NextSeo } from "next-seo"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import UserModel from "../../../models/user"
import UserLayout from "../../../components/layout/userLayout"

function ProfileAddress() {
	const router = useRouter()
	// const [profile] = useState(JSON.parse(user))
	const [state, setState] = useState("")
	const [city, setCity] = useState("")
	const [street, setStreet] = useState("")
	const [postalcode, setPostalcode] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setIsLoading(true)

			const response = await fetch("/api/auth/update-address", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ city, street, state, postalcode }),
			})

			const data = await response.json()

			const { status, message } = data

			if (status === true) {
				toast.success(message)
				router.push("/user/auth")
			} else {
				throw new Error(message)
			}
		} catch (error) {
			// console.log(error)
			toast.error(error.message)
			setIsLoading(false)
		}
	}

	return (
		<UserLayout>
			<NextSeo title='Home address' />
			<br />
			<h1 className='text-center text-black dark:text-slate-300 text-2xl'>Update Home Address</h1>
			<br />
			<div className='container'>
				{/* <div className="row">
                    <div className="col l6 s12 offset-l3">
                        <center>
                            <img
                                src={`${ profile.img ? `/uploads/${profile.img}` : "/uploads/images/camera.png"}`}
                                className="circle"
                                style={{ height: "200px" }}
                            />
                        </center>
                    </div>
                </div> */}
				<br />
				<div className='max-w-2xl mx-auto'>
					<form
						onSubmit={handleSubmit}
						autoComplete='off'
						className='shadow-2xl space-y-4 px-10 py-5 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0'>
						<div className='flex flex-col'>
							<label className='active' htmlFor='state'>
								State
							</label>
							<input
								type='text'
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='state'
								name='state'
								required
								value={state}
								onChange={(e) => setState(e.target.value)}
							/>
						</div>
						<div className='flex flex-col'>
							<label className='active' htmlFor='new-password'>
								City
							</label>
							<input
								type='text'
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='city'
								name='city'
								required
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
						<div className='flex flex-col'>
							<label className='active' htmlFor='new-password'>
								Street
							</label>
							<input
								type='text'
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='street'
								name='street'
								required
								value={street}
								onChange={(e) => setStreet(e.target.value)}
							/>
						</div>
						<div className='flex flex-col'>
							<label className='active' htmlFor='new-password'>
								Postalcode
							</label>
							<input
								type='text'
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='postalcode'
								name='postalcode'
								required
								value={postalcode}
								onChange={(e) => setPostalcode(e.target.value)}
							/>
						</div>
						<div>
							<button
								disabled={isLoading}
								type='submit'
								className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 w-2/3 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								{isLoading ? <Oval height={30} width={30} /> : <span>Update</span>}
							</button>
						</div>
					</form>
				</div>
			</div>
		</UserLayout>
	)
}

export default ProfileAddress

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				return {
					props: {},
				}
			}
		}

		return {
			redirect: {
				destination: "/signin",
				permanent: false,
			},
		}
	} catch (error) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}
}
