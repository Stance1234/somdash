import mongoose from "mongoose"

const identitySchema = new mongoose.Schema({
    email: String,
    front: String,
    back: String
})

const IdentityModel = mongoose.models.Indentity || mongoose.model("Indentity", identitySchema)

export default IdentityModel