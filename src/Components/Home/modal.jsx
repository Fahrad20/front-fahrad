import React, { useEffect, useRef } from "react";
import s from "./style.module.scss";

export const Modal = ({ selectedItem, setSelectedItem }) => {
  const ref = useRef(null);
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => window.removeEventListener("click", handleCloseModal);
  }, []);

  return (
    <div className={s.modalContainer} ref={ref}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.itemBlock}>
          <img src={selectedItem.img_2x} alt={selectedItem.title} />
          <span className={s.tags}>{selectedItem.tags}</span>
          <h2>{selectedItem.title}</h2>
          <div className={s.dateLine}>
            <b>{selectedItem.autor}</b>
            <span>• {selectedItem.date} •</span>
            <span>{selectedItem.views} Views</span>
          </div>
          <p>{selectedItem.text}</p>
        </div>
        <button className={s.close} onClick={handleCloseModal}>
          X
        </button>
      </div>
    </div>
  );
};
