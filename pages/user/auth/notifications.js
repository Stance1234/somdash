import { useState } from "react"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import _ from "lodash"
import moment from "moment"
import UserModel from "../../../models/user"
import NotificationModel from "../../../models/notification"
import UserLayout from "../../../components/layout/userLayout"

function UserNotifications({ notifications }) {
	const [data] = useState(JSON.parse(notifications))

	return (
		<UserLayout>
			<br />
			<h1 className='center text-black dark:text-slate-300'>Notifications</h1>
			<br />
			<div className='container'>
				<div className='row'>
					<div className='col l6 s12 offset-l3'>
						<ul className='collections'>
							{data && data.length && data.length > 0 ? (
								data.map(({ title, msg, type, created_at, id }) => (
									<li key={id} className={`collection-item bg app-p-3 app-my-2 notice-${type}`}>
										<h3 style={{ color: "inherit" }}>{title}</h3>
										<p>{msg}</p>
										<small style={{ display: "block", textAlign: "right" }}>
											{moment(created_at).format("D/MM/YY")}
										</small>
									</li>
								))
							) : (
								<li className='collection-item bg app-p-3'>No notifications</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</UserLayout>
	)
}

export default UserNotifications

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req })

	try {
		await mongoose.connect(process.env.MONGODB_URL)

		if (session) {
			const user = await UserModel.findOne({ email: session.user.email })

			if (user) {
				const notificationsDB = await NotificationModel.find({ _userId: user.id })
				const notifications = _.map(notificationsDB, (notification) =>
					_.pick(notification, ["id", "title", "type", "msg", "created_at"])
				)
				return {
					props: {
						notifications: JSON.stringify(notifications),
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
