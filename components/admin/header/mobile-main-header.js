


function AdmiMainMobileHeader() {
    return (
        // <!-- Mobile-header -->
        <div className="mobile-main-header">
            <div className="mb-1 navbar navbar-expand-lg  nav nav-item  navbar-nav-right responsive-navbar navbar-dark  ">
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <div className="d-flex order-lg-2 ml-auto">
                        <div className="dropdown header-search">
                            <a className="nav-link icon header-search">
                                <i className="header-icons"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></i>
                            </a>
                            <div className="dropdown-menu">
                                <div className="main-form-search p-2">
                                    <div className="">
                                        <div className="mt-0">
                                            <form className="">
                                                <div className="search-element d-flex">
                                                    <input type="search" className="form-control header-search" placeholder="Search…" aria-label="Search" tabIndex="1" />
                                                    <button className="btn" type="submit">
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a className="nav-link icon full-screen-link fullscreen-button" href="#"><i className="fullscreen"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg></i>
                                <i className="exit-fullscreen"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg></i>
                            </a>
                        </div>
                        <div className="dropdown main-header-notification">
                            <a className="nav-link icon" href="#">
                                <i className="header-icons"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg></i>
                                <span className="badge badge-danger nav-link-badge">4</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow  animated p-0">
                                <div className="notifications-menu">
                                    <a className="dropdown-item d-flex p-3 border-bottom rounded-top" href="#">
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
                        <div className="dropdown main-profile-menu">
                            <a className="d-flex" href="#">
                                <span className="main-img-user" ><img alt="avatar" src="/admin/assets/img/users/1.jpg" /></span>
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
                                <a className="dropdown-item" href="profile.html">
                                    <i className="fe fe fe-unlock"></i> Lock screen
                                </a>
                                <a className="dropdown-item" href="signin.html">
                                    <i className="fe fe-power"></i> Sign Out
                                </a>
                            </div>
                        </div>
                        <div className="dropdown  header-settings">
                            <a href="#" className="nav-link icon" data-toggle="sidebar-right" data-target=".sidebar-right">
                                <i className="header-icons"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></svg></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile-header closed --> */}
        </div>
    )
}

export default AdmiMainMobileHeader