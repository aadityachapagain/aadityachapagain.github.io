import React, { useState } from "react";

interface ContactFormProps {
  onSubmit: (formData: {
    fullname: string;
    email: string;
    subject: string;
    message: string;
  }) => Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleValidation = (): boolean => {
    let tempErrors: Record<string, boolean> = {};
    let isValid = true;

    if (formData.fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (formData.email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (formData.subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (formData.message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending...");

      try {
        await onSubmit(formData);

        // Reset form
        setFormData({
          fullname: "",
          email: "",
          subject: "",
          message: ""
        });

        setShowSuccessMessage(true);
        setShowFailureMessage(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        setShowFailureMessage(true);
        setShowSuccessMessage(false);
      } finally {
        setButtonText("Send");

        // Hide success message after 5 seconds
        if (showSuccessMessage) {
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
        }
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1a1a35] rounded-xl p-8 shadow-lg border border-purple-900/30"
    >
      <div className="mb-6">
        <label htmlFor="fullname" className="block text-gray-300 mb-2 text-sm">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="w-full bg-[#0d0d25] border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="John Doe"
        />
        {errors.fullname && (
          <p className="text-red-500 text-xs mt-1">Name cannot be empty</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#0d0d25] border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">Email cannot be empty</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-[#0d0d25] border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="How can I help you?"
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">Subject cannot be empty</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-[#0d0d25] border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your message here..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">Message cannot be empty</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full flex items-center justify-center"
        disabled={buttonText === "Sending..."}
      >
        {buttonText}
        {buttonText === "Send" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        )}
      </button>

      {showSuccessMessage && (
        <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {showFailureMessage && (
        <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p>Oops! Something went wrong. Please try again.</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
