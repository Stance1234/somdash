import { useRouter } from 'next/router'
import { signOut } from 'next-auth/react'


function AdminMainHeader() {
    const router = useRouter()
    async function handleSignOut(e) {
        e.preventDefault()

        const data = await signOut({redirect: false, callbackUrl: "/"})
        if(data) {
            router.push(data.url)
        }
    }
    return (
        <div className="main-header side-header sticky">
            <div className="container-fluid">
                <div className="main-header-left">
                    <a className="main-header-menu-icon" href="#" id="mainSidebarToggle"><span></span></a>
                </div>
                <div className="main-header-center">
                    <div className="responsive-logo">
                        <a href="index.html"><img src="/admin/assets/img/brand/dark-logo.png" className="mobile-logo" alt="logo"/></a>
                        <a href="index.html"><img src="/admin/assets/img/brand/logo.png" className="mobile-logo-dark" alt="logo"/></a>
                    </div>
                    <div className="input-group">
                        <div className="mt-0">
                            <form className="form-inline">
                                <div className="search-element">
                                    <input type="search" className="form-control header-search" placeholder="Search…" aria-label="Search" tabIndex="1" />
                                    <button className="btn" type="submit">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="main-header-right">
                    <div className="dropdown d-md-flex header-settings">
                        <a href="#" className="nav-link icon" data-toggle="sidebar-right" data-target=".sidebar-right">
                            <i className="header-icons"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg></i>
                        </a>
                    </div>
                    <div className="dropdown main-header-notification">
                        <a className="nav-link icon" href="#">
                            <i className="header-icons"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg></i>
                            <span className="badge badge-danger nav-link-badge">4</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow  animated p-0">
                            <div className="notifications-menu">
                                <a className="dropdown-item d-flex p-3 border-bottom rounded-top " href="#">
                                    <span className="avatar avatar-md mr-3 fs-20 align-self-center cover-image bg-primary brround">
                                        <i className="fe fe-upload"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold text-dark"> New file Uploaded </span>
                                        <div className="small text-muted d-flex">
                                            5 hour ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex p-3 border-bottom" href="#">
                                    <span className="avatar avatar-md  fs-20 mr-3 align-self-center cover-image bg-teal brround">
                                        <i className="fe fe-arrow-up-circle"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold text-dark"> Account Updated</span>
                                        <div className="small text-muted d-flex">
                                            20 mins ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex p-3 border-bottom" href="#">
                                    <span className="avatar avatar-md fs-20 mr-3 align-self-center cover-image bg-info brround">
                                        <i className="fe fe-shopping-bag"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold text-dark"> Order&apos;s Recevied</span>
                                        <div className="small text-muted d-flex">
                                            1 hour ago
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex p-3 border-bottom" href="#">
                                    <span className="avatar avatar-md mr-3 fs-20 align-self-center cover-image bg-pink brround">
                                        <i className="fe fe-database"></i>
                                    </span>
                                    <div>
                                        <span className="font-weight-bold text-dark">Server Rebooted</span>
                                        <div className="small text-muted d-flex">
                                            2 hour ago
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a href="#" className="dropdown-item text-center notifications-menu1">View all Notification</a>
                        </div>
                    </div>
                    <div className="dropdown d-md-flex">
                        <a className="nav-link icon full-screen-link fullscreen-button" href="#">
                            <i className="fullscreen"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg></i>
                            <i className="exit-fullscreen"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg></i>
                        </a>
                    </div>
                    <div className="dropdown main-profile-menu">
                        <a className="d-flex" href="#">
                            <span className="main-img-user" ><img alt="avatar" src="/admin/assets/img/users/9.jpg" /></span>
                        </a>
                        <div className="dropdown-menu">
                            <div className="header-navheading">
                                <h6 className="main-notification-title">Alexandra Churchill</h6>
                                <p className="main-notification-text">Web Designer</p>
                            </div>
                            <a className="dropdown-item border-top" href="profile.html">
                                <i className="fe fe-user"></i> My Profile
                            </a>
                            <a className="dropdown-item" href="profile.html">
                                <i className="fe fe-edit"></i> Edit Profile
                            </a>
                            <a className="dropdown-item" href="profile.html">
                                <i className="fe fe-settings"></i> Account Settings
                            </a>
                            <a className="dropdown-item" href="lockscreen.html">
                                <i className="fe fe fe-unlock"></i> Lock screen
                            </a>
                            <a href='#logout' onClick={handleSignOut} className="dropdown-item">
                                <i className="fe fe-power"></i> Sign Out
                            </a>
                        </div>
                    </div>
                    <button className="navbar-toggler navresponsive-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                        aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
                    </button>
                    {/* <!-- Navresponsive closed --> */}
                </div>
            </div>
        </div>
    )
}

export default AdminMainHeader