import { useReducer } from 'react'
import { getSession } from 'next-auth/react'
import _ from 'lodash'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"

const initialState = {
    title: "",
    msg: "",
    type: "",
    userId: "",
    isLoading: false
}

function reducer(state, action) {
    switch(action.type) {
        case "SET_TITLE":
            return { ...state, title: action.payload }
        case "SET_MSG": 
            return { ...state, msg: action.payload }
        case "SET_TYPE":
            return { ...state, type: action.payload }
        case "SET_USER":
            return { ...state, userId: action.payload }
        case "SET_LOADING": 
            return { ...state, isLoading: action.payload }
        case "CLEAR_STATE":
            return initialState
        default: return state
    }
}

function AdminCreateNotification({ users }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { isLoading } = state

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            dispatch({ type: "SET_LOADING", payload: true })
            
            if(!state.userId) throw new Error("Select a user")
            if(!state.type) throw new Error("Select notification type")
            if(!state.title) throw new Error("Enter notification title")
            if(!state.msg) throw new Error("Enter notification message")

            const response = await fetch("/api/notifications/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            })

            const item = await response.json()

            const { status, message } = item

            if(status === true) {
                toast.success(message)
                dispatch({ type: "CLEAR_STATE" })
            } else {
                throw new Error(message)
            }
            
            
        } catch (error) {
            toast.error(error.message)
            dispatch({ type: "SET_LOADING", payload: false })
        }
    }

    return (
        <AdminLayout>
            <BreadCrump title={"Notification"} crumb={"Create notification"} />
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div>
                                <h6 className="main-content-label mb-1">New Notification</h6>
                                <p className="text-muted card-sub-title">
                                    Create a new user notification
                                </p>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        value={ state.userId }
                                        onChange={e => dispatch({ type: "SET_USER", payload: e.target.value })}
                                    >
                                        <option disabled value="" label="-- Select user --" data-select2-id="15"></option>
                                        {
                                            users && users.length && users.length > 0 && users.map(user => (
                                                <option key={ user.id } value={ user.id }>{ user.firstname} { user.lastname }</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control"
                                        value={ state.type }
                                        onChange={e => dispatch({ type: "SET_TYPE", payload: e.target.value })}
                                    >
                                        <option disabled value="" label="-- Select type --" data-select2-id="15"></option>
                                        <option value="danger">Danger</option>
                                        <option value="warning">warning</option>
                                        <option value="info">Information</option>
                                        <option value="success">Success</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Enter notification title"
                                        type="text"
                                        value={ state.title }
                                        onChange={e => dispatch({ type: "SET_TITLE", payload: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    {/* <input
                                        className="form-control"
                                        placeholder="Enter notification message"
                                        type="text"
                                        value={ state.msg }
                                        onChange={() => dispatch({ type: "SET_MSG", payload: e.target.value })}
                                    /> */}
                                    <textarea className='form-control' rows={6} placeholder='Enter notification message' value={ state.msg } onChange={e => dispatch({ type: "SET_MSG", payload: e.target.value })}></textarea>
                                </div>
                                <button disabled={isLoading} className="btn ripple btn-main-primary">
                                    {
                                        isLoading ? (
                                            <Oval height={20} width={20} color="#fff" />
                                        ) : (
                                            <span>Create</span>
                                        )
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminCreateNotification

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    let authorized = false

    
    if(session) {
        const email = session.user.email
        const user = await UserModel.findOne({ email })
        if(user.is_admin) {
            authorized = true
        }
    } 

    if(!authorized) {
        return {
            redirect:{
                destination: "/",
                permanent: false
            }
        }
    }

    const usersDB = await UserModel.find({ is_admin: false })

    const users = _.map(usersDB, user => _.pick(user, ["id", "firstname", "lastname"]))

    return {
        props: { 
            users
        }
    }
}