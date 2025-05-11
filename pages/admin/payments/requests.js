import { useState } from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";
import mongoose from "mongoose";
import moment from "moment";
import UserModel from "../../../models/user";
import BreadCrump from "../../../components/admin/bread-crump";
import AdminLayout from "../../../components/layout/adminLayout";
import PaymentPurposeModel from "../../../models/payment_purpose";
import FundModel from "../../../models/fund";

function Fundings({ payments }) {
  const [data, setData] = useState(payments);

  return (
    <AdminLayout>
      <BreadCrump title={"Payments"} crumb={"Requests"} />

      <div className='row'>
        <div className='col-lg-12 col-md-12'>
          <div className='card transcation-crypto'>
            <div className='card-header bd-b-0'>
              <h4 className='card-title font-weight-semibold mb-0'>Fundings</h4>
            </div>
            <div className='card-body p-0'>
              <div className=''>
                <div className='table-responsive'>
                  <div className='p-3 no-footer'>
                    <div className='row mb-3'>
                      <div className='col-sm-12 col-md-6'>
                        <div>
                          <select className='form-control'>
                            <option>all</option>
                            <option>not completed</option>
                            <option>completed</option>
                            <option>has proof</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-12 col-md-6'>
                        <input
                          type='search'
                          className='form-control'
                          placeholder='Search user name...'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <table className='table text-nowrap no-footer'>
                          <thead className='border-top'>
                            <tr role='row'>
                              <th
                                className='bg-transparent sorting_asc'
                                tabIndex='0'
                                rowSpan='1'
                                colSpan='1'
                                style={{ width: "171.484px" }}>
                                User
                              </th>
                              <th
                                className='bg-transparent sorting'
                                tabIndex='0'
                                rowSpan='1'
                                colSpan='1'
                                style={{ width: "152.953px" }}>
                                Date
                              </th>
                              <th
                                className='bg-transparent sorting'
                                tabIndex='0'
                                rowSpan='1'
                                colSpan='1'
                                style={{ width: "87.0469px" }}>
                                Purpose
                              </th>
                              <th
                                className='bg-transparent sorting'
                                tabIndex='0'
                                rowSpan='1'
                                colSpan='1'
                                style={{ width: "61.2344px" }}>
                                Amount
                              </th>
                              <th
                                className='bg-transparent sorting'
                                tabIndex='0'
                                rowSpan='1'
                                colSpan='1'
                                style={{ width: "108.938px" }}>
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data && data.length && data.length > 0 ? (
                              data.map((payment) => (
                                <tr
                                  key={payment.id}
                                  className='border-bottom-0 odd'
                                  role='row'>
                                  <td className='coin_icon d-flex sorting_1'>
                                    <span className='my-auto'>
                                      <b>{payment.username}</b>
                                    </span>
                                  </td>
                                  <td className='text-muted fs-15 font-weight-semibold'>
                                    {formattedTime(payment.time)}
                                  </td>
                                  <td className='text-muted fs-15 font-weight-semibold'>
                                    {payment.purpose}
                                  </td>
                                  <td className='text-muted fs-15 font-weight-semibold'>
                                    ${payment.amount}
                                  </td>
                                  <td>
                                    <Link href={`/admin/payments/${payment.id}`}>
                                      <a
                                        className={`btn ${
                                          payment.status
                                            ? "btn-success"
                                            : "btn-warning"
                                        } btn-md wd-100`}>
                                        {payment.status ? "Approved" : "Pending"}
                                      </a>
                                    </Link>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan='5'>No payments yet</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-footer'>
              <button className='btn ripple btn-info mr-3'>Prev</button>
              <button className='btn ripple btn-info'>Next</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Fundings;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  let authorized = false;

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    if (session) {
      const email = session.user.email;
      const user = await UserModel.findOne({ email });
      if (user.is_admin) {
        authorized = true;
      }
    }

    if (!authorized) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const funds = await FundModel.find({}).limit(20).sort("-time");

    if (funds.length > 0) {
      async function getData() {
        const data = [];

        for (const fund of funds) {
          const user = await UserModel.findById(fund._userId);
          const purpose = await PaymentPurposeModel.findById(fund._puposeId);

          const item = {
            id: fund.id,
            username: user ? `${user.firstname} ${user.lastname}` : "User not found",
            amount: fund.amount,
            time: JSON.stringify(fund.time),
            purpose: purpose ? purpose.name : "Purpose not found", // Added null check for purpose
            status: fund.status,
          };

          data.push(item);
        }

        return data;
      }

      const payments = await getData();

      return {
        props: {
          payments,
        },
      };
    }

    return {
      props: {},
    };
  } catch (error) {
    console.log(error.message);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

// New function to format the time
function formattedTime(time) {
  const parsedTime = moment(time);

  return parsedTime.isValid()
    ? parsedTime.format("ddd, MMM Do YYYY, h:mm a")
    : "Invalid Date";
}
