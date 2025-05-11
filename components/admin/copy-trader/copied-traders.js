import { useSelector } from 'react-redux'
import { BASE_IMG_URL } from '../../../config'


function CopiedTraders() {
    const copiedTradersList = useSelector(state => state.copyTrade.traders)

    return (
        <ul className="collection">
            <li className="collection-item">
                <center>
                    <h3 style={{margin: "0px", padding: "0px"}}>My Traders</h3>
                    {
                        copiedTradersList && copiedTradersList.length && copiedTradersList.length > 0 ? (
                            copiedTradersList.map(item => (
                                <div key={item._id}>
                                    <div className="chip">
                                        <img
                                            src={`${ BASE_IMG_URL }${ item.trader_profile_img }`}
                                            alt="Contact Person" />
                                        <a href={`/user/trading/traders/${ item._traderId }`}>{ item.trader_name }</a>
                                    </div>
                                </div>
                            ))
                        ) : (

                            <p>You are not copying any trader</p>
                        )
                    }

                    {/* When copying a trader */}

                </center>
            </li>
        </ul>
    )
}

export default CopiedTraders