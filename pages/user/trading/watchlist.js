import { useState } from "react"
import Head from "next/head"
import mongoose from "mongoose"
import { getSession } from "next-auth/react"
import _ from "lodash"
import { toast } from "react-toastify"
import { BASE_IMG_URL } from "../../../config"
import UserModel from "../../../models/user"
import SavedAssetModel from "../../../models/saved-assets"
import AssetModel from "../../../models/assets"
import AuthUserLayout from "../../../components/layout/authUserLayout"

function TradingWatchlist({ assets }) {
	const [userSavedAssets, setUserSavedAssets] = useState(assets)
	const [isLoading, setIsLoading] = useState(false)

	async function removeFromSavedAssets({ assetId }) {
		try {
			if (isLoading) return

			setIsLoading(true)
			const response = await fetch("/api/assets/items/remove-saved", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ assetId }),
			})

			const data = await response.json()

			const { status, message } = data

			if (status === true) {
				const filteredList = userSavedAssets.filter((asset) => asset.id !== assetId)
				setUserSavedAssets(filteredList)
				setIsLoading(false)
				toast.success(message)
			} else {
				throw new Error(message)
			}
		} catch (error) {
			toast.error(error.message)
			setIsLoading(false)
		}
	}
	return (
		<AuthUserLayout>
			<Head>
				<title>Assets Markets - yourtrade</title>
			</Head>
			<div className='container'>
				<center>
					<p>
						<b>WATCH LIST</b>
					</p>
					<br />
				</center>
				<br />
				<br />
				<div className='container'>
					<ul className='collection'>
						{userSavedAssets && userSavedAssets.length && userSavedAssets.length > 0 ? (
							userSavedAssets.map((item) => (
								<li key={item.id} className='collection-item app-py-1'>
									<div className='row'>
										{" "}
										{/* // ? on click, link to traderoom with symbol  */}
										<div className='col l1 s2'>
											<center>
												<img
													className='cryptoicons'
													src={`${BASE_IMG_URL}${item.logo}`}
													style={{ borderRadius: "5px", width: "60px" }}
												/>
											</center>
										</div>
										<div className='col l8 s4'>
											<p>{item.name}</p>
											<span style={{ fontSize: "12px" }}>{item.type}</span>
										</div>
										<div className='col l2 s4' style={{ paddingTop: "10px" }}></div>
										<div className='col l1 s2' style={{ paddingTop: "10px" }}>
											<span
												onClick={() => removeFromSavedAssets({ assetId: item.id })}
												className='material-icons'
												style={{ color: "gold" }}>
												star
											</span>
										</div>
									</div>
								</li>
							))
						) : (
							<li className='collection-item app-py-1'>
								<div className='row'>
									<div className='col'>
										<center>Not saved assets</center>
									</div>
								</div>
							</li>
						)}
					</ul>
				</div>
			</div>
		</AuthUserLayout>
	)
}

export default TradingWatchlist

export async function getServerSideProps(context) {
	try {
		await mongoose.connect(process.env.MONGODB_URL)

		const session = await getSession({ req: context.req })

		const user = await UserModel.findOne({ email: session.user.email })
		if (!session) {
			if (!user) {
				return {
					redirect: {
						destination: "/signin",
						permanent: false,
					},
				}
			}
		}

		const savedAssets = await SavedAssetModel.find({ _userId: user.id }, "_assetId")
		const savedAssetsIDs = savedAssets.map((assets) => assets._assetId.toString())

		const assetsDB = await AssetModel.find({ _id: { $in: savedAssetsIDs } })
		const assets = _.map(assetsDB, (asset) => _.pick(asset, ["id", "name", "price", "logo", "symbol", "type"]))

		return {
			props: {
				assets,
			},
		}
	} catch (error) {
		console.log(error.message)
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}
}
