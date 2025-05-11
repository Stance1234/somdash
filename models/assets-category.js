import mongoose from "mongoose"

const assetsCategorySchema = new mongoose.Schema({
    name: String
})

const AssetsCategoryModel = mongoose.models.AssetsCategory || mongoose.model("AssetsCategory", assetsCategorySchema)

export default AssetsCategoryModel