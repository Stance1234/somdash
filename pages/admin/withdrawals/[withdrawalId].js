import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Oval } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import commaNumber from 'comma-number'
import moment from 'moment'
import UserModel from '../../../models/user'
import BreadCrump from "../../../components/admin/bread-crump"
import AdminLayout from "../../../components/layout/adminLayout"
import WithdrawalForm from '../../../components/admin/withdrawal/withdrawal-form'

// Status colors mapping
const statusColors = {
  pending: 'text-warning',
  approved: 'text-success',
  rejected: 'text-danger',
  processing: 'text-info',
  completed: 'text-success'
}

function AdminHandleWithdrawal() {
    const router = useRouter()
    const { withdrawalId } = router.query
    const [isLoading, setIsLoading] = useState(true)
    const [withdrawal, setWithdrawal] = useState(null)
    const [error, setError] = useState(null)

    async function loadWithdrawalDetails() {
        if (!withdrawalId) return
        
        setIsLoading(true)
        setError(null)
        
        try {
            const response = await fetch(`/api/fund/withdrawal/${withdrawalId}`)
            
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status}`)
            }

            const data = await response.json()

            if (data.status === true) {
                setWithdrawal(data.item)
            } else {
                throw new Error(data.message || 'Failed to load withdrawal details')
            }
        } catch (error) {
            console.error('Error loading withdrawal:', error)
            setError(error.message)
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadWithdrawalDetails()
    }, [withdrawalId])

    if (error) {
        return (
            <AdminLayout>
                <BreadCrump title={"Error"} crumb={"Withdrawal Details"} />
                <div className="alert alert-danger">
                    Error loading withdrawal: {error}
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <BreadCrump 
                title={withdrawal ? `Withdrawal #${withdrawalId}` : "Withdrawal"} 
                crumb={"User withdrawals"} 
            />

            <div className="card">
                <div className="card-header bd-b-0 d-flex justify-content-between align-items-center">
                    <h4 className="card-title font-weight-semibold mb-0">
                        Withdrawal Request Details
                    </h4>
                    {withdrawal && (
                        <span className={`badge badge-${withdrawal.status} ${statusColors[withdrawal.status] || ''}`}>
                            {withdrawal.status?.toUpperCase()}
                        </span>
                    )}
                </div>
                
                {isLoading ? (
                    <div className="text-center p-4">
                        <Oval height={40} width={40} />
                        <p className="mt-2">Loading withdrawal details...</p>
                    </div>
                ) : (
                    <>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <DetailItem 
                                    icon="user" 
                                    label="Name" 
                                    value={withdrawal?.username || 'N/A'} 
                                />
                                
                                <DetailItem 
                                    icon="dollar-sign" 
                                    label="Amount" 
                                    value={`$${commaNumber(withdrawal?.amount?.toFixed(2) || '0.00')}`} 
                                />
                                
                                <DetailItem 
                                    icon="credit-card" 
                                    label="Account Type" 
                                    value={withdrawal?.type || 'N/A'} 
                                />
                                
                                <DetailItem 
                                    icon="shuffle" 
                                    label="Method" 
                                    value={withdrawal?.method || 'N/A'} 
                                />
                                
                                {withdrawal?.method === 'crypto' && (
                                    <DetailItem 
                                        icon="hash" 
                                        label="Wallet Address" 
                                        // Add console log for debugging
                                        value={
                                            (() => {
                                                console.log('DEBUG: wallet_address value:', withdrawal?.wallet_address);
                                                // Improved validation
                                                if (typeof withdrawal?.wallet_address === 'string' && withdrawal.wallet_address.trim() !== '') {
                                                    return withdrawal.wallet_address;
                                                }
                                                if (withdrawal?.wallet_address) {
                                                    return String(withdrawal.wallet_address);
                                                }
                                                return 'Wallet address not provided';
                                            })()
                                        }
                                        copyable={!!withdrawal?.wallet_address}
                                    />
                                )}
                                
                                {withdrawal?.method === 'local' && (
                                    <>
                                        <DetailItem 
                                            icon="bank" 
                                            label="Bank Name" 
                                            value={withdrawal?.bank_name || 'N/A'} 
                                        />
                                        <DetailItem 
                                            icon="user-check" 
                                            label="Account Name" 
                                            value={withdrawal?.account_name || 'N/A'} 
                                        />
                                        <DetailItem 
                                            icon="credit-card" 
                                            label="Account Number" 
                                            value={withdrawal?.account_number || 'N/A'} 
                                            copyable
                                        />
                                    </>
                                )}
                                
                                <hr className="my-2" />
                                
                                <DetailItem 
                                    icon="message-square" 
                                    label="Message" 
                                    value={withdrawal?.msg || 'No message'} 
                                />
                                
                                <DetailItem 
                                    icon="calendar" 
                                    label="Date" 
                                    value={moment(withdrawal?.created_at).format("MMMM Do, YYYY [at] h:mm a")} 
                                />
                            </ul>
                        </div>
                        
                        {withdrawal && (
                            <div className="card-footer">
                                <WithdrawalForm 
                                    withdrawalId={withdrawalId} 
                                    currentStatus={withdrawal.status} 
                                    onStatusUpdate={loadWithdrawalDetails} 
                                />
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    )
}

// Reusable DetailItem component
function DetailItem({ icon, label, value, copyable = false }) {
    // Add console log for debugging
    console.log(`DetailItem: ${label} value:`, value);
    const handleCopy = () => {
        navigator.clipboard.writeText(value)
        toast.success(`${label} copied to clipboard!`)
    }
    return (
        <li className="list-group-item d-flex align-items-center">
            <i className={`fe fe-${icon} mr-3 tx-16`}></i>
            <div className="flex-grow-1">
                <span className="text-muted">{label}: </span>
                <span className="font-weight-bold ml-2">
                    {value !== undefined && value !== null && value !== '' ? value : <span className="text-danger">Not available</span>}
                </span>
            </div>
            {copyable && (
                <button 
                    onClick={handleCopy}
                    className="btn btn-sm btn-outline-primary"
                    title="Copy to clipboard"
                >
                    <i className="fe fe-copy"></i>
                </button>
            )}
        </li>
    )
}

export default AdminHandleWithdrawal

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    
    if (!session) {
        return {
            redirect: {
                destination: "/auth/signin",
                permanent: false
            }
        }
    }

    const user = await UserModel.findOne({ email: session.user.email }).lean()
    
    if (!user?.is_admin) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}