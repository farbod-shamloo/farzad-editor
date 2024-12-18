import styles from "./Skills.module.css";

import pr from "../assets/pr.webp";
import ae from "../assets/ae.webp";
import ps from "../assets/ps.webp";

import sb from "../assets/sb.webp"
import camera from "../assets/camera.png"

import cat from "../assets/cat.svg";

import AOS from "aos";
import "aos/dist/aos.css"; // استایل‌های AOS
import { useEffect, useState } from "react";

function Skills() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدت زمان انیمیشن (میلی‌ثانیه)
  }, []);

  
  return (
    <>
      <div className={styles.container} data-aos="fade-right">
        <div className={styles.softBox}>
          <h2>مهارت‌های‌من</h2>
          <p>و همچنان در جستجوی دانش های جدید ... </p>
          <img className={styles.sb} src={sb} alt="" />
          <img className={styles.camera} src={camera} alt="" />
        </div>

        <div className={styles.carts}>
          <div className={styles.cart}>
            <img src={pr} alt="" />
            <h3 className={styles.pr}>پریمیر</h3>
          </div>

          <div className={styles.cart}>
            <img src={ae} alt="" />
            <h3 className={styles.ae}>افترافکت</h3>
          </div>

          <div className={styles.cart}>
            <img src={ps} alt="" />
            <h3 className={styles.ps}>فتوشاپ</h3>
          </div>
        </div>

        <div className={styles.com}>
          <img src={cat} alt="" />
        </div>
      </div>
    </>
  );
}

export default Skills;
