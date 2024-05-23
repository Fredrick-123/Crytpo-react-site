import React, { useRef  } from 'react';
import emailjs, { send } from '@emailjs/browser';



const NewsletterForm = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_ade0mb7';
    const templateId = 'template_ohzr24a';
    const publicKey = 'HqwsceCd7VBl9aQr8';

  
  emailjs.sendForm(serviceId, templateId,  form.current, {
      publicKey: publicKey,
    })
    .then(
      (response) => {
        console.log('Your email was sent successfully!', response);
        
      },
      (error) => {
        console.log('Failed to send Your email', error.text);
      },
    );
  };
 

 
  return (
    <form onSubmit={sendEmail} ref={form}  className="flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10">
      <input type='email '  name='form_email' className="input text-base text-white placeholder:text-white placeholder:text-base"  placeholder="Enter your email"/>
      <button type='submit' value={send} className="btn bg-white text-darkblue px-8 hover:bg-white/70 transition-all duration-300 ease-in hover:text-[#3671E9]">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
