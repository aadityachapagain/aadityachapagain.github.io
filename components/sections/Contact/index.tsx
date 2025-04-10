import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  // const contactFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: {
    fullname: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    // Make API call to your backend
    const response = await fetch("/api/sendemail/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-purple-400 mb-2">GET IN TOUCH</h2>
          <h3 className="text-5xl font-bold">Contact.</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <ContactForm onSubmit={handleSubmit} />
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
            <div className="bg-[#1a1a35] rounded-xl p-6 shadow-lg border border-purple-900/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-full text-purple-400">
                  <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                  <a
                    href="mailto:connect@aadityachapagain.com"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    connect@aadityachapagain.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a35] rounded-xl p-6 shadow-lg border border-purple-900/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-full text-purple-400">
                  <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300">
                    Wollongong, NSW, 2500
                    <br />
                    Australia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a35] rounded-xl p-6 shadow-lg border border-purple-900/30 transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-900/30 p-3 rounded-full text-purple-400">
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/aadityachapagain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    linkedin.com/in/aadityachapagain
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
