import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        alert("Login success");
        localStorage.setItem('function', "callmebaby");
      } else {
        alert("Bad Credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to be called from console
  const callMeBaby = (name) => {
    if (name === 'xyz') {
      return name;
    } else if (name === 'bugxploit') {
      return 'Your name';
    } else if (name === 'mahi') {
      return 'Your love';
    } else if (name === 'link') {
      return 'https://bugxploit.s3.ap-south-1.amazonaws.com/images/overusage/create.json';
    } else if (name === 'response manipulation vulnerability') {
      // Make a POST request to /api/email
      fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'your_email@example.com',
          message: 'A request made due to response manipulation vulnerability'
        })
      })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email');
        }
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
    }
    else{
      console.log("xyz goes to a link to find bugxploit to impress mahi")
    }
  };

  // Expose function globally
  if (typeof window !== 'undefined') {
    window.callMeBaby = callMeBaby;
  }
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Sudo <span className="text-accent">Start.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            // only needed for production (in netlify) to accept form input
            data-netlify="true"
          >
            {/* input group */}
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="input"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enter into Lab
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
