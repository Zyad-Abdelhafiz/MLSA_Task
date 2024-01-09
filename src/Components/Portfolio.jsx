/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/robots-7855433_1280.jpg";

const imageAltText = "ai image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Deep Tech Glance",
    description:
      "The Mobile Eye Disease Detection App leverages mobile technology for proactive healthcare. Combining data analysis with smartphone cameras, it offers an accessible tool for early detection and monitoring of various eye diseases, contributing to improvedmedical outcomes and patient care.",
    url: "https://github.com/Zyad-Abdelhafiz/DEEP-TECH-GLANCE",
  },
  {
    title: "Unsafe water Deaths",
    description:
      "Tickrize: A decentralized airport ticket system, exclusive to XRP payments, awards NFT vouchers for specific ticket purchases. Addressing slow processing, high fees, and security concerns, the project also promotes cryptocurrency awareness in air travel.",
    url: "https://github.com/Zyad-Abdelhafiz/Unsafe_water_Deaths",
  },
  {
    title: "Eye Diseases Using Fundus",
    description:
      "Led the ODIR project, using a 5,000-person ophthalmic database for intelligent recognition and classification of eye diseases. Initially trained on cataract cases, the model proved versatile across categories, indicating broader medical applications for diagnosis and treatment.",
    url: "https://github.com/Zyad-Abdelhafiz/Eye-Diseases-Using-Fundus",
  },
  {
    title: "Museum",
    description:
      "Museum Project - Web Development: Built an interactive museum website using HTML, CSS, and JavaScript, with jQuery for styling,Bootstrap for layout, and Angular for dynamic buttons. Integrated ASP.NET for the Ticket Form and employed Firebase for efficient database management.",
    url: "https://github.com/Zyad-Abdelhafiz/Museum",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
