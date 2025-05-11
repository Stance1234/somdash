import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'
import mongoose from 'mongoose'
import _ from 'lodash'
import { getSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import commaNumber from 'comma-number'
import UserModel from '../../../models/user'
import AssetsCategoryModel from '../../../models/assets-category'
import AssetModel from '../../../models/assets'
import UserTradingFundModel from '../../../models/trading-balance'
import UserTradingContractModel from '../../../models/trading-contract'
import TradeItems from '../../../components/user/tradeItems'

function TradeRoom({ categories, assets, tradingFund, openTrades }) {
    const [cate, setCate] = useState(categories)
    const [assetsList, setAssetsList] = useState(assets)
    const [selectedCategory, setSelectedCategory] = useState(cate[0]?.id || "")
    const [selectedAsset, setSelectedAsset] = useState(assets[0]?.symbol || "")
    const [assetPrice, setAssetPrice] = useState(0)
    const [fund, setFund] = useState(tradingFund.balance)
    const [trades, setTrades] = useState([])
    
    useEffect(() => {
        try {
            const newTrades = JSON.parse(openTrades)
            setTrades(newTrades)
        } catch (error) {
            setTrades([])
        }

    }, [openTrades])

    // trading
    const [tradeDuration, setTradeDuration] = useState(10)
    const [tradeDirection, setTradeDirection] = useState("")
    const [isTrading, setIsTrading] = useState(false)

    async function getNewAssets() {
        try {
            const response = await fetch(`/api/assets/categories/${ selectedCategory }/assets`)

            const data = await response.json()

            const { status, message, assets: dataAssets } = data

            if(status === true) {
                setAssetsList(dataAssets)
            } else {
                setAssetsList([])
                throw new Error(message)
            }

        } catch(error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        const item = assetsList.findIndex(asset => asset.symbol === selectedAsset)
        if(item >= 0) {
            setAssetPrice(assetsList[item].price)
        } else {
            setAssetPrice(0.0)
        }
    })

    useEffect(() => {
        getNewAssets()
    }, [selectedCategory])

    async function placeTrade(e) {
        e.preventDefault()

        let assetId = null

        const item = assetsList.findIndex(asset => asset.symbol === selectedAsset)
        if(item >= 0) {
            assetId = assetsList[item].id
        }

        try {
            const response = await fetch("/api/trading/placetrade", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ direction: tradeDirection, trade_value: assetPrice, duration: tradeDuration, assetId })
            })

            const data = await response.json()

            const { status, message } = data

            if(status === true) {
                toast.success("trade open")
            } else {
                throw new Error(message)
            }

        } catch(error) {
            toast.error(error.message)
        }
    }

    return (
        <div>
            <Head>
                <title>Traderoom - Trademark</title>
                <link rel="stylesheet" href="/css/reactapp-modules.css" />
                <link rel="stylesheet" href="/css/reactapp.css" />
                <link rel="stylesheet" href="/css/custom.css" />
            </Head>
            <div className="row">
                <div className="col l1 s12 center hide-on-med-and-down">
                    <ul>
                        <li className="tab">
                            <Link href="/user">
                                <a>
                                    <br />
                                    <br />
                                    <span className="material-icons notranslate">home</span>
                                    <br />
                                    HOME
                                    <br />
                                    <br />
                                </a>
                            </Link>
                        </li>
                        <br />
                        <li className="tab">
                            <Link href="/user/traderoom">
                                <a className="active"
                                    ><br /><span className="material-icons notranslate"
                                        >access_time</span
                                    ><br />BINARY OPTIONS<br
                                /></a>
                            </Link>
                        </li>
                        <br />
                        <li className="tab">
                            <Link href="/user/traderoom/open">
                                <a className="">
                                    <br />
                                    <span className="material-icons notranslate">
                                        hourglass_top
                                    </span>
                                    <br />
                                    OPEN
                                    <br />
                                    TRADES
                                    <br/>
                                </a>
                            </Link>
                        </li>
                        <br />
                        <li className="tab">
                            <Link href="/user/traderoom/closed">
                                <a className="">
                                    <br />
                                    <span className="material-icons notranslate">
                                        hourglass_full
                                    </span>
                                    <br />
                                    CLOSED TRADES
                                    <br/>
                                </a>
                            </Link>
                        </li>
                        <br />
                    </ul>
                </div>
                <div className="col l11 s12">
                    <div className="row">
                        <div className="col l5 hide-on-med-and-down">
                            <div
                                style={{
                                    marginRight: "1px",
                                    marginTop: "4px",
                                    marginBottom: "0px",
                                    display: "inline-block"
                                }}
                            >
                                <select value={ selectedCategory } onChange={e => setSelectedCategory(e.target.value)} id="market" className="browser-default">
                                    {
                                        cate && cate.length && cate.length > 0 && cate.map(c => (

                                            <option key={ c.id } value={ c.id }>{ c.name }</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div
                                style={{
                                    marginRight: "1px",
                                    marginTop: "4px",
                                    marginBottom: "0px",
                                    display: "inline-block"
                                }}
                            >
                                <select value={ selectedAsset } onChange={e => setSelectedAsset(e.target.value)} id="symbol" className="browser-default">
                                    {
                                        assetsList && assetsList.length && assetsList.length > 0 && assetsList.map(a => (

                                            <option key={ a.id } value={ a.symbol }>{ a.name }</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div
                                style={{
                                    marginRight: "1px",
                                    marginTop: "4px",
                                    marginBottom: "0px",
                                    display: "inline-block"
                                }}
                            >
                                {/* <select id="level" className="browser-default">
                                    <option value="Simple">Simple</option>
                                    <option value="Technical">Technical</option>
                                </select> */}
                            </div>
                        </div>
                        <div className="col l2 offset-l3 s6 pc-right app-line">
                            <h3 style={{display: "inline-block"}}>${ commaNumber(fund.toFixed(2)) }</h3>
                        </div>
                        <div className="col l2 s6 app-line" style={{textAlign: "right"}}>
                            <Link href="/user">

                                <a style={{display: "inline-block"}}
                                    ><span
                                        className="material-icons notranslate"
                                        style={{fontSize: "30px", color: "rgb(137, 129, 129)"}}
                                        >home</span>
                                </a>
                            </Link>
                            <a
                                className="btn"
                                href="/user/deposits/crypto.html"
                                style={{paddingLeft: "1.8rem", paddingRight: "1.8rem"}}
                                >Deposit</a>
                        </div>
                    </div>
                    <div className="row app-line hide-on-large-only">
                        <div className="col l1 s4">
                            <div
                                style={{
                                    marginRight: "1px",
                                    marginTop: "4px",
                                    marginBottom: "0px",
                                    display: "inline-block"
                                }}
                            >
                                <select value={ selectedCategory } onChange={e => setSelectedCategory(e.target.value)} id="market" className="browser-default">
                                    {
                                        cate && cate.length && cate.length > 0 && cate.map(c => (

                                            <option key={ c.id } value={ c.id }>{ c.name }</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col l1 s4">
                            <div
                                style={{
                                    marginRight: "1px",
                                    marginTop: "4px",
                                    marginBottom: "0px",
                                    display: "inline-block"
                                }}
                            >
                                <select value={ selectedAsset } onChange={e => setSelectedAsset(e.target.value)} id="symbol" className="browser-default">
                                    {
                                        assetsList && assetsList.length && assetsList.length > 0 && assetsList.map(a => (

                                            <option key={ a.id } value={ a.symbol }>{ a.name }</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col l2 s4">
                            <div
                                style={{
                                    marginRight: "1px",
                                    marginTop: "4px",
                                    marginBottom: "0px",
                                    display: "inline-block"
                                }}
                            >
                                {/* <select id="level" className="browser-default">
                                    <option value="Simple">Simple</option>
                                    <option value="Technical">Technical</option>
                                </select> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l4 s12 hide-on-med-and-down">
                            <div className="list-height">
                                <ul className="collection">
                                    {
                                        trades && trades.length && trades.length > 0 ? trades.map(trade => (
                                            <TradeItems key={trade.id} trade={trade} />
                                        )) : (

                                            <li className="collection-item app-py-2">
                                                <p id="no-data" style={{textAlign: "center"}}>
                                                    <span className="app-font-normal"
                                                        >NO OPEN POSITIONS</span
                                                    >
                                                </p>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col l6 s12 m10 chart-height">
                            <AdvancedRealTimeChart 
                                theme='light' 
                                displayMode="adaptive" 
                                autosize
                                symbol={ selectedAsset }
                                style={2}
                            />
                        </div>
                        <div className="col l2 s12 m2 center">
                            <form onSubmit={placeTrade}>
                                <div className="hide-on-large-only">
                                    <button
                                        type="submit"
                                        disabled={isTrading}
                                        className="green btn btn-full btn-large"
                                        onClick={() => setTradeDirection("up")}
                                    >
                                        UP</button
                                    ><button
                                        type="submit"
                                        disabled={isTrading}
                                        className="red btn btn-full btn-large"
                                        onClick={() => setTradeDirection("down")}
                                    >
                                        DOWN
                                    </button>
                                </div>
                                <div className="input-field">
                                    <label className='active'>time (minutes)</label>
                                    <input
                                        min="1"
                                        max="15"
                                        id="time"
                                        type="number"
                                        value={ tradeDuration }
                                        onChange={ e => setTradeDuration(e.target.value) }
                                        style={{textAlign: "center"}}
                                    />
                                </div>
                                <small>LEVERAGE </small>
                                <br />
                                <span>0 (10 MAX)</span>
                                <br />
                                <br />
                                <small>TRADE VALUE</small>
                                <br />
                                <span>${ commaNumber(assetPrice) }</span>
                                <input type="hidden" name="direction" value={ tradeDirection } />
                                <br />
                                <br />
                                <div className="hide-on-med-and-down">
                                    <button
                                        type="submit"
                                        disabled={isTrading}
                                        className="green btn btn-full btn-large"
                                        onClick={() => setTradeDirection("up")}
                                    >
                                        UP</button>
                                    <button
                                        type="submit"
                                        disabled={isTrading}
                                        className="red btn btn-full btn-large"
                                        onClick={() => setTradeDirection("down")}
                                    >
                                        DOWN
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-footer bg hide-on-large-only">
                <ul className="tabs">
                    <li className="tab">
                        <Link href="/user">
                        
                            <a title="Home"
                                ><span className="material-icons notranslate">home</span
                                ><span className="hide-on-small-only">Home</span></a
                            >
                        </Link>
                    </li>
                    <li className="tab">
                        <Link href="/user/ptraderoom.html?menu=binary">
                        
                            <a
                                title="Binary Options"
                                className="active"
                                ><span className="material-icons notranslate">access_time</span
                                ><span className="hide-on-small-only">Binary Options</span></a
                            >
                        </Link>
                    </li>
                    <li className="tab">
                        <Link href="/user/ptraderoom.html?menu=open">
                        
                            <a
                                title="Open Trades"
                                className=""
                                ><span className="material-icons notranslate"
                                    >hourglass_top</span
                                ><span className="hide-on-small-only">Open Trades</span></a
                            >
                        </Link>
                    </li>
                    <li className="tab">
                        <Link href="/user/ptraderoom.html?menu=closed">
                        
                            <a
                                title="Closed Trades"
                                className=""
                                ><span className="material-icons notranslate"
                                    >hourglass_full</span
                                ><span className="hide-on-small-only">Closed Trades</span></a
                            >
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default TradeRoom

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

        let tradingFundDB = await UserTradingFundModel.findOne({ _userId: user.id })
        
        if(!tradingFundDB) {
            tradingFundDB = await new UserTradingFundModel({ _userId: user.id, balance: 0.0 })
            await tradingFundDB.save()
        }

        const tradingFund = _.pick(tradingFundDB, ["id", "balance"])

        const categoriesDB = await AssetsCategoryModel.find({ }).sort("name")
        const categories = _.map(categoriesDB, category => _.pick(category, ["id", "name"]))
        if(categories.length < 1) {
            return {
                props: { 
                    categories: [],
                    assets: [],
                    savedAssets: [],
                    openTrades: JSON.stringify([]),
                    tradingFund
                }
            }
        }
        const assetsDB = await AssetModel.find({ _categoryId: categories[0].id })
        const assets = _.map(assetsDB, asset => _.pick(asset, ["id", "name", "price", "logo", "symbol", "type"]))

        const openTradesDB = await UserTradingContractModel.find({ _userId: user.id, status: "open" })
        const openTrades = _.map(openTradesDB, trade => _.pick(trade, ["id", "trade_value", "duration", "direction", "status", "_assetId", "gain"]))

        // openTrades.duration = openTrades.duration.toString()

        return {
            props: { 
                categories,
                assets,
                tradingFund,
                openTrades: JSON.stringify(openTrades)
            }
        }
    } catch(error) {
        console.log(error.message)
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
}