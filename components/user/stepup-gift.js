import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import svgImage from '../../public/svgs/open-account.svg'
import { StyleButtonLink } from '../button'

const GiftDescArea = styled.div`
    @media only screen and (max-width: 992px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

function StepupGift() {
    return (
        <section className="app-py-3 bg ">
            <div className="row ">
                <div className="col l7 s12">
                    <div
                        className="container wow fadeInUp slow"
                        style={{visibility: "visible"}}
                    >
                        <center>
                            <Image 
                                layout='intrinsic'
                                src={svgImage}
                                className="responsive-img"
                                width={500}
                                height={400}
                                alt="illustration"
                            />
                        </center>
                    </div>
                </div>
                <div className="col l5 s12 app-mobile-center ">
                    <GiftDescArea
                        className="container wow fadeInUp slow"
                        style={{visibility: "visible"}}
                    >
                        <br />
                        <br />
                        <br />
                        <h2>Step 1</h2>
                        <h3 style={{color: "rgb(250, 137, 121)"}}>
                            Sign Up and Get A Gift
                        </h3>
                        <br />
                        <p>
                            Registation will take less than a minute. You will
                            immediately receive your trading account and all tools you
                            need for successful trading.
                        </p>
                        <br />
                        <p>
                            We highly evaluate your choice.
                            <br /> That&rsquo;s why we have prepared the gifts for you
                        </p>
                        <br />
                        <Link href="/signup" passHref>
                            {/* <a className="btn btn-large">
                                Register
                            </a> */}
                            <StyleButtonLink large roundedFull>Register</StyleButtonLink>
                        </Link>
                        <br />
                        <br />
                    </GiftDescArea>
                </div>
            </div>
        </section>

    )
}

export default StepupGift