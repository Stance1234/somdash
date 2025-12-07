import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "growthpointinvestmentlimited0@gmail.com", // Replace with your Gmail address
    pass: "kgkenlfsyuearzjr",    // Replace with your Gmail App Password
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take our message");
  }
});

export default transporter;

// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
// 	// host: "smtp.gmail.com",
// 	service: "zoho", // Set the service to "zoho"
// 	host: "smtp.zoho.com",
// 	port: 587,
// 	secure: false, // true for 465, false for other ports
// 	auth: {
// 		user: "support@growthpointinvestld.com",
// 		pass: "@Growthpointinvestld",
// 	}, 
// 	});
  
// 	transporter.verify((err, success) => {
// 	  if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Server is ready to take our message");
// 	}
// });

// export default transporter;

