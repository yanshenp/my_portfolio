/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/blue-sea.png";

const imageAltText = "blue sea background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = `I graduated with a major in Biotechnology, where I developed a strong foundation in genetics and chemistry. 
  During my undergraduate studies, I had the opportunity to gain hands-on experience in the agricultural field,
  which broadened my understanding of practical applications in science. After completing my degree, 
  I transitioned into a role as a Technical Sales Executive at an oleo chemical company. In this position, 
  I was responsible for bridging the gap between technical product specifications and customer needs. 
  Realizing the growing importance of data in driving business decisions, I then decided to further my education by 
  pursuing a Master of Science in Data Science and Business Analytics. This program equipped me with advanced skills in data analysis, machine learning, and business strategy. 
  I have learned to leverage data to provide actionable insights and solve complex problems, which I believe is crucial in todays data-driven world.
  Combining my background in science, technical sales, and data science, I bring a unique perspective and a versatile skill set to the table.
  I am particularly passionate about using data to make informed decisions that can drive business growth and innovation. 
  I am excited about the opportunity to apply my skills and experiences to contribute to your team.`;

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Analysis",
  "Machine Learning",
  "Cloud Computing",
  "Data Visualization",
  "NLP",
  "Statistics",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my data science and science experience, I continually look for solutions to solve complex problem.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Me </h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
