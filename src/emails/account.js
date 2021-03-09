const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'majanilife9@gmail.com',
        subject: 'Welcome To The App',
        text: `Welcome to the app, ${name}. How are you?`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'majanilife9@gmail.com',
        subject: 'Removing Your Account',
        text: `Hello, ${name}. Is That anything wrong?\n can we know the reason for leaving the app.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}