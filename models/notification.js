import mongoose from "mongoose"

const notificationSchema = new mongoose.Schema({
    _userId: mongoose.Schema.Types.ObjectId,
    title: String,
    msg: String,
    type: { type: String, default: "info" }, // success, info, danger, warning
    created_at: { type: Date, default: Date.now }
})

const NotificationModel = mongoose.models.Notification || mongoose.model("Notification", notificationSchema)

export default NotificationModel