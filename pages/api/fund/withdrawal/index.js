// import UserModel from "../../../../models/user"
// import transporter from "../../../../lib/mailer"
// import { getSession } from "next-auth/react"
// import mongoose from "mongoose"
// import commaNumber from "comma-number"
// import moment from "moment"
// import fs from "fs"
// import path from "path"
// import UserTradingFundModel from "../../../../models/trading-balance"
// import MiningContractModel from "../../../../models/mining-contract"
// import UserWithdrawalModel from "../../../../models/withdrawal"
// import AssetModel from "../../../../models/assets"
// import UserMiningContractModel from "../../../../models/user-mining-contract"
// import getTemplate from "../../../../lib/get-email-template"

// async function handler(req, res) {
// 	// Only POST method is accepted
// 	if (req.method === "POST") {
// 		try {
// 			await mongoose.connect(process.env.MONGODB_URL);

// 			const session = await getSession({ req });
// 			if (!session) {
// 				return res.status(401).json({ status: false, message: "User not authenticated" });
// 			}

// 			const { amount, _balanceId, type, method, details, address } = req.body;

// 			// Validate required fields
// 			if (!amount || !_balanceId || !type || !method || !address) {
// 				console.error("Validation failed: Missing required fields", { amount, _balanceId, type, method, address });
// 				return res.status(400).json({ status: false, message: "Missing required fields" });
// 			}

// 			const email = session.user.email;
// 			const user = await UserModel.findOne({ email });

// 			if (!user) {
// 				console.error("User not found for email:", email);
// 				return res.status(401).json({ status: false, message: "Transaction not possible for unauthenticated user" });
// 			}

// 			// TODO: check account balance type
// 			let accountBalance = null;
// 			if (type === "mining") {
// 				const userMiningAccount = await UserMiningContractModel.findById(_balanceId);
// 				if (!userMiningAccount) {
// 					console.error("Mining account not found for balance ID:", _balanceId);
// 					return res.status(401).json({ status: false, message: "No user account found" });
// 				}
// 				const contract = await MiningContractModel.findById(userMiningAccount._contractId);
// 				const asset = await AssetModel.findById(contract._assetId);

// 				accountBalance = userMiningAccount.quantity * asset.price;

// 				// TODO: check if amount is less than balance
// 				if (accountBalance < amount) return res.status(401).json({ status: false, message: "Balance too low" });

// 				// TODO: reduce account balance || asset quantity
// 				const assetWithdrawnQuantity = amount / asset.price;
// 				userMiningAccount.quantity -= assetWithdrawnQuantity;
// 				await userMiningAccount.save();
// 			} else if (type === "trading") {
// 				const userTrading = await UserTradingFundModel.findById(_balanceId);
// 				if (!userTrading) {
// 					console.error("Trading account not found for balance ID:", _balanceId);
// 					return res.status(401).json({ status: false, message: "No user account found" });
// 				}

// 				accountBalance = userTrading.balance;

// 				// TODO: check if amount is less than balance
// 				if (accountBalance < amount) return res.status(401).json({ status: false, message: "Balance too low" });

// 				// TODO: reduce account balance || asset quantity
// 				userTrading.balance -= amount;
// 				await userTrading.save();
// 			} else {
// 				console.error("Invalid account balance type:", type);
// 				return res.status(401).json({ status: false, message: "Invalid account balance type" });
// 			}

// 			// TODO: create withdrawal request
// 			const withdrawal = new UserWithdrawalModel({
// 				_userId: user.id,
// 				amount,
// 				_balanceId,
// 				type,
// 				method,
// 				wallet_address: address,
// 				...details,
// 			});

// 			const savedWithdrawal = await withdrawal.save();
// 			if (!savedWithdrawal) {
// 				console.error("Failed to save withdrawal request:", withdrawal);
// 				return res.status(500).json({ status: false, message: "Failed to create withdrawal request" });
// 			}

// 			// TODO: send email
// 			let htmlData = await getTemplate(req, "withdrawal", "request.html");
// 			htmlData = htmlData.replaceAll("[name]", user.firstname);
// 			htmlData = htmlData.replace(/\[brand\s+name\]/g, "Spartan Capital Trader");
// 			let withdrawalInfo = `
//                 Date: ${new Intl.DateTimeFormat("en-US").format(Date.now())}<br />
//                 Amount: $${amount}<br />
//                 Method: ${method === "local" ? "Bank Transfer" : "Crypto (USDT)"}<br />
//                 ${
// 				method === "local"
// 					? `Bank Name: ${details.bank_name}<br />
//                         Account Name: ${details.account_name}<br />
//                         Account Number: ${details.account_number}<br />
//                     `
// 					: `Wallet Address: ${address}`
// 			}
//             `;
// 			htmlData = htmlData.replaceAll("[info]", withdrawalInfo);

