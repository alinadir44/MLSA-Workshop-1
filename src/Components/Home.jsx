/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import resume from "../resume.pdf";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText =
  "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";
const Home = ({ name, title }) => {
  /**
   * Downloads the resume file stored in the path .
   * @function
   * @name download
   * @returns {void}
   * @description Downloads the resume file stored in the path when the Download Resume button is clicked. Uses the HTML5 download attribute to download the file.
   */
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        {/* added a button on the front page to download the entire website as a pdf (credits: Alishba)*/}
        <button onClick={handleDownload} className="download-btn">
          Download Resume
        </button>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
  resume: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Home;
