const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kenyanginaja2019@gmail.com',
        pass: 'hqdcmiqfzicatlgf'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter