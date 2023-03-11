import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

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
    <div>
      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-indigo-500 md:h-96 rounded-3xl shadow-xl shadow-gray-400">
        <div className="mx-auto mb-10 md:mt-20">
          <div className="badge bg-green-500 inline-block rounded-xl">
            <p className="font-light text-base px-4 py-1 ">Lets have a chat</p>
          </div>
          <h1 className="text-4xl font-bold mt-4 text-white">
            Reach out to me for any Business quries.
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Fill the form and send in your queries. I will respond as soon as I
            can. Alternatively, You can reach out to me at my email address.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-lg flex flex-col px-8 py-8 text-white bg-purple-600 shadow-gray-300"
        >
          <h1 className="text-2xl font-bold ">Send a message</h1>

          <label htmlFor="fullname" className="0 font-light mt-8 ">
            Full name<span className="text-red-500 ">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={e => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"
          />
          {errors?.fullname && (
            <p className="text-red-400 italic">Fullname cannot be empty.</p>
          )}

          <label htmlFor="email" className="0 font-light mt-4 ">
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"
          />
          {errors?.email && (
            <p className="text-red-400 italic">Email cannot be empty.</p>
          )}

          <label htmlFor="subject" className="0 font-light mt-4 ">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={e => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"
          />
          {errors?.subject && (
            <p className="text-red-400 italic">Subject cannot be empty.</p>
          )}
          <label htmlFor="message" className="0 font-light mt-4 ">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light 0"
          ></textarea>
          {errors?.message && (
            <p className="text-red-400 italic">Message body cannot be empty.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49]  font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-400 italic">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </header>
      <section className="">
        <h1
          className={`text-4xl font-bold text-center md:mt-60 my-10 gradient-text text-gray-700 ${
            errors ? "md:mt-80" : "md:mt-60"
          }`}
        >
          Reach out
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 md:grid-cols-2 gap-6 max-w-6xl md:mx-auto my-20">
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <svg
              width="24"
              height="24"
              className="text-cyan-500 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                fill="currentColor"
              />
            </svg>
            <p className="0 font-light">aadityachapagain101@gmail.com</p>
          </div>
          <div className="card p-8 shadow rounded-md flex flex-row items-center space-x-4 hover:shadow-lg cursor-pointer transition duration-200">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 18 }} />
            <p className="0 font-light">
              https://www.linkedin.com/in/aadityachapagain/
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
