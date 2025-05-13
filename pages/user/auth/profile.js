/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import { NextSeo } from "next-seo"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { toast } from "react-toastify"
import { BASE_IMG_URL } from "../../../config"
import UserModel from "../../../models/user"
import UserLayout from "../../../components/layout/userLayout"

function Profile({ user }) {
	const [profile] = useState(JSON.parse(user))
	return (
		<UserLayout>
			<NextSeo title={`${profile.firstname} ${profile.lastname}`} />
			<br />
			<h1 className='center text-black dark:text-slate-300 text-2xl font-semibold'>
				Profile
			</h1>
			<br />
			<div className='container'>
				<div className='row'>
					<div className='col l6 s12 offset-l3'>
						<center>
							<img
								src={`${profile.img ? `${BASE_IMG_URL}${profile.img}` : "/uploads/images/camera.png"}`}
								className='rounded-full shadow-md'
								style={{
									height: "200px",
									width: "200px",
									objectFit: "cover",
									border: "2px solid #e0e0e0",
									backgroundColor: "#f9f9f9",
								}}
								alt={profile.firstname}
							/>
						</center>
					</div>
				</div>
				<br />
				<div className='row pb-10'>
					<div className='col l6 s12 offset-l3'>
						<ul className='collection rounded-lg shadow-sm bg-white'>
							<li className='collection-item bg flex justify-between items-center'>
								<span className='text-gray-800 font-medium'>Name:</span>
								<span className='font-semibold text-gray-900 capitalize'>
									{profile.firstname} {profile.lastname}
								</span>
							</li>
							<li className='collection-item bg flex justify-between items-center'>
								<span className='text-gray-800 font-medium'>E-mail:</span>
								<span className='font-semibold text-gray-900'>{profile.email}</span>
							</li>
							<li className='collection-item bg flex justify-between items-center'>
								<span className='text-gray-800 font-medium'>Phonenumber:</span>
								<span className='font-semibold text-gray-900'>
									{profile.dial}
									{profile.mobile}
								</span>
							</li>
							<li className='collection-item bg flex justify-between items-center'>
								<span className='text-gray-800 font-medium'>Street:</span>
								<span className='font-semibold text-gray-900'>{profile.street}</span>
							</li>
							<li className='collection-item bg flex justify-between items-center'>
								<span className='text-gray-800 font-medium'>City:</span>
								<span className='font-semibold text-gray-900'>{profile.city}</span>
							</li>
							<li className='collection-item bg flex justify-between items-center'>
								<span className='text-gray-800 font-medium'>State:</span>
								<span className='font-semibold text-gray-900'>{profile.state}</span>
							</li>
							<CopyToClipboard
								text={`https://www.dashboard.yourtrade.com/signup?ref=${profile.refferal_code}`}
								onCopy={() => toast.success("Copied to clipboard!")}>
								<li
									className='collection-item bg cursor-pointer flex justify-between items-center hover:bg-gray-100'
									title='Click to copy link'>
									<span className='text-gray-800 font-medium'>Referral Link:</span>
									<span className='font-semibold text-blue-600'>
										{`https://www.dashboard.yourtrade.com/signup?ref=${profile.refferal_code}`}
									</span>
								</li>
							</CopyToClipboard>
						</ul>
					</div>
				</div>
				{/* <div style={{ marginBottom: "20px" }}></div> */}
			</div>
		</UserLayout>
	)
}

export default Profile

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				return {
					props: {
						user: JSON.stringify(user),
					},
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
