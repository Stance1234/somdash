import dbConnect from '../../../../lib/dbConnect'
import WithdrawalModel from '../../../../models/withdrawal'

export default async function handler(req, res) {
    await dbConnect()

    const { method } = req

    switch (method) {
        case 'GET':
            return getWithdrawal(req, res)
        // Add other methods (POST, PUT, DELETE) if needed
        default:
            res.setHeader('Allow', ['GET'])
            return res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function getWithdrawal(req, res) {
    const { id } = req.query

    if (!id) {
        return res.status(400).json({ status: false, message: 'Withdrawal ID is required' })
    }

    const withdrawal = await WithdrawalModel.findById(id).lean()
    // Add console log for debugging
    console.log('API DEBUG: Withdrawal fetched:', withdrawal)

    if (!withdrawal) {
        return res.status(404).json({ status: false, message: 'Withdrawal not found' })
    }

    // Ensure wallet_address is present for crypto withdrawals
    if (withdrawal.method === 'crypto' && (!withdrawal.wallet_address || withdrawal.wallet_address.trim() === '')) {
        console.warn('API WARNING: Crypto withdrawal missing wallet_address:', withdrawal._id)
        withdrawal.wallet_address = ''
    }

    return res.status(200).json({
        status: true,
        item: withdrawal
    })
}