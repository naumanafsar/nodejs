var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'naumanafsar45@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'p176053@nu.edu.pk',
    to: 'naumanafsar45@gmail.com',
    subject: 'Sending email from NodeJs',
    text: 'That was easy'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
