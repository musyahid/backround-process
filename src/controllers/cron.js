const Bull = require('bull')
const nodemailer = require('nodemailer')
const mustache = require('mustache')
const fs = require('fs');
const sendMail = new Bull('sendmail')
  

const testSendEmail =  (email) => {
  // const template = fs.readFileSync('./template.html', 'utf8');
    return new Promise((resolve, reject) => {
      const template = fs.readFileSync('./helper/template.html', 'utf8');
        let mailOptions = {
          from: 'musyahid2@@gmail.com',
          to: email,
          subject: `Data Akun dari email ${email}`,
          text: "Klik Untuk Aktivasi",
          // html: mustache.to_html(template)
        };
        let mailConfig = {
          service: 'gmail',
          auth: {
            user: 'musyahid2@@gmail.com',
            pass: 'andromeda123'
          }
        };
        nodemailer.createTransport(mailConfig).sendMail(mailOptions, (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve(info);
          }
        });
      });
}

sendMail.process(async (job) => {
    return await testSendEmail(job.data.email);
});

module.exports = {
    sendMail
}
