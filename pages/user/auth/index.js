import { getSession } from "next-auth/react"
import Link from 'next/link'
import mongoose from "mongoose"
import UserModel from "../../../models/user"
import UserLayout from "../../../components/layout/userLayout"


function UserSettings() {
    return (
        <UserLayout>
            <br />
            <h1 className="center">Settings</h1>
            <br />
            <div className="container">
            <div className="row">
                <div className="col l6 s12 offset-l3">
                    <ul className="collection">
                        <Link href="/user/auth/profile">
                            <a className="collection-item bg">
                                <li>
                                    <div
                                        style={{
                                            padding: "1rem 1rem 0.8rem",
                                            background: "rgb(50, 167, 226)",
                                            borderRadius: "10px",
                                            display: "inline-block",
                                            marginRight: "1rem"
                                        }}>
                                        <span
                                            className="material-icons notranslate"
                                            style={{
                                                fontSize: "30px",
                                                margin: "0px",
                                                padding: "0px",
                                                color: "white"
                                            }}>
                                            person
                                        </span>
                                    </div>
                                    My Profile
                                </li>
                            </a>
                        </Link>
                        <Link href="/user/auth/notifications">
                            <a className="collection-item bg">
                                <li>
                                    <div
                                        style={{
                                            padding: "1rem 1rem 0.8rem",
                                            background: "rgb(225, 85, 93)",
                                            borderRadius: "10px",
                                            display: "inline-block",
                                            marginRight: "1rem"
                                        }}>
                                        <span
                                            className="material-icons notranslate"
                                            style={{
                                                fontSize: "30px",
                                                margin: "0px",
                                                padding: "0px",
                                                color: "white"
                                            }}>
                                            notifications
                                        </span>
                                    </div>
                                    Notifications
                                </li>
                            </a>
                        </Link>
                        <Link href="/user/auth/photo">
                            <a className="collection-item bg">
                                <li>
                                    <div
                                        style={{
                                            padding: "1rem 1rem 0.8rem",
                                            background: "rgb(181, 72, 198)",
                                            borderRadius: "10px",
                                            display: "inline-block",
                                            marginRight: "1rem"
                                        }}>
                                        <span
                                            className="material-icons notranslate"
                                            style={{
                                                fontSize: "30px",
                                                margin: "0px",
                                                padding: "0px",
                                                color: "white"
                                            }}>
                                            photo
                                        </span>
                                    </div>
                                    Profile Photo
                                </li>
                            </a>
                        </Link>
                        <Link href="/user/auth/email">
                            <a className="collection-item bg">
                                <li>
                                    <div
                                        style={{
                                            padding: "1rem 1rem 0.8rem",
                                            background: "rgb(255, 135, 0)",
                                            borderRadius: "10px",
                                            display: "inline-block",
                                            marginRight: "1rem"
                                        }}>
                                        <span
                                            className="material-icons notranslate"
                                            style={{
                                                fontSize: "30px",
                                                margin: "0px",
                                                padding: "0px",
                                                color: "white"
                                            }}>
                                            mail
                                        </span>
                                    </div>
                                    Update Email
                                </li>
                            </a>
                        </Link>
                        <Link href="/user/auth/address">
                            <a className="collection-item bg" >
                                <li>
                                    <div
                                        style={{
                                            padding: "1rem 1rem 0.8rem",
                                            background: "rgb(34, 176, 125)",
                                            borderRadius: "10px",
                                            display: "inline-block",
                                            marginRight: "1rem"
                                        }}>
                                        <span
                                            className="material-icons notranslate"
                                            style={{
                                                fontSize: "30px",
                                                margin: "0px",
                                                padding: "0px",
                                                color: "white"
                                            }}>
                                            home
                                        </span>
                                    </div>
                                    Update Address
                                </li>
                            </a>
                        </Link>
                        <Link href="/user/auth/password">
                            <a className="collection-item bg">
                                <li>
                                    <div
                                        style={{
                                            padding: "1rem 1rem 0.8rem",
                                            background: "rgb(50, 167, 226)",
                                            borderRadius: "10px",
                                            display: "inline-block",
                                            marginRight: "1rem"
                                        }}>
                                        <span
                                            className="material-icons notranslate"
                                            style={{
                                                fontSize: "30px",
                                                margin: "0px",
                                                padding: "0px",
                                                color: "white"
                                            }}>
                                            lock
                                        </span>
                                    </div>
                                    Change Password
                                </li>
                            </a>
                        </Link>
                        <Link href="/user/auth/verifications">
                            <a className="collection-item bg">
                                <li>
                                    <div
                                        style={{
                                            padding: "1rem 1rem 0.8rem",
                                            background: "rgb(82, 82, 152)",
                                            borderRadius: "10px",
                                            display: "inline-block",
                                            marginRight: "1rem"
                                        }}>
                                        <span
                                            className="material-icons notranslate"
                                            style={{
                                                fontSize: "30px",
                                                margin: "0px",
                                                padding: "0px",
                                                color: "white"
                                            }}>
                                            verified_user
                                        </span>
                                    </div>
                                    Account Verifications
                                </li>
                            </a>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>

        </UserLayout>
    )
}

export default UserSettings

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })

    try {
        await mongoose.connect(process.env.MONGODB_URL)

        if(session) {
            const user = await UserModel.findOne({ email: session.user.email })
            
            if(user) {
                return {
                    props: { }
                }
            }
        } 
        
        return {
            redirect:{
                destination: "/signin",
                permanent: false
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