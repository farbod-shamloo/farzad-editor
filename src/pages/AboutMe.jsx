import farzad from "../assets/fzz.png";
import { useState, useEffect } from "react";
import styles from "./AboutMe.module.css";

import AOS from "aos";
import "aos/dist/aos.css"; // استایل‌های AOS


function AboutMe() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدت زمان انیمیشن (میلی‌ثانیه)
  }, []);


  useEffect(() => {
    // تنظیم زمان برای پایان انیمیشن
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 2000); // مدت زمان انیمیشن `typing`

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container} data-aos="fade-left">
      <div className={styles.right}>
        <img src={farzad} alt="" />
      </div>

      <div className={styles.left}>
        <div className={styles.name}>
          <h1 className={`${styles.typing} ${isDone ? styles.done : ""}`}>
            سلام من فرزادم
          </h1>
        </div>
        <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
