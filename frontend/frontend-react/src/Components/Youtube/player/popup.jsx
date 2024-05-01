import React, { useState, useEffect } from "react";
import styles from "./playerCSS/page.module.css";
import CommentSection from "./component";

function Model() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Event listener to close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.modalContent}`)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className={styles.see_more} onClick={openModal}>see more</div>
      {isOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <CommentSection />
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;