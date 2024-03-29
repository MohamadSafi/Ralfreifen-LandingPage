import React from "react";
import styles from "../styles/global";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
  Hlevel,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section}
    ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div
        className={` flex items-center 
      ${
        reverse ? styles.boxReverseClass : styles.boxClass
      } w-11/12 sm: w-full minmd: w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
      ${reverse ? "fadeRightMini" : "fadeLeftMini"}
      ${reverse ? styles.textRight : styles.textLeft}`}
        >
          {Hlevel === "1" ? (
            <h1
              className={` ${reverse ? styles.blackText : styles.whiteText} ${
                styles.h1Text
              }`}
            >
              {title}
            </h1>
          ) : (
            <h2
              className={` ${reverse ? styles.blackText : styles.whiteText} ${
                styles.h1Text
              }`}
            >
              {title}
            </h2>
          )}

          <p
            className={` ${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </p>
          {showBtn && <Button />}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <LazyLoadImage
            src={mockupImg}
            alt="mockup"
            className={` ${styles.sectionImg} ${
              reverse ? "fadeLeftMini" : "fadeRightMini"
            } `}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
