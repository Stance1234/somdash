import mongoose from "mongoose"

const savedAssetSchema = new mongoose.Schema({
    _userId:  mongoose.Schema.Types.ObjectId,
    _assetId:  mongoose.Schema.Types.ObjectId
})

const SavedAssetModel = mongoose.models.SavedAsset || mongoose.model("SavedAsset", savedAssetSchema)

export default SavedAssetModel