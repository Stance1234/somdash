import { getSession } from "next-auth/react"
import UserModel from "../../models/user"
import BreadCrump from "../../components/admin/bread-crump"
import AdminLayout from "../../components/layout/adminLayout"

function AdminDash() {
	return (
		<AdminLayout>
			<BreadCrump title={"Dashboard"} crumb={"Home dashboard"} />
			<div className='row'>nice</div>
		</AdminLayout>
	)
}

export default AdminDash

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

	return {
		props: {},
	}
}
