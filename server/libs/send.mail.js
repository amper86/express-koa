const nodemailer = require('nodemailer');

const configServer = {
  subject: 'music',
  smtp: {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      //todo: чтобы отпрвлял прописать настройки почты
      user: 'почта',
      pass: 'пароль'
    }
  }
};

module.exports = (data, cb) => {
  const transporter = nodemailer.createTransport(configServer.smtp);
  const mailOptions = {
    from: `Test test <${configServer.smtp.auth.user}>`,
    to: data.email,
    subject: configServer.subject,
    text: 'Hello word!!!',
    html: `<b>${data.message} ${data.name}</b>`
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return cb(new Error('Сообщение не отправлено'), null);
    }

    cb(null, 'Сообщение отпралено');
  });
};
