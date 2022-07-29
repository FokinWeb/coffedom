import React from 'react';
import { SelectedProduct } from '../../types/SelectedProduct';

import styles from './PresetsCreateProductCard.module.scss';

interface PresetsCreateProductCardSmallProps {
  product: SelectedProduct;
  selectedProducts: SelectedProduct[];
  setSelectedProducts: (products: SelectedProduct[]) => void;
}

const PresetsCreateProductCardSmall: React.FC<PresetsCreateProductCardSmallProps> = ({
  product,
  selectedProducts,
  setSelectedProducts,
}) => {
  const { amount, imageUrl, size, title } = product;

  const removeProductHandler = () => {
    const index = selectedProducts.indexOf(product);
    // const arr = [...selectedProducts];
    // arr.splice(index, 1);
    selectedProducts.splice(index, 1);
    setSelectedProducts([...selectedProducts]);
  };

  return (
    <div className={styles.cardSm}>
      <div className={styles.inner}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <div className={styles.amount}>x{amount}</div>
        <p>{size}</p>
      </div>
      <button onClick={removeProductHandler}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.7098 8.29002C15.6169 8.19629 15.5063 8.1219 15.3844 8.07113C15.2626 8.02036 15.1318 7.99422 14.9998 7.99422C14.8678 7.99422 14.7371 8.02036 14.6153 8.07113C14.4934 8.1219 14.3828 8.19629 14.2898 8.29002L11.9998 10.59L9.70984 8.29002C9.52153 8.10171 9.26614 7.99593 8.99984 7.99593C8.73353 7.99593 8.47814 8.10171 8.28983 8.29002C8.10153 8.47832 7.99574 8.73372 7.99574 9.00002C7.99574 9.26632 8.10153 9.52171 8.28983 9.71002L10.5898 12L8.28983 14.29C8.19611 14.383 8.12171 14.4936 8.07094 14.6154C8.02017 14.7373 7.99404 14.868 7.99404 15C7.99404 15.132 8.02017 15.2627 8.07094 15.3846C8.12171 15.5065 8.19611 15.6171 8.28983 15.71C8.3828 15.8037 8.4934 15.8781 8.61526 15.9289C8.73712 15.9797 8.86782 16.0058 8.99984 16.0058C9.13185 16.0058 9.26255 15.9797 9.38441 15.9289C9.50627 15.8781 9.61687 15.8037 9.70984 15.71L11.9998 13.41L14.2898 15.71C14.3828 15.8037 14.4934 15.8781 14.6153 15.9289C14.7371 15.9797 14.8678 16.0058 14.9998 16.0058C15.1318 16.0058 15.2626 15.9797 15.3844 15.9289C15.5063 15.8781 15.6169 15.8037 15.7098 15.71C15.8036 15.6171 15.878 15.5065 15.9287 15.3846C15.9795 15.2627 16.0056 15.132 16.0056 15C16.0056 14.868 15.9795 14.7373 15.9287 14.6154C15.878 14.4936 15.8036 14.383 15.7098 14.29L13.4098 12L15.7098 9.71002C15.8036 9.61705 15.878 9.50645 15.9287 9.38459C15.9795 9.26274 16.0056 9.13203 16.0056 9.00002C16.0056 8.86801 15.9795 8.7373 15.9287 8.61544C15.878 8.49358 15.8036 8.38298 15.7098 8.29002ZM19.0698 4.93002C18.1474 3.97492 17.0439 3.21309 15.8239 2.689C14.6038 2.16491 13.2916 1.88905 11.9638 1.87751C10.6361 1.86598 9.31926 2.11899 8.09029 2.6218C6.86133 3.12461 5.74481 3.86714 4.80589 4.80607C3.86696 5.745 3.12443 6.86151 2.62162 8.09048C2.11881 9.31944 1.86579 10.6362 1.87733 11.964C1.88887 13.2918 2.16473 14.604 2.68882 15.8241C3.21291 17.0441 3.97473 18.1476 4.92984 19.07C5.8523 20.0251 6.95575 20.7869 8.17579 21.311C9.39583 21.8351 10.708 22.111 12.0358 22.1225C13.3636 22.1341 14.6804 21.881 15.9094 21.3782C17.1383 20.8754 18.2549 20.1329 19.1938 19.194C20.1327 18.255 20.8752 17.1385 21.3781 15.9096C21.8809 14.6806 22.1339 13.3638 22.1223 12.036C22.1108 10.7082 21.8349 9.39601 21.3109 8.17597C20.7868 6.95593 20.0249 5.85249 19.0698 4.93002ZM17.6598 17.66C16.3519 18.9694 14.6304 19.7848 12.7886 19.9673C10.9469 20.1498 9.09884 19.6881 7.55936 18.6608C6.01987 17.6335 4.88419 16.1042 4.34581 14.3335C3.80742 12.5628 3.89964 10.6602 4.60675 8.9498C5.31386 7.23945 6.59211 5.82717 8.22373 4.95358C9.85534 4.07999 11.7394 3.79915 13.5548 4.15889C15.3703 4.51863 17.0049 5.49671 18.1801 6.92648C19.3553 8.35625 19.9984 10.1493 19.9998 12C20.0034 13.0513 19.7984 14.0929 19.3968 15.0644C18.9951 16.0359 18.4047 16.9182 17.6598 17.66Z"
            fill="#606060"
          />
        </svg>
      </button>
    </div>
  );
};

export default PresetsCreateProductCardSmall;
