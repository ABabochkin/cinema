import React from "react";
import styles from "../modal/modal.module.scss";

import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Modal = () => {
  const { closeModal, movieModal } = useContext(AppContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.main}>
        {/* <div className={styles.video}> </div> */}
        <img
          className={styles.video}
          src={movieModal.posterUrlPreview}
          alt="log"
        />
        <img
          onClick={closeModal}
          className={styles.close}
          src="/img/close.svg"
          alt="close"
        />
        <div className={styles.description}>
          <span className={styles.name}> {movieModal.nameRu} </span>
          <div className={styles.facts}>
            <span> 2022 </span> -<span>Драма</span> -<span>2ч 23мин</span>
          </div>
          <div className={styles.desc}> {movieModal.description} </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
