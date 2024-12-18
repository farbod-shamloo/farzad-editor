import React from "react";
import styles from "./Projects.module.css";

import AOS from "aos";
import "aos/dist/aos.css"; // استایل‌های AOS
import { useEffect, useState } from "react";

import video from "../assets/farb.mp4"

const projects = [
  {
    id: 1,
    title: "Sample Video 1",
    description: "A professionally edited promotional video.",
    videoUrl:video, // مسیر ویدیو
  },
  {
    id: 2,
    title: "Sample Video 2",
    description: "An engaging social media advertisement.",
    videoUrl:video,
  },
  {
    id: 3,
    title: "Sample Video 3",
    description: "A cinematic wedding video.",
    videoUrl: video,
  },
  {
    id: 4,
    title: "Sample Video 3",
    description: "A cinematic wedding video.",
    videoUrl: video,
  },
  {
    id: 3,
    title: "Sample Video 3",
    description: "A cinematic wedding video.",
    videoUrl: video,
  },
  {
    id: 3,
    title: "Sample Video 3",
    description: "A cinematic wedding video.",
    videoUrl: video,
  },

];

const Projects = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدت زمان انیمیشن (میلی‌ثانیه)
  }, []);

  return (
    <div className={styles.container} data-aos="fade-down">
      <h1 className={styles.title}>پروژه‌ها و نمونه‌کارهای من</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <video className={styles.video} controls>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
