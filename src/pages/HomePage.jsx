import styles from "./HomePage.module.css"

import { FaCircle } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";




import img from "../assets/i.png";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
import Slider from "../components/Slider"

import AOS from "aos";
import "aos/dist/aos.css"; // استایل‌های AOS
import { useEffect, useState } from "react";


function HomePage() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدت زمان انیمیشن (میلی‌ثانیه)
  }, []);

 
  return (
    <>
      <div className={styles.container} data-aos="fade-up">
        <div className={styles.right}>
  
          <h2>فرزاد شاملو</h2>
          <h1>تدوینگر و گرافیست</h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>

          {/* <a href="#"> <IoDocumentTextOutline /> دانلود‌ رزومه  </a> */}
          <a href="#"> <IoDocumentTextOutline /> دانلود‌ رزومه  </a>
        </div>
        <div className={styles.left}>
          <FaCircle />
          <img src={img} alt="i" />
          
        </div>
      </div>

      <Skills />
      <AboutMe />
      <Slider />
      <Projects />
      <ContactUs />
    </>
  )
}

export default HomePage