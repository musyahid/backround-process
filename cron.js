const Bull = require('bull')

const sendMail = new Bull('sendmail')

const testSendEmail =  (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const t = new Date()
            const text = (`email send to ${email} in : ${t.toLocaleTimeString()}`)
            console.log(text)
            resolve(text)
        }, 5000)
    })
}

sendMail.process(async (job) => {
    return await testSendEmail(job.data.email);
});

module.exports = {
    sendMail
}
