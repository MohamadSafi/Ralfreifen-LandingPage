import React from "react";
import styles from "../styles/global";
import assets from "../assets";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            {" "}
            Was Sie finden können{" "}
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Es gibt Unterschiede bei den auf unserer Plattform verfügbaren
            Produkten
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.car} iconText="Autos" />
          <FeatureCard iconUrl={assets.tyre} iconText="Reifen" />
          <FeatureCard iconUrl={assets.carParts} iconText="Autoteile" />
        </div>
      </div>
    </div>
  );
};

export default Features;
