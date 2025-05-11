import { useEffect, useState } from "react"
import commaNumber from "comma-number"
import { BASE_IMG_URL } from '../../config'


function TradeItems({ trade }) {
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState("")
    const { trade_value, direction, status, _assetId, gain } = trade

    useEffect(() => {
        async function getAsset() {
            try {
                const response = await fetch(`/api/assets/items/${ _assetId }/get`)

                const data = await response.json()

                const { status, message, asset } = data

                if(status === true) {
                    setImage(asset.logo)
                    setIsLoading(false)
                } else {
                    throw new Error(message)
                }

            } catch(error) {
                setIsLoading(false)
            }
        }

        getAsset()
    }, [])
    return (
        <li className='collection-item app-py-1'>
            <div className="row">
                <div className="col l3 s2">
                    <center>
                        {
                            isLoading ? (
                                "Icon"
                            ) : (

                                <img
                                    className="cryptoicons"
                                    src={`${ BASE_IMG_URL }${ image }`}
                                    style={{borderRadius: "5px", width: "60px" }}
                                />
                            )
                        }
                    </center>
                </div>
                <div className="col l3 s4">
                    <p>Bitcoin</p>
                    <span style={{fontSize: "12px"}}>{ status } <span>{ gain && (gain === true ? " : Gain" : " : Lost") }</span></span>
                </div>
                <div className="col l4 s4" style={{paddingTop: "10px"}}>{ commaNumber(trade_value) }</div>
                <div className="col l2 s2" style={{paddingTop: "10px"}}>
                    <span style={{ color: direction === "up" ? "green" : "red" }} className="material-icons">
                        {
                            direction === "up" ? "arrow_upward" : "arrow_downward"
                        }
                    </span>
                </div>
            </div>
        </li>
    )
}

export default TradeItems