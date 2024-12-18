import { Link, NavLink } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import styles from "./Layout.module.css";
import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import logo from "../assets/fz.png";

function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div>
          <div
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>

          <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
            <Link to="/home" onClick={closeMenu}>
              <img src={logo} alt="Logo" />
            </Link>

            <NavLink to="/home" onClick={() => {closeMenu; scrollToTop();}}>
              خانه
            </NavLink>

            <NavLink to="/about-me" onClick={() => {closeMenu; scrollToTop();}}>
              درباره‌من
            </NavLink>
            <NavLink to="/skills" onClick={() => {closeMenu; scrollToTop();}}>
              مهارت‌ها
            </NavLink>
            <NavLink to="/projects" onClick={() => {closeMenu; scrollToTop();}}>
              پروژه‌ها
            </NavLink>
            <NavLink to="/contact-us" onClick={() => {closeMenu; scrollToTop();}}>
              ارتباط‌بامن
            </NavLink>
          </ul>
        </div>

        <div className={styles.resume}>
          <a href="#">
            {" "}
            <IoDocumentTextOutline /> دانلود‌ رزومه{" "}
          </a>
        </div>
      </header>


      {children}

      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h3>درباره ما</h3>
          <p>
            این وب‌سایت برای آموزش و اشتراک‌گذاری دانش‌های برنامه‌نویسی ساخته
            شده است.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>لینک‌های مفید</h3>
          <ul>
            <li>
              <a href="/home">خانه</a>
            </li>
            <li>
              <a href="/about-us">درباره‌ما</a>
            </li>
            <li>
              <a href="/services">خدمات</a>
            </li>
            <li>
              <a href="/contact">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>تماس با ما</h3>
          <ul>
            <li>
              <a href="mailto:your-email@example.com">
                ایمیل: your-email@example.com
              </a>
            </li>
            <li>
              <a href="tel:+123456789">تلفن: +123456789</a>
            </li>
          </ul>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
