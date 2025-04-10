import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NewTabLink from "../components/newtabLink";

interface IFormErrors {
  fullname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactUs: React.FC = () => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //   Form validation state
  const [errors, setErrors] = useState<IFormErrors>({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState<string>("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showFailureMessage, setShowFailureMessage] = useState<boolean>(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async e => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendemail/v1", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
  };

  return (
    <section className="py-20 bg-[#070717] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-purple-400 mb-2">GET IN TOUCH</h2>
          <h3 className="text-5xl font-bold">Contact Me</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-4">{"Let's Connect"}</h4>
              <p className="text-gray-300 mb-6">
                Have a project in mind or want to discuss potential
                opportunities? {"I'm"} always open to new ideas and
                collaborations. Fill out the form, and {"I'll"} get back to you
                as soon as possible.
              </p>

              <div className="space-y-6 mt-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1a1a35] p-3 rounded-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-purple-400 h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-purple-300">
                      Email
                    </h5>
                    <NewTabLink
                      href={"mailto:connect@aadityachapagain.com"}
                      className="text-gray-300 hover:text-purple-400 transition duration-300"
                    >
                      connect@aadityachapagain.com
                    </NewTabLink>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#1a1a35] p-3 rounded-lg">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-purple-400 h-6 w-6"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-purple-300">
                      LinkedIn
                    </h5>
                    <NewTabLink
                      href={"https://www.linkedin.com/in/aadityachapagain/"}
                      className="text-gray-300 hover:text-purple-400 transition duration-300"
                    >
                      linkedin.com/in/aadityachapagain
                    </NewTabLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a35] p-8 rounded-lg shadow-md border border-purple-900/30 transform transition-all duration-300 hover:shadow-purple-500/20">
            <h4 className="text-2xl font-semibold mb-6">Send a Message</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-purple-300 mb-2"
                >
                  Full Name <span className="text-purple-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={fullname}
                  onChange={e => setFullname(e.target.value)}
                  className="w-full bg-[#0d0d1a] border border-purple-900/50 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
                {errors?.fullname && (
                  <p className="text-red-400 text-sm mt-1">
                    Full name is required.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-purple-300 mb-2">
                  Email <span className="text-purple-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-[#0d0d1a] border border-purple-900/50 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your email address"
                />
                {errors?.email && (
                  <p className="text-red-400 text-sm mt-1">
                    Email is required.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-purple-300 mb-2">
                  Subject <span className="text-purple-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full bg-[#0d0d1a] border border-purple-900/50 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Message subject"
                />
                {errors?.subject && (
                  <p className="text-red-400 text-sm mt-1">
                    Subject is required.
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-purple-300 mb-2">
                  Message <span className="text-purple-500">*</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-[#0d0d1a] border border-purple-900/50 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message"
                ></textarea>
                {errors?.message && (
                  <p className="text-red-400 text-sm mt-1">
                    Message is required.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 w-full"
              >
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="mt-4">
                {showSuccessMessage && (
                  <div className="bg-green-900/20 border border-green-900/50 rounded-md p-3 text-green-400">
                    {"Thank you!"} Your message has been sent successfully.
                  </div>
                )}
                {showFailureMessage && (
                  <div className="bg-red-900/20 border border-red-900/50 rounded-md p-3 text-red-400">
                    {"Oops!"} Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
