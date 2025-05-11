import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'

function WithdrawalDataItem({ item, count, length }) {
    const [isDeleting, setIsDeleting] = useState(false)
    const { username, amount, type } = item
    async function handleDelete({ id }) {
        try {
            setIsDeleting(true)

            const request = await fetch(`/api/fund/withdrawal/${ id }`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const response = await request.json()

            if(response.status === true) {
                setIsDeleting(false)
                toast.success(response.message)
            } else {
                throw new Error(response.message)
            }
        } catch(error) {
            setIsDeleting(false)
            toast.error(error.message)
        }
    }
    return (
        <tr className={`${ count !== length && "border-bottom" }`}>
            <td className="text-muted fs-15 font-weight-semibold">{ count }</td>
            <td className="text-dark fs-15 font-weight-semibold">{ username }</td>
            <td className="text-muted fs-15 font-weight-semibold">{ amount }</td>
            <td className="text-muted fs-15 font-weight-semibold">{ type }</td>
            <td className="">
                <a disabled={isDeleting} onClick={ () => handleDelete({ id: item.id })} className="btn btn-outline-danger btn-sm rounded-11" data-toggle="tooltip" data-original-title="Delete"><i><svg className="table-delete" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg></i></a>
                <Link href={`/admin/withdrawals/${ item.id }`}>
                    <a className="btn btn-outline-info btn-sm rounded-11 ml-3">
                        <i className="fe fe-eye"></i>
                    </a>
                </Link>
            </td>
        </tr>
    )
}

export default WithdrawalDataItem