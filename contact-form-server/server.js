require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Certifique-se de importar o cors

const app = express();
const port = 3000;

app.use(cors()); // Use o cors logo após inicializar o app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-message', (req, res) => {
  const { name, email, cellphone, message } = req.body;


  // Configuração do e-mail (substitua pelas suas credenciais)
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Nova Mensagem do Site Portfólio',
    text: `De: ${name}\nEmail: ${email}\nCelular: ${cellphone}\n\nMensagem:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao enviar e-mail.' });
    } else {
      console.log('Email enviado:', info.response);
      res.json({ message: 'Mensagem enviada com sucesso!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
