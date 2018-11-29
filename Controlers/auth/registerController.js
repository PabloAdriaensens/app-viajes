const Controller = require('../controller');
const EncryptService = require('../../services/encryptService');
const UserModel = require('../../models/userModel');
const UUidHelper = require('../../helpers/UUidHelper');
const EmailService = require('../../services/emailService');
class registerController extends  Controller{

    constructor (req, res ,next){
        super(req, res ,next)
    }

    index(){
        this.res.render('register',{title:"register"});
    }

    async register(){
        let user = {};
        user['username'] = this.req.body.username;
        user.email = this.req.body.email;
        user.pass = EncryptService.encryptPass(this.req.body.pass);
        user.active = 0;
        user.hash=UUidHelper.getUUid(3,4);
        console.log(JSON.stringify(user));
        try {

            let userModel = new UserModel();

            let resultUserByEmail = await userModel.getUserByEmail(user.email);
            resultUserByEmail ?  this.res.json("El usuario ya existe"): "";
            let result = await userModel.insert(user);

            console.log(result.insertId);
            let emailService = new EmailService();
            let resultEmail = await emailService.sendRegisterEmail(user);

        }catch(error){
            console.log(error);
        }


    }
}

module.exports = registerController;