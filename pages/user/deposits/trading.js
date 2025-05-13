import Head from "next/head"
// import Link from 'next/link'
import AuthUserLayout from "../../../components/layout/authUserLayout"
import PricingDisplay from "../../../components/pricing-display"

function TradingPlans() {
	return (
		<AuthUserLayout>
			<Head>
				<title>Trading Plans - yourtrade</title>
			</Head>
			<PricingDisplay hasAction />
			{/* <div className="container center">
                <h2 className="center">Trading Plans</h2>
                <br />
                <div className="row">
                    <div className="col l3 s12 wow fadeInUp slow">
                        <div className="card hoverable" style={{borderRadius: "10px"}}>
                            <br />
                            <p>Starter</p>
                            <br />
                            <span
                                className="alt-color"
                                style={{fontSize: "25px", fontWeight: "bold"}}>
                                $500.00
                            </span>
                            <br />
                            minimum
                            <br />
                            <br />
                            <br />
                            <Link href="/user/deposits/crypto?amount=999&amp;to=1">
                            
                                <a
                                    className="btn btn-trans"
                                    >
                                    PURCHASE PLAN
                                </a>
                            </Link>
                            <br />
                            <br />
                            <br />
                            <p style={{fontSize: "14px"}}>Junior Traders Available To Copy</p>
                            <br />
                        </div>
                    </div>
                    <div className="col l3 s12 wow fadeInUp slow">
                        <div className="card hoverable" style={{borderRadius: "10px"}}>
                            <br />
                            <p>Premium</p>
                            <br />
                            <span
                                className="alt-color"
                                style={{fontSize: "25px", fontWeight: "bold"}}>
                                $1,000.00
                            </span>
                            <br />
                            minimum
                            <br />
                            <br />
                            <br />
                            <Link href="/user/deposits/crypto?amount=2499&amp;to=1">
                                <a 
                                    className="btn btn-trans"
                                    >
                                    PURCHASE PLAN
                                </a>
                            </Link>
                            <br />
                            <br />
                            <br />
                            <p style={{fontSize: "14px"}}>Pro Traders Available To Copy</p>
                            <br />
                        </div>
                    </div>
                    <div className="col l3 s12 wow fadeInUp slow">
                        <div className="card hoverable" style={{borderRadius: "10px"}}>
                            <br />
                            <p>Master</p>
                            <br />
                            <span
                                className="alt-color"
                                style={{fontSize: "25px", fontWeight: "bold"}}>
                                $2,500.00
                            </span>
                            <br />
                            minimum
                            <br />
                            <br />
                            <br />
                            <Link href="/user/deposits/crypto?amount=5499&amp;to=1">
                            
                                <a
                                    className="btn btn-trans"
                                    >
                                    PURCHASE PLAN
                                </a>
                            </Link>
                            <br />
                            <br />
                            <br />
                            <p style={{fontSize: "14px"}}>Expert Traders Available To Copy</p>
                            <br />
                        </div>
                    </div>
                    <div className="col l3 s12 wow fadeInUp slow">
                        <div className="card hoverable" style={{borderRadius: "10px"}}>
                            <br />
                            <p>Pro</p>
                            <br />
                            <span
                                className="alt-color"
                                style={{fontSize: "25px", fontWeight: "bold"}}>
                                $5,500.00
                            </span>
                            <br />
                            minimum
                            <br />
                            <br />
                            <br />
                            <Link href="/user/deposits/crypto?amount=5500&amp;to=1">
                            
                                <a
                                    className="btn btn-trans"
                                    >
                                    PURCHASE PLAN
                                </a>
                            </Link>
                            <br />
                            <br />
                            <br />
                            <p style={{fontSize: "14px"}}>Expert Traders Available To Copy</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div> */}
		</AuthUserLayout>
	)
}

export default TradingPlans
