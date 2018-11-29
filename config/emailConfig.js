const Email = require('nodemailer');
const ConfigEm = require('../config');

class emailConfig {
    transporter() {
        return Email.createTransport({
                service: 'Gmail',
                auth: {
                    user: ConfigEm.gmail.user,
                    pass: ConfigEm.gmail.pass
                },
            },
            {
                from: '',
                headers: {}
            })
    }
}

module.exports = emailConfig;