import mongoose from "mongoose"

const assetSchema = new mongoose.Schema({
    name: String,
    logo: String,
    symbol: String,
    price: Number,
    type: String,
    _categoryId:  mongoose.Schema.Types.ObjectId
})

const AssetModel = mongoose.models.Asset || mongoose.model("Asset", assetSchema)

export default AssetModel