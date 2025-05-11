import { useState, useEffect } from 'react'
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import _ from 'lodash'
import commaNumber from 'comma-number'
import { toast } from 'react-toastify'
import { BASE_IMG_URL } from '../../../config'
import AuthUserLayout from "../../../components/layout/authUserLayout"
import UserModel from '../../../models/user'
import AssetsCategoryModel from '../../../models/assets-category'
import AssetModel from "../../../models/assets"
import SavedAssetModel from '../../../models/saved-assets'

function TradingMarket({ categories, assets, savedAssets }) {

    const [cate, setCate] = useState(categories)
    const [category, setCategory] = useState(cate[0]?.id || "")
    const [assetList, setAssetsList] = useState(assets)
    const [isLoading, setIsLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [savedUserAssets, setSavedUserAssets] = useState(savedAssets)

    useEffect(() => {
        async function getAssets() {
            try {
                setIsLoading(true)
                const response = await fetch(`/api/assets/categories/${ category }/assets`)

                const data = await response.json()

                const { status, message, assets: newAssets } = data

                if(status === true) {
                    setAssetsList(newAssets)
                    setIsLoading(false)
                } else {
                    throw new Error(message)
                }

            } catch(error) {
                setIsLoading(false)
                toast.error(error.message)
            }
        }

        getAssets()
    }, [category])

    async function addToSavedAssets({ assetId, selected }) {
        try {
            if(saving) return 

            if(selected === false) {

                setSaving(true)
                const response = await fetch("/api/assets/items/save", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ assetId })
                })
    
                const data = await response.json()
    
                const { status, message } = data
    
                if(status === true) {
                    setSavedUserAssets([ ...savedUserAssets, assetId ])
                    setSaving(false)
                    toast.success(message)
                } else {
                    throw new Error(message)
                }
            } else {
                setSaving(true)
                const response = await fetch("/api/assets/items/remove-saved", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ assetId })
                })
    
                const data = await response.json()
    
                const { status, message } = data
    
                if(status === true) {
                    const filteredList = savedUserAssets.filter(asset => asset !== assetId)
                    setSavedUserAssets(filteredList)
                    setSaving(false)
                    toast.success(message)
                } else {
                    throw new Error(message)
                }
            }


        } catch(error) {
            setSaving(false)
            toast.error(error.message)
        }
    }

    return (
        // TODO: link collection items to traderoom
        <AuthUserLayout>
            <div className="container">
                <center>
                    <div
                        style={{marginRight: "1px", marginTop: "4px", marginBottom: "0px", display: "inline-block"}}>
                        <select disabled={isLoading} value={category} onChange={e => setCategory(e.target.value)} id="market" className="browser-default">
                            {/* <option value="Crypto">Crypto (40)</option>
                            <option value="Currencies">Currencies (43)</option>
                            <option value="Stocks">Stocks (82)</option> */}
                            {
                                cate && cate.length && cate.length > 0 && cate.map(c => (
                                    <option key={ c.id } value={ c.id }>{ c.name }</option>
                                ))
                            }
                        </select>
                    </div>
                </center>
                <br />
                <div className="container">
                    <ul className="collection">
                        {
                            assetList && assetList.length && assetList.length > 0 ? assetList.map(a => (

                                <li key={ a.id } className="collection-item app-py-1">
                                    <div className="row">
                                        <div className="col l1 s2">
                                            <center>
                                            <img
                                                className="cryptoicons"
                                                src={`${ BASE_IMG_URL }${ a.logo }`}
                                                style={{borderRadius: "5px", width: "60px" }}
                                            />
                                            </center>
                                        </div>
                                        <div className="col l8 s4">
                                            <p>{ a.name }</p>
                                            <span style={{fontSize: "12px"}}>{ a.type.toUpperCase() }</span>
                                        </div>
                                        <div className="col l2 s4" style={{paddingTop: "10px"}}>{ commaNumber(a.price) }</div>
                                        <div className="col l1 s2" style={{paddingTop: "10px"}}>
                                            <span onClick={() => addToSavedAssets({ assetId: a.id, selected: savedUserAssets.includes(a.id) })} style={{ color: savedUserAssets.includes(a.id) && "gold" }} className="material-icons">
                                                {
                                                    savedUserAssets.includes(a.id) ? "star" : "star_border"
                                                }
                                                
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            )) : (
                                <li className="collection-item app-py-1">
                                    <div className="row">
                                        <div className="col">

                                            <p>No assets found</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <br /><br />
                </div>
 
        </AuthUserLayout>
    )
}

export default TradingMarket

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

        const categoriesDB = await AssetsCategoryModel.find({ }).sort("name")
        const categories = _.map(categoriesDB, category => _.pick(category, ["id", "name"]))
        if(categories.length < 1) {
            return {
                props: { 
                    categories: [],
                    assets: [],
                    savedAssets: []
                }
            }
        }
        const assetsDB = await AssetModel.find({ _categoryId: categories[0].id })
        const assets = _.map(assetsDB, asset => _.pick(asset, ["id", "name", "price", "logo", "symbol", "type"]))
        const savedAssetsDB = await SavedAssetModel.find({ _userId: user.id })
        const savedAssets = _.map(savedAssetsDB, asset => _.pick(asset, ["_assetId"]))
        const savedAssetsIDs = savedAssets.map(asset => asset._assetId.toString())

        return {
            props: { 
                categories,
                assets,
                savedAssets: savedAssetsIDs
            }
        }
    } catch(error) {
        return {
            redirect: {
                destination: "/?error=" + error.message,
                permanent: false
            }
        }
    }
}