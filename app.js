const app = require('express')()
const { sendMail } = require('./cron')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/admin/queues', UI)
// app.get('/', (req, res) => {
//     const { email = 'mail@mail.com'} = req.query
//     const t = new Date()
//   sendMail.add({email})  
//   res.send({
//         message: `mail will send in 5 second ${t.toLocaleTimeString()}`,
//         status: 'Ok'
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
