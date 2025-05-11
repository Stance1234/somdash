import UserModel from "../../../../models/user"
import transporter from "../../../../lib/mailer"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import commaNumber from "comma-number"
import moment from "moment"
import _ from "lodash"
import UserWithdrawalModel from "../../../../models/withdrawal"

async function handler(req, res) {
	// * Only PUT mothod is accepted
	if (req.method === "PUT") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const session = await getSession({ req })
			const { withdrawalId } = req.query
			const { status, msg, type } = req.body
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			// TODO: update withdrawal request
			const withdrawal = await UserWithdrawalModel.findByIdAndUpdate(withdrawalId, { status, msg })

			if (!withdrawal) return res.status(404).json({ status: false, message: "Withdrawal request not found" })

			const withdrawalUser = await UserModel.findById(withdrawal._userId)

			if (!withdrawalUser) return res.status(404).json({ status: false, message: "No matching user found" })

			const { amount } = withdrawal
			// TODO: send email
			await transporter.sendMail({
				from: "Octa Trade Global", // sender address
				to: withdrawalUser.email, // list of receivers
				subject: "Withdrawal request status update", // Subject line
				text: `Your request to withdrawal $${commaNumber(
					amount
				)} from your ${type} account has been recieved.\n Thank you for using Octatradeglobal.`, // plain text body
				html: `<!DOCTYPE html>

                <html
                    lang="en"
                    xmlns:o="urn:schemas-microsoft-com:office:office"
                    xmlns:v="urn:schemas-microsoft-com:vml"
                >
                    <head>
                        <title></title>
                        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                        <!--[if mso]>
                            <xml>
                                <o:OfficeDocumentSettings>
                                    <o:PixelsPerInch>96</o:PixelsPerInch>
                                    <o:AllowPNG />
                                </o:OfficeDocumentSettings>
                            </xml>
                        <![endif]-->
                        <!--[if !mso]><!-->
                        <link
                            href="https://fonts.googleapis.com/css?family=Open+Sans"
                            rel="stylesheet"
                            type="text/css"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Lato"
                            rel="stylesheet"
                            type="text/css"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Roboto"
                            rel="stylesheet"
                            type="text/css"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Permanent+Marker"
                            rel="stylesheet"
                            type="text/css"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Abril+Fatface"
                            rel="stylesheet"
                            type="text/css"
                        />
                        <!--<![endif]-->
                        <style>
                            * {
                                box-sizing: border-box;
                            }
                
                            body {
                                margin: 0;
                                padding: 0;
                            }
                
                            a[x-apple-data-detectors] {
                                color: inherit !important;
                                text-decoration: inherit !important;
                            }
                
                            #MessageViewBody a {
                                color: inherit;
                                text-decoration: none;
                            }
                
                            p {
                                line-height: inherit;
                            }
                
                            @media (max-width: 700px) {
                                .icons-inner {
                                    text-align: center;
                                }
                
                                .icons-inner td {
                                    margin: 0 auto;
                                }
                
                                .row-content {
                                    width: 100% !important;
                                }
                
                                .column .border {
                                    display: none;
                                }
                
                                table {
                                    table-layout: fixed !important;
                                }
                
                                .stack .column {
                                    width: 100%;
                                    display: block;
                                }
                            }
                        </style>
                    </head>
                    <body
                        style="
                            background-color: #f9f9f9;
                            margin: 0;
                            padding: 0;
                            -webkit-text-size-adjust: none;
                            text-size-adjust: none;
                        "
                    >
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="nl-container"
                            role="presentation"
                            style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                background-color: #f9f9f9;
                            "
                            width="100%"
                        >
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row row-1"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                                            width="100%"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="row-content stack"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0pt;
                                                                mso-table-rspace: 0pt;
                                                                background-color: #cbdbef;
                                                                color: #000000;
                                                                width: 680px;
                                                            "
                                                            width="680"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="column column-1"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            padding-top: 20px;
                                                                            padding-bottom: 20px;
                                                                            border-top: 0px;
                                                                            border-right: 0px;
                                                                            border-bottom: 0px;
                                                                            border-left: 0px;
                                                                        "
                                                                        width="100%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="heading_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        width: 100%;
                                                                                        text-align: center;
                                                                                    "
                                                                                >
                                                                                    <h1
                                                                                        style="
                                                                                            margin: 0;
                                                                                            color: #555555;
                                                                                            font-size: 23px;
                                                                                            font-family: Arial,
                                                                                                Helvetica
                                                                                                    Neue,
                                                                                                Helvetica,
                                                                                                sans-serif;
                                                                                            line-height: 120%;
                                                                                            text-align: center;
                                                                                            direction: ltr;
                                                                                            font-weight: 700;
                                                                                            letter-spacing: normal;
                                                                                            margin-top: 0;
                                                                                            margin-bottom: 0;
                                                                                        "
                                                                                    >
                                                                                        <span
                                                                                            class="tinyMce-placeholder"
                                                                                        >
                                                                                            Octatradeglobal
                                                                                        </span>
                                                                                    </h1>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="image_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        width: 100%;
                                                                                        padding-right: 0px;
                                                                                        padding-left: 0px;
                                                                                        padding-top: 70px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        align="center"
                                                                                        style="
                                                                                            line-height: 10px;
                                                                                        "
                                                                                    >
                                                                                        <img
                                                                                            alt="Check Icon"
                                                                                            src="www.dashboard.octatradeglobal.com/images/check-icon.png"
                                                                                            style="
                                                                                                display: block;
                                                                                                height: auto;
                                                                                                border: 0;
                                                                                                width: 93px;
                                                                                                max-width: 100%;
                                                                                            "
                                                                                            title="Check Icon"
                                                                                            width="93"
                                                                                        />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding-bottom: 25px;
                                                                                        padding-left: 20px;
                                                                                        padding-right: 20px;
                                                                                        padding-top: 10px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        style="
                                                                                            font-family: Georgia,
                                                                                                'Times New Roman',
                                                                                                serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 14px;
                                                                                                font-family: Georgia,
                                                                                                    Times,
                                                                                                    'Times New Roman',
                                                                                                    serif;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                                color: #2f2f2f;
                                                                                                line-height: 1.2;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 14px;
                                                                                                    text-align: center;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        font-size: 42px;
                                                                                                    "
                                                                                                >
                                                                                                    Withdrawal request
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding-bottom: 80px;
                                                                                        padding-left: 30px;
                                                                                        padding-right: 30px;
                                                                                        padding-top: 10px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        style="
                                                                                            font-family: sans-serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 14px;
                                                                                                font-family: Arial,
                                                                                                    Helvetica
                                                                                                        Neue,
                                                                                                    Helvetica,
                                                                                                    sans-serif;
                                                                                                mso-line-height-alt: 21px;
                                                                                                color: #2f2f2f;
                                                                                                line-height: 1.5;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 14px;
                                                                                                    text-align: center;
                                                                                                    mso-line-height-alt: 24px;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        font-size: 16px;
                                                                                                    "
                                                                                                >
                                                                                                    Hi
                                                                                                    <strong>
                                                                                                        <u>
                                                                                                            ${withdrawalUser.firstname}
                                                                                                            ${withdrawalUser.lastname}
                                                                                                        </u>
                                                                                                    </strong>
                                                                                                    ,
                                                                                                </span>
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 14px;
                                                                                                    text-align: center;
                                                                                                    mso-line-height-alt: 21px;
                                                                                                "
                                                                                            >
                                                                                                 
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 14px;
                                                                                                    text-align: center;
                                                                                                    mso-line-height-alt: 24px;
                                                                                                "
                                                                                            >
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 14px;
                                                                                                    text-align: center;
                                                                                                    mso-line-height-alt: 21px;
                                                                                                "
                                                                                            >
                                                                                                 
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 14px;
                                                                                                    text-align: center;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        color: #000000;
                                                                                                        background-color: transparent;
                                                                                                    "
                                                                                                >
                                                                                                    Your request to withdrawal $${commaNumber(
																		amount
																	)} from your ${type} account status has been updated to ${status}.
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row row-2"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                                            width="100%"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="row-content stack"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0pt;
                                                                mso-table-rspace: 0pt;
                                                                background-color: #ffffff;
                                                                color: #000000;
                                                                width: 680px;
                                                            "
                                                            width="680"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="column column-1"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            padding-top: 0px;
                                                                            padding-bottom: 0px;
                                                                            border-top: 0px;
                                                                            border-right: 0px;
                                                                            border-bottom: 0px;
                                                                            border-left: 0px;
                                                                        "
                                                                        width="100%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding-bottom: 20px;
                                                                                        padding-left: 20px;
                                                                                        padding-right: 20px;
                                                                                        padding-top: 50px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        style="
                                                                                            font-family: sans-serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 14px;
                                                                                                font-family: Arial,
                                                                                                    Helvetica
                                                                                                        Neue,
                                                                                                    Helvetica,
                                                                                                    sans-serif;
                                                                                                mso-line-height-alt: 16.8px;
                                                                                                color: #2f2f2f;
                                                                                                line-height: 1.2;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    text-align: center;
                                                                                                    letter-spacing: 1px;
                                                                                                "
                                                                                            >
                                                                                                <strong>
                                                                                                    <span
                                                                                                        style="
                                                                                                            font-size: 18px;
                                                                                                        "
                                                                                                    >
                                                                                                        WITHDRAWAL
                                                                                                        DETAILS
                                                                                                    </span>
                                                                                                </strong>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row row-3"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                                            width="100%"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="row-content"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0pt;
                                                                mso-table-rspace: 0pt;
                                                                background-color: #ffffff;
                                                                color: #000000;
                                                                width: 680px;
                                                            "
                                                            width="680"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="column column-1"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            border-bottom: 0px
                                                                                solid #5d77a9;
                                                                            border-left: 0px
                                                                                solid #5d77a9;
                                                                            border-right: 0px
                                                                                solid #5d77a9;
                                                                            border-top: 0px
                                                                                solid #5d77a9;
                                                                        "
                                                                        width="50%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding-bottom: 15px;
                                                                                        padding-left: 10px;
                                                                                        padding-right: 20px;
                                                                                        padding-top: 15px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        style="
                                                                                            font-family: sans-serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 14px;
                                                                                                font-family: Arial,
                                                                                                    Helvetica
                                                                                                        Neue,
                                                                                                    Helvetica,
                                                                                                    sans-serif;
                                                                                                mso-line-height-alt: 28px;
                                                                                                color: #393d47;
                                                                                                line-height: 2;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: right;
                                                                                                "
                                                                                            >
                                                                                                <strong>
                                                                                                    <span
                                                                                                        style="
                                                                                                            font-size: 16px;
                                                                                                        "
                                                                                                    >
                                                                                                        <span
                                                                                                            style="
                                                                                                                color: #5d77a9;
                                                                                                            "
                                                                                                        >
                                                                                                            Amount
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </strong>
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: right;
                                                                                                "
                                                                                            >
                                                                                                <strong>
                                                                                                    <span
                                                                                                        style="
                                                                                                            font-size: 16px;
                                                                                                        "
                                                                                                    >
                                                                                                        <span
                                                                                                            style="
                                                                                                                color: #5d77a9;
                                                                                                            "
                                                                                                        >
                                                                                                            Date
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </strong>
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: right;
                                                                                                "
                                                                                            >
                                                                                                <strong>
                                                                                                    <span
                                                                                                        style="
                                                                                                            font-size: 16px;
                                                                                                        "
                                                                                                    >
                                                                                                        <span
                                                                                                            style="
                                                                                                                color: #5d77a9;
                                                                                                            "
                                                                                                        >
                                                                                                            Account Type
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </strong>
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: right;
                                                                                                "
                                                                                            >
                                                                                                <strong>
                                                                                                    <span
                                                                                                        style="
                                                                                                            font-size: 16px;
                                                                                                        "
                                                                                                    >
                                                                                                        <span
                                                                                                            style="
                                                                                                                color: #5d77a9;
                                                                                                            "
                                                                                                        >
                                                                                                            Status
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </strong>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                    <td
                                                                        class="column column-2"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            border-bottom: 0px
                                                                                solid #5d77a9;
                                                                            border-left: 0px
                                                                                solid #5d77a9;
                                                                            border-right: 0px
                                                                                solid #5d77a9;
                                                                            border-top: 0px
                                                                                solid #5d77a9;
                                                                        "
                                                                        width="50%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding-bottom: 10px;
                                                                                        padding-left: 20px;
                                                                                        padding-right: 10px;
                                                                                        padding-top: 10px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        style="
                                                                                            font-family: sans-serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 14px;
                                                                                                font-family: Arial,
                                                                                                    Helvetica
                                                                                                        Neue,
                                                                                                    Helvetica,
                                                                                                    sans-serif;
                                                                                                mso-line-height-alt: 28px;
                                                                                                color: #2f2f2f;
                                                                                                line-height: 2;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: left;
                                                                                                    mso-line-height-alt: 32px;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        font-size: 16px;
                                                                                                    "
                                                                                                >
                                                                                                    $${commaNumber(amount)}
                                                                                                </span>
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: left;
                                                                                                    mso-line-height-alt: 32px;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        font-size: 16px;
                                                                                                    "
                                                                                                >
                                                                                                    ${moment(withdrawal.created_at).format("D/M/YY")}
                                                                                                </span>
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: left;
                                                                                                "
                                                                                            >
                                                                                                ${type}
                                                                                            </p>
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: left;
                                                                                                "
                                                                                            >
                                                                                                ${status}
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row row-4"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                                            width="100%"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="row-content stack"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0pt;
                                                                mso-table-rspace: 0pt;
                                                                background-color: #ffffff;
                                                                color: #000000;
                                                                width: 680px;
                                                            "
                                                            width="680"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="column column-1"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            padding-top: 0px;
                                                                            padding-bottom: 0px;
                                                                            border-top: 0px;
                                                                            border-right: 0px;
                                                                            border-bottom: 0px;
                                                                            border-left: 0px;
                                                                        "
                                                                        width="100%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding-bottom: 40px;
                                                                                        padding-left: 30px;
                                                                                        padding-right: 30px;
                                                                                        padding-top: 40px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        style="
                                                                                            font-family: sans-serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 14px;
                                                                                                font-family: Arial,
                                                                                                    Helvetica
                                                                                                        Neue,
                                                                                                    Helvetica,
                                                                                                    sans-serif;
                                                                                                mso-line-height-alt: 21px;
                                                                                                color: #2f2f2f;
                                                                                                line-height: 1.5;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 16px;
                                                                                                    text-align: center;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        color: #000000;
                                                                                                    "
                                                                                                >
                                                                                                    <span
                                                                                                        style="
                                                                                                            font-size: 14px;
                                                                                                        "
                                                                                                    >
                                                                                                        Thank
                                                                                                        you
                                                                                                        for
                                                                                                        using
                                                                                                        <a
                                                                                                            href="https://www.dashboard.octatradeglobal.com"
                                                                                                            rel="noopener"
                                                                                                            style="
                                                                                                                text-decoration: none;
                                                                                                                color: #8a3b8f;
                                                                                                            "
                                                                                                            target="_blank"
                                                                                                            title="Octa Trade Global"
                                                                                                        >
                                                                                                            https://www.dashboard.octatradeglobal.com.
                                                                                                        </a>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row row-5"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                                            width="100%"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="row-content stack"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0pt;
                                                                mso-table-rspace: 0pt;
                                                                background-color: #5d77a9;
                                                                color: #000000;
                                                                width: 680px;
                                                            "
                                                            width="680"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="column column-1"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            padding-top: 5px;
                                                                            padding-bottom: 5px;
                                                                            border-top: 0px;
                                                                            border-right: 0px;
                                                                            border-bottom: 0px;
                                                                            border-left: 0px;
                                                                        "
                                                                        width="100%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        padding-bottom: 10px;
                                                                                        padding-left: 10px;
                                                                                        padding-right: 10px;
                                                                                        padding-top: 30px;
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        style="
                                                                                            font-family: sans-serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 14px;
                                                                                                mso-line-height-alt: 21px;
                                                                                                color: #f9f9f9;
                                                                                                line-height: 1.5;
                                                                                                font-family: Arial,
                                                                                                    Helvetica
                                                                                                        Neue,
                                                                                                    Helvetica,
                                                                                                    sans-serif;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 12px;
                                                                                                    text-align: center;
                                                                                                    mso-line-height-alt: 18px;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        font-size: 12px;
                                                                                                    "
                                                                                                >
                                                                                                    BitGo4@gmail.com
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row row-6"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                                            width="100%"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="row-content stack"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0pt;
                                                                mso-table-rspace: 0pt;
                                                                background-color: #5d77a9;
                                                                color: #000000;
                                                                width: 680px;
                                                            "
                                                            width="680"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="column column-1"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            padding-top: 0px;
                                                                            padding-bottom: 20px;
                                                                            border-top: 0px;
                                                                            border-right: 0px;
                                                                            border-bottom: 0px;
                                                                            border-left: 0px;
                                                                        "
                                                                        width="100%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="10"
                                                                            cellspacing="0"
                                                                            class="text_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                                word-break: break-word;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td>
                                                                                    <div
                                                                                        style="
                                                                                            font-family: sans-serif;
                                                                                        "
                                                                                    >
                                                                                        <div
                                                                                            class="txtTinyMce-wrapper"
                                                                                            style="
                                                                                                font-size: 12px;
                                                                                                mso-line-height-alt: 14.399999999999999px;
                                                                                                color: #cfceca;
                                                                                                line-height: 1.2;
                                                                                                font-family: Arial,
                                                                                                    Helvetica
                                                                                                        Neue,
                                                                                                    Helvetica,
                                                                                                    sans-serif;
                                                                                            "
                                                                                        >
                                                                                            <p
                                                                                                style="
                                                                                                    margin: 0;
                                                                                                    font-size: 14px;
                                                                                                    text-align: center;
                                                                                                "
                                                                                            >
                                                                                                <span
                                                                                                    style="
                                                                                                        font-size: 12px;
                                                                                                    "
                                                                                                >
                                                                                                    2021
                                                                                                    ©
                                                                                                    All
                                                                                                    Rights
                                                                                                    Reserved
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row row-7"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                                            width="100%"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table
                                                            align="center"
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="row-content stack"
                                                            role="presentation"
                                                            style="
                                                                mso-table-lspace: 0pt;
                                                                mso-table-rspace: 0pt;
                                                                color: #000000;
                                                                width: 680px;
                                                            "
                                                            width="680"
                                                        >
                                                            <tbody>
                                                                <tr>
                                                                    <td
                                                                        class="column column-1"
                                                                        style="
                                                                            mso-table-lspace: 0pt;
                                                                            mso-table-rspace: 0pt;
                                                                            font-weight: 400;
                                                                            text-align: left;
                                                                            vertical-align: top;
                                                                            padding-top: 5px;
                                                                            padding-bottom: 5px;
                                                                            border-top: 0px;
                                                                            border-right: 0px;
                                                                            border-bottom: 0px;
                                                                            border-left: 0px;
                                                                        "
                                                                        width="100%"
                                                                    >
                                                                        <table
                                                                            border="0"
                                                                            cellpadding="0"
                                                                            cellspacing="0"
                                                                            class="icons_block"
                                                                            role="presentation"
                                                                            style="
                                                                                mso-table-lspace: 0pt;
                                                                                mso-table-rspace: 0pt;
                                                                            "
                                                                            width="100%"
                                                                        >
                                                                            <tr>
                                                                                <td
                                                                                    style="
                                                                                        vertical-align: middle;
                                                                                        color: #9d9d9d;
                                                                                        font-family: inherit;
                                                                                        font-size: 15px;
                                                                                        padding-bottom: 5px;
                                                                                        padding-top: 5px;
                                                                                        text-align: center;
                                                                                    "
                                                                                >
                                                                                    <table
                                                                                        cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        role="presentation"
                                                                                        style="
                                                                                            mso-table-lspace: 0pt;
                                                                                            mso-table-rspace: 0pt;
                                                                                        "
                                                                                        width="100%"
                                                                                    >
                                                                                        <tr>
                                                                                            <td
                                                                                                style="
                                                                                                    vertical-align: middle;
                                                                                                    text-align: center;
                                                                                                "
                                                                                            >
                                                                                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                                <!--[if !vml]><!-->
                                                                                                <table
                                                                                                    cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    class="icons-inner"
                                                                                                    role="presentation"
                                                                                                    style="
                                                                                                        mso-table-lspace: 0pt;
                                                                                                        mso-table-rspace: 0pt;
                                                                                                        display: inline-block;
                                                                                                        margin-right: -4px;
                                                                                                        padding-left: 0px;
                                                                                                        padding-right: 0px;
                                                                                                    "
                                                                                                >
                                                                                                    <!--<![endif]-->
                                                                                                    <tr>
                                                                                                        <td
                                                                                                            style="
                                                                                                                vertical-align: middle;
                                                                                                                text-align: center;
                                                                                                                padding-top: 5px;
                                                                                                                padding-bottom: 5px;
                                                                                                                padding-left: 5px;
                                                                                                                padding-right: 6px;
                                                                                                            "
                                                                                                        >
                                                                                                            <a
                                                                                                                href="https://www.dashboard.octatradeglobal.com/"
                                                                                                                style="
                                                                                                                    text-decoration: none;
                                                                                                                "
                                                                                                                target="_blank"
                                                                                                            >
                                                                                                                <img
                                                                                                                    align="center"
                                                                                                                    alt="trademark fx"
                                                                                                                    class="icon"
                                                                                                                    height="32"
                                                                                                                    src="www.dashboard.octatradeglobal.com/images/logo.png"
                                                                                                                    style="
                                                                                                                        display: block;
                                                                                                                        height: auto;
                                                                                                                        margin: 0
                                                                                                                            auto;
                                                                                                                        border: 0;
                                                                                                                    "
                                                                                                                    width="34"
                                                                                                                />
                                                                                                            </a>
                                                                                                        </td>
                                                                                                        <td
                                                                                                            style="
                                                                                                                font-family: Arial,
                                                                                                                    Helvetica
                                                                                                                        Neue,
                                                                                                                    Helvetica,
                                                                                                                    sans-serif;
                                                                                                                font-size: 15px;
                                                                                                                color: #9d9d9d;
                                                                                                                vertical-align: middle;
                                                                                                                letter-spacing: undefined;
                                                                                                                text-align: center;
                                                                                                            "
                                                                                                        >
                                                                                                            <a
                                                                                                                href="https://www.dashboard.octatradeglobal.com//"
                                                                                                                style="
                                                                                                                    color: #9d9d9d;
                                                                                                                    text-decoration: none;
                                                                                                                "
                                                                                                                target="_blank"
                                                                                                            >
                                                                                                                trading is easy with Octatradeglobal
                                                                                                            </a>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- End -->
                    </body>
                </html>
                `, // html body
			})

			res.status(200).json({ status: true, message: "Success" })
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went wrong" })
		}

		// mongoose.close()
	} else if (req.method === "GET") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const session = await getSession({ req })
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			const { withdrawalId } = req.query
			const withdrawalsDB = await UserWithdrawalModel.findById(withdrawalId)
			const withdrawal = _.pick(withdrawalsDB, [
				"id",
				"amount",
				"created_at",
				"status",
				"type",
				"msg",
				"method",
				"_userId",
				"address",
				"bank_name",
				"account_name",
				"account_number",
			])

			const withdrawalUser = await UserModel.findById(withdrawal._userId)

			const item = {
				id: withdrawal.id,
				amount: withdrawal.amount,
				status: withdrawal.status,
				username: `${withdrawalUser.firstname} ${withdrawalUser.lastname}`,
				created_at: withdrawal.created_at.toString(),
				msg: withdrawal.msg,
				type: withdrawal.type,
				method: withdrawal.method,
				address: withdrawal.address,
				bank_name: withdrawal.bank_name,
				account_name: withdrawal.account_name,
				account_number: withdrawal.account_number,
				created_at: withdrawal.created_at,
			}

			res.status(200).json({ status: true, message: "Success", item })
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went wrong" })
		}
	} else if (req.method === "DELETE") {
		try {
			await mongoose.connect(process.env.MONGODB_URL)

			const { withdrawalId } = req.query
			const session = await getSession({ req })
			const email = session.user.email
			const user = await UserModel.findOne({ email })

			if (!user || !user.is_admin) {
				return res.status(401).json({ status: false, message: "Transaction not possible for unathenticated user" })
			}

			const withdrawalDB = await UserWithdrawalModel.findByIdAndRemove(withdrawalId)
			if (!withdrawalDB) return res.status(404).json({ status: false, message: "Withdrawal request not found" })

			res.status(200).json({ status: true, message: "Delete Successful" })
		} catch (error) {
			console.log(error.message)
			res.status(500).json({ status: false, message: "Something went wrong" })
		}
	} else {
		//Response for other than POST method
		res.status(500).json({ status: false, message: "Route not valid" })
	}
}

export default handler
