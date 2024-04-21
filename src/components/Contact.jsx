import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import intro from "../assets/images/Contact.svg";
import mailIcon from "../assets/images/Email.svg";
import whatsappIcon from "../assets/images/Phone.svg";
import locationIcon from "../assets/images/Location.svg";
import emailjs from "emailjs-com";

const Contact = () => {
  const recaptchaRef = useRef();

  const contact_info = [
    { icon: mailIcon, title: "Email", text: "hello.rmady@gmail.com" },
    { icon: whatsappIcon, title: "Phone", text: "+639 564 450 644" },
    { icon: locationIcon, title: "Location", text: "Baguio City, Philippines" },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();

    // Verify reCAPTCHA
    const token = await recaptchaRef.current.executeAsync();

    // Your email sending logic here
    emailjs.sendForm('service_biprksg', 'template_mafhlaf', e.target, 'lxpQI6JFkLQc2gB68')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="md:py-36 py-12 bg-bgcolor text-txtcolor">
      <div className="flex flex-col justify-center items-center px-5 max-w-6xl mx-auto w-full gap-10">
        <div className="flex flex-col items-center gap-5">
          <img src={intro} alt="About" />
          <h2 className="text-2xl md:text-4xl leading-tight font-semibold text-txtcolor">
            Let’s Discuss <span className="text-primary">Your Project</span>
          </h2>
          <p className="md:text-1xl text-lg font-regular text-txtcolor text-center">
            Let’s make something new, different and more meaningful or make thing <br /> more visual or conceptual
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-10 rounded-lg w-full">
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-row text-left gap-5 flex-wrap items-center py-5">
                <img src={contact.icon} alt={contact.text} className="w-8 h-8" />
                <div>
                  <p className="md:text-base text-sm  break-words font-semibold">{contact.title}</p>
                  <p className="md:text-base text-sm  break-words">{contact.text}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={sendEmail} className="flex flex-col flex-1 gap-5 w-full md:w-1/2 p-8 bg-bgaccent rounded-lg">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" rows={10}></textarea>
            {/* Render reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LfVQsIpAAAAACvn5T_2u3eAv7KLngfV4DB5WXK6"
            />
            <button type="submit" className="btn-primary w-fit hover:bg-primary/70">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