// 			try {
// 				const emailSent = await transporter.sendMail({
// 					from: "Spartan Capital Trader", // sender address
// 					to: email, // list of receivers
// 					subject: "Withdrawal request", // Subject line
// 					text: `Your request to withdrawal $${commaNumber(
// 						amount
// 					)} from your ${type} account has been received.\n Thank you for using SpartanCapital.`, // plain text body
// 					html: htmlData,
// 				});

// 				if (!emailSent) {
// 					console.error("Failed to send confirmation email to:", email);
// 					return res.status(500).json({ status: false, message: "Failed to send confirmation email" });
// 				}
// 			} catch (emailError) {
// 				console.error("Error sending email:", emailError.stack);
// 				return res.status(500).json({ status: false, message: "Error sending confirmation email" });
// 			}

// 			res.status(200).json({ status: true, message: "Withdrawal request successful" });
// 		} catch (error) {
// 			console.error("Error processing withdrawal request:", error.stack);
// 			res.status(500).json({ status: false, message: "Internal server error" });
// 		} finally {
// 			// Ensure the database connection is closed
// 			if (mongoose.connection.readyState === 1) {
// 				await mongoose.disconnect();
// 			}
// 		}
// 	} else {
// 		// Response for other than POST method
// 		res.status(405).json({ status: false, message: "Method not allowed" });
// 	}
// }

// export default handler;



import UserModel from "../../../../models/user"
import { getSession } from "next-auth/react"
import mongoose from "mongoose"
import UserTradingFundModel from "../../../../models/trading-balance"
import MiningContractModel from "../../../../models/mining-contract"
import UserWithdrawalModel from "../../../../models/withdrawal"
import AssetModel from "../../../../models/assets"
import UserMiningContractModel from "../../../../models/user-mining-contract"

async function handler(req, res) {
    // Only POST method is accepted
    if (req.method === "POST") {
        try {
            await mongoose.connect(process.env.MONGODB_URL);

            const session = await getSession({ req });
            if (!session) {
                return res.status(401).json({ status: false, message: "User not authenticated" });
            }

            const { amount, _balanceId, type, method, details, address } = req.body;

            // Validate required fields
            if (!amount || !_balanceId || !type || !method || !address) {
                console.error("Validation failed: Missing required fields", { amount, _balanceId, type, method, address });
                return res.status(400).json({ status: false, message: "Missing required fields" });
            }

            const email = session.user.email;
            const user = await UserModel.findOne({ email });

            if (!user) {
                console.error("User not found for email:", email);
                return res.status(401).json({ status: false, message: "Transaction not possible for unauthenticated user" });
            }

            // Check account balance type
            let accountBalance = null;
            if (type === "mining") {
                const userMiningAccount = await UserMiningContractModel.findById(_balanceId);
                if (!userMiningAccount) {
                    console.error("Mining account not found for balance ID:", _balanceId);
                    return res.status(401).json({ status: false, message: "No user account found" });
                }
                const contract = await MiningContractModel.findById(userMiningAccount._contractId);
                const asset = await AssetModel.findById(contract._assetId);

                accountBalance = userMiningAccount.quantity * asset.price;

                // Check if amount is less than balance
                if (accountBalance < amount) return res.status(401).json({ status: false, message: "Balance too low" });

                // Reduce account balance || asset quantity
                const assetWithdrawnQuantity = amount / asset.price;
                userMiningAccount.quantity -= assetWithdrawnQuantity;
                await userMiningAccount.save();
            } else if (type === "trading") {
                const userTrading = await UserTradingFundModel.findById(_balanceId);
                if (!userTrading) {
                    console.error("Trading account not found for balance ID:", _balanceId);
                    return res.status(401).json({ status: false, message: "No user account found" });
                }

                accountBalance = userTrading.balance;

                // Check if amount is less than balance
                if (accountBalance < amount) return res.status(401).json({ status: false, message: "Balance too low" });

                // Reduce account balance
                userTrading.balance -= amount;
                await userTrading.save();
            } else {
                console.error("Invalid account balance type:", type);
                return res.status(401).json({ status: false, message: "Invalid account balance type" });
            }

            // Create withdrawal request
            const withdrawal = new UserWithdrawalModel({
                _userId: user.id,
                amount,
                _balanceId,
                type,
                method,
                wallet_address: address,
                ...details,
            });

            const savedWithdrawal = await withdrawal.save();
            if (!savedWithdrawal) {
                console.error("Failed to save withdrawal request:", withdrawal);
                return res.status(500).json({ status: false, message: "Failed to create withdrawal request" });
            }

            res.status(200).json({ status: true, message: "Withdrawal request successful" });
        } catch (error) {
            console.error("Error processing withdrawal request:", error.stack);
            res.status(500).json({ status: false, message: "Internal server error" });
        } finally {
            // Ensure the database connection is closed
            if (mongoose.connection.readyState === 1) {
                await mongoose.disconnect();
            }
        }
    } else {
        // Response for other than POST method
        res.status(405).json({ status: false, message: "Method not allowed" });
    }
}

export default handler;
