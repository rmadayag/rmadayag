import React, { useState } from "react";
import intro from "../assets/images/Contact.svg";
import mailIcon from "../assets/images/Email.svg";
import whatsappIcon from "../assets/images/Phone.svg";
import locationIcon from "../assets/images/Location.svg";
import emailjs from "emailjs-com";
import { useSpring, animated } from "react-spring";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const contact_info = [
    { icon: mailIcon, title: "Email", text: "hello.rmady@gmail.com" },
    { icon: whatsappIcon, title: "Phone", text: "+639 564 450 644" },
    { icon: locationIcon, title: "Location", text: "Baguio City, Philippines" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      emailjs.sendForm('service_biprksg', 'template_mafhlaf', e.target, 'lxpQI6JFkLQc2gB68')
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true);
          setTimeout(() => setIsSuccess(false), 5000); // Remove success message after 5 seconds
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Handle error cases if necessary
        })
        .finally(() => {
          e.target.reset();
          setName("");
          setEmail("");
          setMessage("");
        });
    }
  };
  const styles = useSpring({
    from: { transform: 'scale(1)' },
    to: [
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ],
    config: { duration: 1000 },
    loop: { reverse: true }
  });


  return (
    <section id="contact" className="md:py-36 py-12 bg-bgcolor text-txtcolor">
      <div className="flex flex-col justify-center items-center px-5 max-w-6xl mx-auto w-full gap-10">
        <div className="flex flex-col items-center gap-5">
        <animated.img
              src={intro}
              alt="Contact"
              style={styles}
            />
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
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className={nameError ? "border-red-500" : ""} />
            {nameError && <span className="text-red-500">{nameError}</span>}
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className={emailError ? "border-red-500" : ""} />
            {emailError && <span className="text-red-500">{emailError}</span>}
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={10} required className={messageError ? "border-red-500" : ""}></textarea>
            {messageError && <span className="text-red-500">{messageError}</span>}
            <button type="submit" className="btn-primary ease-in duration-300 w-fit hover:bg-primary/70 hover:scale-105 hover:transition-transform">Send Message</button>
            {isSuccess && <p className="text-green-500">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
