import React, { useState } from "react";
import styles from "./ContactUs.module.css"; 
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌توانید ارسال پیام به سرور یا هر عملی را انجام دهید

    setIsSubmitted(true); // نمایش پیام موفقیت

    // بعد از ۳ ثانیه فرم مجدداً نمایش داده می‌شود
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" }); // فرم را ریست می‌کنیم
    }, 3000); // ۳ ثانیه
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <h2 className={styles.title}>با ما در ارتباط باشید</h2>
        <p className={styles.subtitle}>ما همیشه در دسترس شما هستیم!</p>

        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h3>پیام شما با موفقیت ارسال شد!</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">نام</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="نام خود را وارد کنید"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="ایمیل خود را وارد کنید"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">پیام</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="پیام خود را وارد کنید"
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              ارسال پیام
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
