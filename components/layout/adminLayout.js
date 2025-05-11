import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import AdminSideNav from '../admin/side-nav/sideNav'
import AdminMainHeader from '../admin/header/main-header'
import AdmiMainMobileHeader from '../admin/header/mobile-main-header'
import AdminMainFooter from '../admin/footer/main-footer'
// import AdminSideNavRight from '../admin/side-nav/side-nav-right'


function AdminLayout({ children }) {
    useEffect(() => {
        document.body.className = "main-body leftmenu"
    }, [])

    return (
        <>
            <Head>

                {/* <!-- Title --> */}
                <title>Trademark dashboard</title>

                {/* <!-- Bootstrap css--> */}
                <link href="/admin/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>

                {/* <!-- Icons css--> */}
                <link href="/admin/assets/css/icons.css" rel="stylesheet"/>

                {/* <!-- Style css--> */}
                <link href="/admin/assets/css/style.css" rel="stylesheet"/>
                <link href="/admin/assets/css/dark-boxed.css" rel="stylesheet"/>
                <link href="/admin/assets/css/boxed.css" rel="stylesheet"/>
                <link href="/admin/assets/css/skins.css" rel="stylesheet"/>
                <link href="/admin/assets/css/dark-style.css" rel="stylesheet"/>

                {/* <!-- Color css--> */}
                <link id="theme" rel="stylesheet" type="text/css" media="all" href="/admin/assets/css/colors/color.css"/>

                {/* <!-- Select2 css --> */}
                <link href="/admin/assets/plugins/select2/css/select2.min.css" rel="stylesheet"/>

                {/* <!-- Internal DataTables css--> */}
                <link href="/admin/assets/plugins/datatable/dataTables.bootstrap4.min.css" rel="stylesheet" />
                <link href="/admin/assets/plugins/datatable/responsivebootstrap4.min.css" rel="stylesheet" />
                <link href="/admin/assets/plugins/datatable/fileexport/buttons.bootstrap4.min.css" rel="stylesheet" />

                {/* <!-- Sidemenu css--> */}
                <link href="/admin/assets/css/sidemenu/sidemenu.css" rel="stylesheet"/>

                {/* <!-- Switcher css--> */}
                <link href="/admin/assets/switcher/css/switcher.css" rel="stylesheet"/>
                <link href="/admin/assets/switcher/demo.css" rel="stylesheet"/>

            </Head>
            <div className='page'>
                <AdminSideNav />
                <AdminMainHeader />
                <AdmiMainMobileHeader />
                <div className="main-content side-content pt-0">
                    <div className="container-fluid">
                        <div className="inner-body">
                            {/* <!-- Page Header --> */}
                            {/* // TODO: turn to a component that takes props */}
                            
                            {/* <!-- End Page Header --> */}
                            { children }
                        </div>
                    </div>
                </div>
                <AdminMainFooter />

                {/* <AdminSideNavRight /> */}

                {/* // ! Script tags */}
                {/* <!-- Jquery js--> */}
                <Script src="/admin/assets/plugins/jquery/jquery.min.js" strategy='beforeInteractive'/>

                {/* <!-- Bootstrap js--> */}
                <Script src="/admin/assets/plugins/bootstrap/js/popper.min.js" strategy='beforeInteractive'/>
                <Script src="/admin/assets/plugins/bootstrap/js/bootstrap.min.js" strategy='beforeInteractive'/>

                {/* <!-- Internal Chart.Bundle js--> */}
                <Script src="/admin/assets/plugins/chart.js/Chart.bundle.min.js" strategy='beforeInteractive'/>

                {/* <!-- Peity js--> */}
                <Script src="/admin/assets/plugins/peity/jquery.peity.min.js" strategy='beforeInteractive'/>

                {/* <!--Internal Apexchart js--> */}
                <Script src="/admin/assets/js/apexcharts.js" strategy='beforeInteractive'/>

                {/* <!-- Internal Data Table js --> */}
                <Script src="/admin/assets/plugins/datatable/jquery.dataTables.min.js" strategy='beforeInteractive'/>
                <Script src="/admin/assets/plugins/datatable/dataTables.bootstrap4.min.js" strategy='beforeInteractive'/>
                <Script src="/admin/assets/js/table-data.js" />
                <Script src="/admin/assets/plugins/datatable/dataTables.responsive.min.js" strategy='beforeInteractive'/>
                <Script src="/admin/assets/plugins/datatable/fileexport/dataTables.buttons.min.js" strategy='beforeInteractive'/>
                <Script src="/admin/assets/plugins/datatable/fileexport/buttons.bootstrap4.min.js" strategy='beforeInteractive'/>


                {/* <!-- Perfect-scrollbar js --> */}
                <Script src="/admin/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js" strategy='beforeInteractive'/>

                {/* <!-- Select2 js--> */}
                <Script src="/admin/assets/plugins/select2/js/select2.min.js" strategy='beforeInteractive'/>
                <Script src="/admin/assets/js/select2.js" strategy='beforeInteractive'/>

                {/* <!-- Sidemenu js --> */}
                <Script src="/admin/assets/plugins/sidemenu/sidemenu.js" strategy='lazyOnload'/>

                {/* <!-- Sidebar js --> */}
                <Script src="/admin/assets/plugins/sidebar/sidebar.js" strategy='lazyOnload'/>

                {/* <!-- INTERNAL INDEX js --> */}
                {/* <Script src="/admin/assets/js/index.js" strategy='lazyOnload'/> */}

                {/* <!-- Sticky js --> */}
                <Script src="/admin/assets/js/sticky.js" strategy='lazyOnload'/>

                {/* <!-- Custom js --> */}
                <Script src="/admin/assets/js/custom.js" strategy='lazyOnload'/>

                {/* <!-- Switcher js --> */}
                <Script src="/admin/assets/switcher/js/switcher.js" strategy='lazyOnload'/>
            </div>
        </>
    )

}

export default AdminLayout