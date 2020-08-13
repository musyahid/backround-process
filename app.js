const app = require('express')()
const { sendMail } = require('./src/controllers/cron')
const { setQueues, UI } = require('bull-board')
const bodyParser = require('body-parser')
const port = 3000





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const routerUser = require('./src/routes/user')
app.use('/user', routerUser);

app.get('/', (req, res) => {

  const { email = 'mail@gmail.com' } = req.query;
  const time = new Date()


  sendMail.add({email})

  res.json({
    message: `email send in 5, request ${email}`,
    status: 'ok'
  })

})



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
