import { getSession } from "next-auth/react"
import UserModel from "../../../models/user"
import TraderModel from "../../../models/trader"
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import TradersData from "../../../components/admin/traders/traders-data"
import TraderForm from "../../../components/admin/traders/trader-form"

function Traders({ traders }) {
	return (
		<AdminLayout>
			<BreadCrump title={"Traders"} crumb={"Home traders"} />
			<TradersData traders={traders} />
			<TraderForm />
		</AdminLayout>
	)
}

export default Traders

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })
	let authorized = false

	if (session) {
		const email = session.user.email
		const user = await UserModel.findOne({ email })
		if (user && user.is_admin) {
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

	return {
		props: {
			traders: JSON.stringify(traders),
		},
	}
}
