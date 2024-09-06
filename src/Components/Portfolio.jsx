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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title:
      "Predicting Loan Default in Peer-to-Peer Lending: LightGBM with Boruta Feature Selection Approach",
    description:
      "This project utilized the LightGBM algorithm alongside the Boruta feature selection technique to identify the most critical features and develop a predictive model for forecasting loan defaults in the Peer-to-Peer (P2P) lending sector. The goal was to create a model that accurately predicts loan defaults, benefiting lenders and P2P lending platforms.",
    url: "https://github.com/yanshenp/p2p-lending-loan-default-prediction",
  },
  {
    title: "Data Visualization -Telco Customer Churn Analysis",
    description:
      "This project focuses on analyzing customer churn in a telecommunication company. It identifies key factors driving churn and provides insights for improving customer retention strategies using Tableau for data visualization and SAS Enterprise Miner for predictive modelling.",
    url: "https://public.tableau.com/views/CustomerChurnAnalysisinTelcommunicationCompany/Story1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Data Analysis -Telco Customer Churn Analysis",
    description:
      "This project focuses on analyzing customer churn in a telecommunication company. It identifies key factors driving churn and provides insights for improving customer retention strategies using Tableau for data visualization and SAS Enterprise Miner for predictive modelling. In this part 2, the focus will be on data analysis and predictive modelling using SAS Enterprise Miner to develop models such as decision trees and logistic regression models.",
    url: "https://sites.google.com/view/yspang/projects/data-analysis-telco-customer-churn-analysis",
  },
  {
    title: "Image Classification of Grape Leaf Diseases using VGG16 based deep learning model",
    description:
      "This project leverages deep learning methodologies to revolutionize crop management practices and improve the accuracy of decision-making. It aims to develop a deep learning-based image classifier to detect diseases of grape crops in agriculture. Overcoming the labour-intensive nature of traditional disease identification techniques, the project employs convolutional neural networks (CNNs), specifically harnessing the VGG16 architecture via transfer learning. Additionally, the project also utilizes techniques such as data augmentation and hyperparameter tuning optimizations to enhance the robustness of the models.",
    url: "https://github.com/yanshenpang/vgg16-crop-leaf-classification",
  },
  {
    title: "Spell Checker using Natural Language Processing (NLP) Techniques",
    description:
      "This project focuses specifically on using a probabilistic language model combined with techniques like the n-gram model and edit distance, particularly for the English language. The bigram language model and Damerau-Levenshtein distance algorithm are employed to develop a spelling checker. This system uses edit distance and word probabilities from a medical and Covid-19-related corpus. A user-friendly Graphical User Interface (GUI) is created with Tkinter. While the system shows promising results, it has limitations such as handling contextual ambiguity, homophones, and plural words. It is also limited to the English language and does not address misspellings in other languages.",
    url: "https://github.com/yanshenpang/nlp-spell-checker",
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
