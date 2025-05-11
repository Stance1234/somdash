import { useState } from 'react'
import Head from 'next/head'
import { getSession } from 'next-auth/react'
import mongoose from 'mongoose'
import _ from 'lodash'
import AuthUserLayout from "../../../components/layout/authUserLayout"
import UserModel from '../../../models/user'
import UserTradingContractModel from '../../../models/trading-contract'
import TradeItems from '../../../components/user/tradeItems'


function OpenTradeList({ openTrades }) {
    const [trades, setTrades] = useState(JSON.parse(openTrades))
    // console.log()
    return (
        <AuthUserLayout>
            <Head>
                <title>Open Trades - Trademark</title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 style={{ textAlign: "center" }}>Open Trades</h2>
                    </div>
                </div>
                <div className="row">
                    <ul className="collection">
                        {
                            trades && trades.length && trades.length > 0 ? trades.map(trade => (
                                <TradeItems key={trade.id} trade={trade} />
                            )) : (

                                <li className="collection-item app-py-2">
                                    <p id="no-data" style={{textAlign: "center"}}>
                                        <span className="app-font-normal">
                                            NO OPEN POSITIONS
                                        </span>
                                    </p>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <br />
                <br />
            </div>
        </AuthUserLayout>
    )
}

export default OpenTradeList

export async function getServerSideProps(context) {

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        const session = await getSession({ req: context.req })

        const user = await UserModel.findOne({ email: session.user.email })
        if(!session) {
            if(!user) {

                return {
                    redirect:{
                        destination: "/signin",
                        permanent: false
                    }
                }
            }
        } 

        const openTradesDB = await UserTradingContractModel.find({ _userId: user.id, status: "open" })
        const openTrades = _.map(openTradesDB, trade => _.pick(trade, ["id", "trade_value", "duration", "direction", "status", "_assetId", "gain"]))

        // openTrades.duration = openTrades.duration.toString()

        return {
            props: { 
                openTrades: JSON.stringify(openTrades)
            }
        }
    } catch(error) {
        
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
}