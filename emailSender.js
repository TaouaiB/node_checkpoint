var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Baha.edine.taouai@gmail.com',
    pass: 'xxxxxxxxxxxxxx'
  }
});

var mailOptions = {
  from: 'Baha.edine.taouai@gmail.com',
  to: 'xxxxxxxxxxxxxx',
  subject: 'Sending Email using Node.js',
  text: 'node.js!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});