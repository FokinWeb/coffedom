import React from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  title: string;
  text: string;
  imageUrl: string;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, imageUrl, text, title }) => {
  return (
    <div className={styles.modal} onClick={() => setActive(!active)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>
          <img src={imageUrl} alt="promo-modal" />
          <h4>{title}</h4>
        </div>
        <div className={styles.desc}>{text}</div>
        <div className={styles.close} onClick={() => setActive(!active)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.4099 12L19.7099 5.71C19.8982 5.5217 20.004 5.2663 20.004 5C20.004 4.7337 19.8982 4.47831 19.7099 4.29C19.5216 4.1017 19.2662 3.99591 18.9999 3.99591C18.7336 3.99591 18.4782 4.1017 18.2899 4.29L11.9999 10.59L5.70994 4.29C5.52164 4.1017 5.26624 3.99591 4.99994 3.99591C4.73364 3.99591 4.47824 4.1017 4.28994 4.29C4.10164 4.47831 3.99585 4.7337 3.99585 5C3.99585 5.2663 4.10164 5.5217 4.28994 5.71L10.5899 12L4.28994 18.29C4.19621 18.383 4.12182 18.4936 4.07105 18.6154C4.02028 18.7373 3.99414 18.868 3.99414 19C3.99414 19.132 4.02028 19.2627 4.07105 19.3846C4.12182 19.5064 4.19621 19.617 4.28994 19.71C4.3829 19.8037 4.4935 19.8781 4.61536 19.9289C4.73722 19.9797 4.86793 20.0058 4.99994 20.0058C5.13195 20.0058 5.26266 19.9797 5.38452 19.9289C5.50638 19.8781 5.61698 19.8037 5.70994 19.71L11.9999 13.41L18.2899 19.71C18.3829 19.8037 18.4935 19.8781 18.6154 19.9289C18.7372 19.9797 18.8679 20.0058 18.9999 20.0058C19.132 20.0058 19.2627 19.9797 19.3845 19.9289C19.5064 19.8781 19.617 19.8037 19.7099 19.71C19.8037 19.617 19.8781 19.5064 19.9288 19.3846C19.9796 19.2627 20.0057 19.132 20.0057 19C20.0057 18.868 19.9796 18.7373 19.9288 18.6154C19.8781 18.4936 19.8037 18.383 19.7099 18.29L13.4099 12Z"
              fill="#8D8D8D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
