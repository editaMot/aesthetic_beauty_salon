import emailjs from '@emailjs/browser';

const sendEmail = (templateId, form) => {
  emailjs
    .sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      templateId,
      form.current,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
};

export default sendEmail;
