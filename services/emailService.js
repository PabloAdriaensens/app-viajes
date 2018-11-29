const Hbs = require('nodemailer-express-handlebars');
const Path = require('path');
const Email = require('../config/emailConfig');

class emailService
{
    constructor(){
        this.email = new Email();
    }

    sendRegisterEmail(data){
        new Promise((res,rej)=> {

            this.email.transporter().use('compile', Hbs({
                viewEngine: 'hbs',
                extName: '.hbs',
                viewPath: Path.join(__dirname, '../views/email')
            }));

            let message = {
                to: data.email,
                subject: 'Ya estas preparado para viajar',
                template: 'emailregister',
                context: {
                    username: data.username,
                    hash: data.hash
                }
            }
            this.email.transporter().sendMail(message, (error, info) => {
                if (error) {
                    return rej(error);
                }
                this.email.transporter().close();
                return res("Email enviado");
            })
        });
    }

}

module.exports=emailService;