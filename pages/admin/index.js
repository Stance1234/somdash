import { useEffect, useState } from 'react'
import Head from 'next/head'
import UserModel from '../../models/user'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import { getSession } from 'next-auth/react'
import { Oval } from 'react-loader-spinner'
import mongoose from 'mongoose'

function AdminLogin() {
    const router = useRouter()
    const [data, setData] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        document.body.classNameName = "horizontalmenu"
    }, [])

    async function loginRequest(e) {
        e.preventDefault()

        try {
            setIsLoading(true)

            // const request = await fetch("/api/auth/signin/credentials", {
            //     method: "POST"
            // })
            // const data = await request.text()

            const status = await signIn("credentials", {
                redirect: false,
                ...data
            })

            if(status.ok === true) {
                router.push("/admin/dashboard")
            } else {
                throw new Error("Invalid credentials or email is not verified")
            }

            // console.log(status)
        } catch(error) {
            toast.error(error.message)
            setIsLoading(false)
        }
    }

    return (
        <>
            <Head>

                {/* <!-- Title --> */}
                <title>Trademark Your Trader Inc. Broker dashboard</title>

                {/* <!-- Bootstrap css--> */}
                <link href="/admin/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

                {/* <!-- Icons css--> */}
                <link href="/admin/assets/css/icons.css" rel="stylesheet"/>

                {/* <!-- Style css--> */}
                <link href="/admin/assets/css/style.css" rel="stylesheet" />
                <link href="/admin/assets/css/dark-boxed.css" rel="stylesheet" />
                <link href="/admin/assets/css/boxed.css" rel="stylesheet" />
                <link href="/admin/assets/css/skins.css" rel="stylesheet" />
                <link href="/admin/assets/css/dark-style.css" rel="stylesheet" />

                {/* <!-- Color css--> */}
                <link id="theme" rel="stylesheet" type="text/css" media="all" href="/admin/assets/css/colors/color.css" />

                {/* <!-- P-SCROLL css--> */}
                <link href="/admin/assets/plugins/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" />

                {/* <!-- Switcher css--> */}
                <link href="/admin/assets/switcher/css/switcher.css" rel="stylesheet" />
                <link href="/admin/assets/switcher/demo.css" rel="stylesheet" />

            </Head>
        
            <div className="page main-signin-wrapper">

                {/* <!-- Row --> */}
                <div className="row signpages  justify-content-center text-center sign-2">
                    <div className="col-md-12 col-xl-6">
                        <div className="sign1">
                            <div className="card">
                                <div className="">
                                    <div className="card-body mt-2 mb-2 p-5">
                                        <img src="/admin/assets/img/brand/dark-logo.png" className="header-brand-img text-left mb-5 desktop-logo" alt="logo"/>
                                        <img src="/admin/assets/img/brand/logo.png" className="header-brand-img desktop-logo text-left mb-5 theme-logo" alt="logo"/>
                                        <div className="clearfix"></div>
                                        <form onSubmit={loginRequest}>
                                            <h5 className="text-left mb-2">Sign In</h5>
                                            <p className="mb-4 text-muted tx-13 ml-0 text-left">Signin to Continue in our website</p>
                                            <div className="form-group text-left">
                                                <label className="">Email Address</label>
                                                <input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} className="form-control rounded-11" placeholder="Users email" type="text"/>
                                            </div>
                                            <div className="form-group text-left">
                                                <label className="">Password</label>
                                                <input value={data.password} onChange={e => setData({ ...data, password: e.target.value })} className="form-control rounded-11" placeholder="password" type="password"/>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 mt-3">
                                                    <button disabled={isLoading} type="submit" className="btn btn-primary rounded-11 btn-block">
                                                        {
                                                            isLoading ? (
                                                                <Oval height={20} width={20} />
                                                            ) : (
                                                                <span>SIGN IN</span>
                                                            )
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Row --> */}

            </div>
        </>
    )
}

export default AdminLogin

export async function getServerSideProps(context) {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        const session = await getSession({ req: context.req })
    
        
        if(session) {
            const email = session.user.email
            const user = await UserModel.findOne({ email })
            if(user.is_admin) {
    
                return {
                    redirect:{
                        destination: "/admin/dashboard",
                        permanent: false
                    }
                }
            }
        } 
    
        return {
            props: { }
        }
    } catch(error) {
        return {
            redirect:{
                destination: "/admin/dashboard",
                permanent: false
            }
        }
    }
}