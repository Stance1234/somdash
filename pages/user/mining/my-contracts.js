import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import _ from "lodash"
import commaNumber from "comma-number"
import AuthUserLayout from "../../../components/layout/authUserLayout"
import UserModel from "../../../models/user"
import MiningContractModel from "../../../models/mining-contract"
import UserMiningContractModel from "../../../models/user-mining-contract"
import AssetModel from "../../../models/assets"

function AuthUserMining({ contracts, balance }) {
	return (
		<AuthUserLayout>
			<section className='pc-container' style={{ margin: "auto" }}>
				<div className='container'>
					<div className='center '>
						<h2 className='text-black dark:text-slate-300' style={{ margin: "0px", padding: "0px", fontWeight: "bold" }}>
							${commaNumber(balance.toFixed(2))}
						</h2>
						<span className='dark:text-slate-300' style={{ fontSize: "11px" }}>
							MINING BALANCE
						</span>
						<br />
					</div>
					<div className='container'>
						<br />
						<ul className='collection'>
							<li className='dark:text-slate-300' style={{ fontSize: "20px", textAlign: "center", marginBottom: "10px" }}>
								MY MINING CONTRACTS
							</li>
							{contracts && contracts.length && contracts.length > 0 ? (
								contracts.map((c) => (
									<li key={c.id} className='collection-item bg'>
										<div className='row'>
											<div className='col l1 center'>
												<img
													src={`/uploads/${c.logo}`}
													style={{ maxHeight: "40px", borderRadius: "10px" }}
												/>
											</div>
											<div className='col l9 s6'>
												{c.quantity.toFixed(6)} - {c.name}
												<br /> <span className='grey-text'>${commaNumber(c.balance.toFixed(2))}</span>
											</div>
											<div className='col l2'>
												<br />
												<span className='grey-text'>{c.status}</span>
												<br />
											</div>
										</div>
									</li>
								))
							) : (
								<li className='collection-item bg'>
									<div className='row'>
										<div className='col center'>No Mining contracts available</div>
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
			</section>
		</AuthUserLayout>
	)
}

export default AuthUserMining

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

		let balance = 0

		// TODO: load all user contract for the selected mining contract
		const userContracts = await UserMiningContractModel.find({ _userId: user.id })

		// TODO: load user info for each user mining contract loaded
		const data = []
		for (const userContract of userContracts) {
			const contract = await MiningContractModel.findById(userContract.id)
			const asset = await AssetModel.findById(contract._assetId)
			const expires_at = moment(userContract.expires_at).fromNow()
			const item = {
				id: userContract.id,
				// miner: `${contractUser.firstname} ${contractUser.lastname}`,
				name: contract.name,
				logo: asset.logo,
				balance: userContract.quantity * asset.price,
				quantity: userContract.quantity,
				status: userContract.status,
				expires_at,
			}

			balance += userContract.quantity * asset.price

			data.push(item)
		}

		return {
			props: {
				contracts: data,
				balance,
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
