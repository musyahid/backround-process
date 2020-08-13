const { sendMail } = require("./cron");

let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");




const response = {
    status: true,
    message: "",
    data:[]
}


class RegistrasiController {

  static async registrasi(req, res) {

    const { email = 'mail@gmail.com' } = req.body;

    sendMail.add({email})

      res.send({
        status: 'Ok'
  })
  }

  static async generatePdf(req, res) {
    let users = [
      {
       Nama: "Abror",
       Alamat: "Lombok, NTB",
       HP: "087738934282"
      } ];

       ejs.renderFile(path.join(__dirname, '../../views/', "report-template.ejs"), {users: users}, (err, data) => {
       if (err) {
             res.send(err);
       } else {
           let options = {
               "height": "11.25in",
               "width": "8.5in",
               "header": {
                   "height": "20mm"
               },
               "footer": {
                   "height": "20mm",
               },
           };
           pdf.create(data, options).toFile("report.pdf", function (err, data) {
               if (err) {
                   res.send(err);
               } else {
                   res.send("File created successfully");
               }
           });
       }
   });
  }

  


  

}

module.exports = RegistrasiController;
