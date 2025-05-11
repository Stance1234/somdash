import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import UserModel from "../../../models/user"
import AssetsCategoryModel from "../../../models/assets-category"
import AssetsCategoriesData from "../../../components/admin/assets/assets-categories-data"
import AssetsCategoriesForm from "../../../components/admin/assets/assets-categories-form"
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import { setAssetCategoryList } from "../../../features/assets-category/assetsCategorySlice"

function AssetsCategories({ categories }) {
	const dispatch = useDispatch()

	useEffect(() => {
		const list = JSON.parse(categories)
		dispatch(setAssetCategoryList(list))
	}, [categories, dispatch])
	return (
		<AdminLayout>
			<BreadCrump title={"Assets"} crumb={"Assets Categories"} />
			<AssetsCategoriesData />
			<AssetsCategoriesForm />
		</AdminLayout>
	)
}

export default AssetsCategories

export async function getServerSideProps(context) {
	try {
		await mongoose.connect(process.env.MONGODB_URL)
		const session = await getSession({ req: context.req })
		let authorized = false

		if (session) {
			const email = session.user.email
			const user = await UserModel.findOne({ email })
			if (user.is_admin) {
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

		const categories = await AssetsCategoryModel.find({})

		return {
			props: {
				categories: JSON.stringify(categories),
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
