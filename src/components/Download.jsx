import React from "react";
import styles from "../styles/global";
import assets from "../assets";
import Button from "./Button";
const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            {" "}
            Laden Sie die App jetzt herunter!
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Nutzen Sie alle Vorteile mit nur wenigen Klicks
          </p>
        </div>
        {/* <button className={`${styles.btnPrimary}`}>
          <a
            href="https://github.com/cterogene/React-Native-Nft-app"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </button> */}
        <Button />
        <div className={`${styles.flexCenter} `}>
          <img
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
