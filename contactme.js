var nodemailer = require('nodemailer');

function sendEmail() {
  subj = document.getElementById('subject').value;
  mes = document.getElementById('message').value;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nathangrant456@gmail.com',
      pass: 'Vacation2018'
    }
  });
    
  var mailOptions = {
    from: 'nathangrant456@gmail.com',
    to: 'nathangrant456@gmail.com',
    subject: subj,
    text: mes
  };
    
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}