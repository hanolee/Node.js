const nodemailer = require('nodemailer');

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "49f70e791315c4",
      pass: "f45cd0d9445c50"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error,info) => {
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'hanwoo7816@gmail.com',
    to : 'hahahoho.edit@gmail.com',
    subject : '테스트메일입니다',
    text : 'nodejs 한시간만에 끝내기'
}
send(email_data)