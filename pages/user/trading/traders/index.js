import { useState, useEffect } from "react"
import Head from "next/head"
import { getSession } from "next-auth/react"
import { useDispatch, useSelector } from "react-redux"
import AuthUserLayout from "../../../../components/layout/authUserLayout"
import UserModel from "../../../../models/user"
import TraderModel from "../../../../models/trader"
import CopyTraderModel from "../../../../models/copy_trader"
import TraderCopyData from "../../../../components/admin/copy-trader/copy-data"
import CopiedTraders from "../../../../components/admin/copy-trader/copied-traders"
import { setCopiedTradersList } from "../../../../features/copy-trade/copyTradeSlice"

function CopyTraders({ traders, copiedTraders }) {
	const dispatch = useDispatch()
	const [list, setList] = useState(JSON.parse(traders))
	const [copiedIds, setCopiedIds] = useState([])
	const copiedTradersList = useSelector((state) => state.copyTrade.traders)

	useEffect(() => {
		const copied = JSON.parse(copiedTraders)
		dispatch(setCopiedTradersList(copied))
	}, [])

	useEffect(() => {
		const temp = []
		list.map((item) => {
			copiedTradersList.map((c) => {
				if (item._id === c._traderId) {
					temp.push(item._id)
				}
			})
		})
		setCopiedIds(temp)
	}, [copiedTradersList])

	return (
		<AuthUserLayout>
			<Head>
				<title>Copy Traders - Octatradeglobal</title>
			</Head>
			<div className='row'>
				<br />
				<center>
					<b>COPY EXPERT TRADERS</b>
				</center>
				<br />
				<div className='col l6 s12 offset-l3'>
					<CopiedTraders copiedTraders={copiedTraders} />
					<ul className='collection'>
						{list && list.length && list.length > 0 ? (
							list.map((item) => (
								<TraderCopyData
									key={item._id}
									item={item}
									copied={copiedIds.includes(item._id)}
									setCopiedIds={setCopiedIds}
									copiedIds={copiedIds}
								/>
							))
						) : (
							<p>No Trader available</p>
						)}
					</ul>
				</div>
			</div>
		</AuthUserLayout>
	)
}

export default CopyTraders

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })
	let authorized = false

	if (session) {
		const email = session.user.email
		const user = await UserModel.findOne({ email })
		if (user) {
			authorized = true
		}
	}

	if (!authorized) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}

	const traders = await TraderModel.find({})

	const copiedTraders = await CopyTraderModel.find({})

	return {
		props: {
			traders: JSON.stringify(traders),
			copiedTraders: JSON.stringify(copiedTraders),
		},
	}
}
