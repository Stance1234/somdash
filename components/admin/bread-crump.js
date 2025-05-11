


function BreadCrump({ title, crumb}) {
    return (
        <div className="page-header">
            <div className="page-header-1">
                <h1 className="main-content-title tx-30">{ title }</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">{ crumb }</a></li>
                </ol>
            </div>
        </div>
    )
}

export default BreadCrump