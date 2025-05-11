import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"


function AdminSideNav() {
	const [showPaymentTab, setShowPaymentTab] = useState(false)
	const [showAssetsTab, setShowAssetsTab] = useState(false)
	const [showDashboardTab, setShowDashboardTab] = useState(false)
	const [showMiningTab, setShowMiningTab] = useState(false)
	// const router = useRouter()
    return (
        // <!-- Sidemenu -->
			<div className="main-sidebar main-sidebar-sticky side-menu">
				<div className="sidemenu-logo">
					<a className="main-logo" href="index.html">
						<img src="/admin/assets/img/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
						<img src="/admin/assets/img/brand/icon.png" className="header-brand-img icon-logo" alt="logo" />
						<img src="/admin/assets/img/brand/dark-logo.png" className="header-brand-img desktop-logo theme-logo" alt="logo" />
						<img src="/admin/assets/img/brand/icon.png" className="header-brand-img icon-logo theme-logo" alt="logo" />
					</a>
				</div>
				<div className="main-sidebar-body">
					<ul className="nav">
						<li className="nav-header"><span className="nav-label">Dashboard</span></li>
						<li className={`nav-item ${showDashboardTab && "show"}`}>
							<a onClick={() => setShowDashboardTab(!showDashboardTab)} className="nav-link with-sub" href="#">
								<i className="fe fe-home sidemenu-icon"></i>
								<span className="sidemenu-label">Dashboard</span>
								<i className="angle fe fe-chevron-right"></i>
							</a>
							<ul className="nav-sub">
								<li className="nav-sub-item">
									<Link href="/admin/dashboard">
										<a className="nav-sub-link">Home</a>
									</Link>
								</li>
								<li className="nav-sub-item">
									<Link href="/admin/users">
										<a className="nav-sub-link">Users</a>
									</Link>
								</li>
								<li className="nav-sub-item">
									<Link href="/admin/notifications">
										<a className="nav-sub-link">Notifications</a>
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link href="/admin/traders">
								<a className="nav-link ">
									<i className="fe fe-layers sidemenu-icon"></i>
									<span className="sidemenu-label">Traders</span>
								</a>
							</Link>
						</li>
						<li className={`nav-item ${showPaymentTab && "show"}`}>
							<a href='#' onClick={() => setShowPaymentTab(!showPaymentTab)} className="nav-link with-sub">
								<i className="fe fe-bar-chart-2 sidemenu-icon"></i>
								<span className="sidemenu-label">Payments</span>
								<i className="angle fe fe-chevron-right"></i>
							</a>
							<ul className="nav-sub">
								<li className="nav-sub-item">
									<Link href="/admin/payments/requests">
										<a className="nav-sub-link">Request</a>
									</Link>
								</li>
								<li className="nav-sub-item">
									<Link href="/admin/payments/methods">
										<a className="nav-sub-link">Setup Methods</a>
									</Link>
								</li>
								<li className="nav-sub-item">
									<Link href="/admin/payments/purpose">
										<a className="nav-sub-link">Setup purpose</a>
									</Link>
								</li>
							</ul>
						</li>
						<li className={`nav-item ${showAssetsTab && "show"}`}>
							<a onClick={() => setShowAssetsTab(!showAssetsTab)} className="nav-link with-sub" href="#">
								<i className="fe fe-shopping-bag sidemenu-icon"></i>
								<span className="sidemenu-label">Assets</span>
								<i className="angle fe fe-chevron-right"></i>
							</a>
							<ul className="nav-sub">
								<li className="nav-sub-item">
									<Link href="/admin/assets/categories">
										<a className="nav-sub-link">Categories</a>
									</Link>
								</li>
								<li className="nav-sub-item">
									<Link href="/admin/assets/items">
										<a className="nav-sub-link">Items</a>
									</Link>
								</li>
							</ul>
						</li>
						<li className={`nav-item ${showMiningTab && "show"}`}>
							<a onClick={() => setShowMiningTab(!showMiningTab)} className="nav-link with-sub" href="#">
								<i className="fe fe-battery-charging sidemenu-icon"></i>
								<span className="sidemenu-label">Mining</span>
								<i className="angle fe fe-chevron-right"></i>
							</a>
							<ul className="nav-sub">
								<li className="nav-sub-item">
									<Link href="/admin/mining">
										<a className="nav-sub-link">Home</a>
									</Link>
								</li>
								<li className="nav-sub-item">
									<Link href="/admin/mining/setup">
										<a className="nav-sub-link">Setup</a>
									</Link>
								</li>
								<li className="nav-sub-item">
									<Link href="/admin/mining/miners">
										<a className="nav-sub-link">Miners</a>
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link href="/admin/trades">
								<a className="nav-link ">
									<i className="fe fe-trending-up sidemenu-icon"></i>
									<span className="sidemenu-label">Trades</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/admin/withdrawals">
								<a className="nav-link ">
									<i className="fe fe-award sidemenu-icon"></i>
									<span className="sidemenu-label">Withdrawals</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
                {/* <!-- End Sidemenu --></img> */}
			</div>
    )
}

export default AdminSideNav