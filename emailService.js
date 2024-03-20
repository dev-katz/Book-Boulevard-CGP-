const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'greensupermarket.store@gmail.com',
        pass: 'green@12345'
    }
});

exports.sendEmail = async (options) => {
    const mailOptions = {
        from: 'greensupermarket.store@gmail.com',
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
    };

    await transporter.sendMail(mailOptions);
};
