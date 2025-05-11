import mongoose from "mongoose"

const signalchema = new mongoose.Schema({
    _userId: mongoose.Schema.Types.ObjectId,
    percentage: Number
})

const SignalModel = mongoose.models.Signal || mongoose.model("Signal", signalchema)

export default SignalModel