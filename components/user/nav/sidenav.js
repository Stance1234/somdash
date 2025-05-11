import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { closeSideNav } from '../../../features/sideNav/sideNavSlice'
import logo from '../../../public/images/logo.png'

function SideNav() {
    const { data: session } = useSession()
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.sideNav.isOpen)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        session ? setIsLoggedIn(true) : setIsLoggedIn(false)
    })

    return (
        <>
        <ul className="sidenav" id="mobile-demo" style={{
            transform: `translateX(${isOpen ? "0" : "-105"}%)`,
            transition: "transform 0.3s ease-in-out",
            backgroundColor: "#2c3e50",
            color: "#ecf0f1",
            padding: "10px"
        }}>
            <li>
                <div className="user-view">
                    <div className="background">
                        <Image
                            src={logo}
                            className="responsive-img"
                            style={{ height: "19vh", borderRadius: "5px" }}
                            placeholder="blur"
                            alt="logo"
                        />
                    </div>
                </div>
            </li>
            <li className="no-padding">
                <ul className="collapsible collapsible-accordion">
                <li className="active">
                    <a className="collapsible-header" tabIndex="0" style={{
                        color: "#ecf0f1",
                        fontWeight: "bold",
                        padding: "10px",
                        borderRadius: "5px",
                        transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                    Pages<i className="material-icons notranslate">arrow_drop_down</i>
                    </a>
                    <div className="collapsible-body" style={{ display: "block", padding: "10px" }}>
                    <ul>
                        <li>
                            <Link href={`${ isLoggedIn ? "/user" : "/"}`}>
                                <a className="sidenav-close" style={{
                                    color: "#ecf0f1",
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    transition: "background-color 0.2s"
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                    <span className="material-icons notranslate">home</span>Home
                                </a>
                            </Link>
                        </li>
                        {
                            !isLoggedIn ? (
                                <>
                                    <li>
                                        <Link href="/signin">
                                        
                                            <a className="sidenav-close" style={{
                                                color: "#ecf0f1",
                                                padding: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                transition: "background-color 0.2s"
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                                <span className="material-icons notranslate">person_outline</span>
                                                Sign In
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/signup">
                                            <a className="sidenav-close" style={{
                                                color: "#ecf0f1",
                                                padding: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                transition: "background-color 0.2s"
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                                <span className="material-icons notranslate">person_add</span>Sign
                                                Up
                                            </a>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/user/deposits/list">
                                            <a className="sidenav-close" style={{
                                                color: "#ecf0f1",
                                                padding: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                transition: "background-color 0.2s"
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                                <span className="material-icons notranslate">av_timer</span>Transaction History
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/user/withdrawal">
                                            <a className="sidenav-close" style={{
                                                color: "#ecf0f1",
                                                padding: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "5px",
                                                transition: "background-color 0.2s"
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                                <span className="material-icons notranslate">attach_money</span>
                                                Withdraw
                                            </a>
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                        <li>
                            <Link href="/about">
                                <a className="sidenav-close" style={{
                                    color: "#ecf0f1",
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    transition: "background-color 0.2s"
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                    <span className="material-icons notranslate">people</span>About Us
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                        <a className="sidenav-close" href="/contact.html">
                            <span className="material-icons notranslate">mail_outline</span>
                            Contact Us
                        </a>
                        </li> */}
                        <li>
                            <Link href="/privacy">
                                <a className="sidenav-close" style={{
                                    color: "#ecf0f1",
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    transition: "background-color 0.2s"
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                    <span className="material-icons notranslate">lock_open</span>Privacy
                                    Policy
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link  href="/terms">
                                <a className="sidenav-close" style={{
                                    color: "#ecf0f1",
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    borderRadius: "5px",
                                    transition: "background-color 0.2s"
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = "#34495e"}
                                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}>
                                    <span className="material-icons notranslate">folder_open</span>Terms
                                    &amp; Conditions
                                </a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>
                </ul>
            </li>
            {/* <li className="no-padding">
                <ul className="collapsible collapsible-accordion">
                <li className="active">
                    <a className="collapsible-header" tabIndex="0">
                    Trading<i className="material-icons notranslate">arrow_drop_down</i>
                    </a>
                    <div className="collapsible-body" style={{display: "block"}}>
                    <ul>
                        <li>
                            <Link href="/copytrading">
                                <a className="sidenav-close">
                                    <span className="material-icons notranslate">content_copy</span>Copy
                                    Trading
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link  href="/help">
                                <a className="sidenav-close">
                                    <span className="material-icons notranslate">question_answer</span>
                                    Trading Help
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/forex">
                                <a className="sidenav-close">
                                    <span className="material-icons notranslate">wysiwyg</span>Trade
                                    Forex
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cryptos">
                                <a className="sidenav-close">
                                    <span className="material-icons notranslate">copyright</span>Trade
                                    Crypto
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/stocks">
                                <a className="sidenav-close">
                                    <span className="material-icons notranslate">
                                    insert_chart_outlined
                                    </span>
                                    Trade Stocks
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/options">
                                <a className="sidenav-close" >
                                    <span className="material-icons notranslate">donut_large</span>Trade
                                    Options
                                </a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>
                </ul>
            </li> */}
            {/* <li className="no-padding">
                <ul className="collapsible collapsible-accordion">
                <li className="active">
                    <a className="collapsible-header" tabIndex="0">
                    Mining<i className="material-icons notranslate">arrow_drop_down</i>
                    </a>
                    <div className="collapsible-body" style={{display: "block"}}>
                    <ul>
                        <li>
                            <Link href="/mining/help">
                                <a className="sidenav-close">
                                    <span className="material-icons notranslate">question_answer</span>
                                    Mining Help
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/mining/about">
                                <a className="sidenav-close">
                                    <span className="material-icons notranslate">wysiwyg</span>About
                                    Mining
                                </a>
                            </Link>
                        </li>
                         <li>
                        <a className="sidenav-close" href="/mining/bitcoin.html">
                            <span className="material-icons notranslate">copyright</span>Bitcoin
                            Mining
                        </a>
                        </li>
                        <li>
                        <a className="sidenav-close" href="/mining/dogecoin.html">
                            <span className="material-icons notranslate">copyright</span>
                            Dogecoin Mining
                        </a>
                        </li>
                        <li>
                        <a className="sidenav-close" href="/mining/enigma.html">
                            <span className="material-icons notranslate">dns</span>Enigma
                            Datacenter
                        </a>
                        </li> 
                    </ul>
                    </div>
                </li>
                </ul>
            </li>{" "} */}
        </ul>
        {
            isOpen && <div onClick={() => dispatch(closeSideNav())} className="sidenav-overlay" style={{
                display: "block",
                opacity: "1",
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}></div>
        }

        </>

    )
}

export default SideNav