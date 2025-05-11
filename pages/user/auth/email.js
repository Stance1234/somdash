import { useState } from "react"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import { Oval } from "react-loader-spinner"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import UserModel from "../../../models/user"
import UserLayout from "../../../components/layout/userLayout"
import { NextSeo } from "next-seo"

function ProfileEmail() {
	const router = useRouter()
	// const [profile] = useState(JSON.parse(user))
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setIsLoading(true)

			const response = await fetch("/api/auth/update-email", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
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
			<NextSeo title='Update E-mail address' />
			<br />
			<h1 className='text-center text-black dark:text-slate-300 text-2xl'>Update E-mail</h1>
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
							<label htmlFor='email'>New e-mail</label>
							<input
								type='email'
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='email'
								name='email'
								autoComplete='new-email'
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='password'>password</label>
							<input
								type='password'
								className='border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500'
								id='password'
								name='password'
								autoComplete='new-password'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div>
							<button
								disabled={isLoading}
								type='submit'
								className='bg-[#0018A8]-500 text-slate-300 py-2 px-8 w-2/3 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800'>
								{isLoading ? <Oval height={30} width={30} /> : <span>Save</span>}
							</button>
						</div>
					</form>
				</div>
			</div>
		</UserLayout>
	)
}

export default ProfileEmail

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
