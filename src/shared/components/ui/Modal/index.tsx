import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";
import type { ModalProps } from "../../../type";
import { Typography } from "../Typography";

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <Typography variant="h3" className={styles.title}>
            {title}
          </Typography>

          <IoClose size={24} className={styles.closeBtn} onClick={onClose} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
