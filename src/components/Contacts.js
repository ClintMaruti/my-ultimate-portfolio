import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("🎉 Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send the message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ An unexpected error occurred.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="section contacts" id="section-contacts">
      <div className="content">
        <div className="titles">
          <div className="title">Contact</div>
          <div className="subtitle">Let's talk</div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="group-val">
              <div className="label">
                Full name <strong>*</strong>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="group-val">
              <div className="label">
                Email address <strong>*</strong>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                required
              />
            </div>

            <div className="group-val">
              <div className="label">
                Message <strong>*</strong>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="To Write"
                required
              />
            </div>

            <div className="group-bts">
              <button type="submit" className="btn">
                <span className="animated-button">
                  <span>Send Message</span>
                </span>
                <i className="icon fas fa-chevron-right" />
              </button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <div className="name">Clint Maruti</div>
          <div className="subname">Senior Software Engineer</div>
          <ul>
            <li>
              <strong>Address:</strong> Nairobi, Kenya
            </li>
            <li>
              <strong>Phone:</strong> +254 796 475 102
            </li>
            <li>
              <strong>E-mail:</strong> clintmaruti@gmail.com
            </li>
          </ul>
        </div>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contacts;
