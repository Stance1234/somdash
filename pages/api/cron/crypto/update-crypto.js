import mongoose from 'mongoose'
import CoinMarketCap from 'coinmarketcap-api'


async function handler(req, res) {
    // ! Only PUT mothod is accepted
    if (req.method === 'PUT') {

        try {
            await mongoose.connect(process.env.MONGODB_URL)

            const client = new CoinMarketCap(process.env.COINMARKETCAP_API)

            const data = await client.getQuotes({id: '1'})

            console.log(data)

            res.status(200).json({ status: true, message: "Mining contracts updated successfully" })
            
        } catch(error) {
            
            res.status(500).json({ status: false, message: "Something went"})
        }
        
        // mongoose.close()
    } else {
        //Response for other than POST method
        res.status(500).json({ status: false, message: 'Route not valid' });
    }
}

export default handler;