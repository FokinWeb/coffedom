import React from 'react';
import CatalogSlider from '../../components/CatalogSlider';
import IntroSlider from '../../components/IntroSlider';
import PresetCard from '../../components/PresetCard';
import PromoCard from '../../components/PromoCard';
import Title from '../../components/UI/Title';

import { useGetPresetsQuery } from '../../store/services/presets';
import { useGetProductsQuery } from '../../store/services/product';
import { useGetPromosQuery } from '../../store/services/promo';

import './Home.scss';

const Home = () => {
  const { data: products } = useGetProductsQuery();
  const { data: promos } = useGetPromosQuery();
  const { data: presets } = useGetPresetsQuery();

  return (
    <>
      <div className="intro">
        <div className="container">
          <IntroSlider />
        </div>
      </div>
      <div className="about-block">
        <div className="container">
          <Title title="Немного о нас" link="Больше о нас" />
          <div className="about-block__wrapper">
            <div className="about-block__card">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M52.3466 9.73332C52.0368 9.48271 51.6748 9.30472 51.2872 9.21242C50.8995 9.12013 50.4961 9.11588 50.1066 9.19999C47.2571 9.79717 44.3156 9.80478 41.463 9.22234C38.6104 8.63991 35.9073 7.47976 33.52 5.81332C33.0736 5.50365 32.5433 5.33771 32 5.33771C31.4567 5.33771 30.9264 5.50365 30.48 5.81332C28.0927 7.47976 25.3895 8.63991 22.537 9.22234C19.6844 9.80478 16.7428 9.79717 13.8933 9.19999C13.5038 9.11588 13.1004 9.12013 12.7128 9.21242C12.3251 9.30472 11.9631 9.48271 11.6533 9.73332C11.3439 9.9843 11.0947 10.3014 10.924 10.6614C10.7532 11.0213 10.6653 11.4149 10.6666 11.8133V31.68C10.6643 35.5033 11.5754 39.2719 13.3241 42.6719C15.0728 46.0719 17.6085 49.0049 20.72 51.2267L30.4533 58.16C30.9049 58.4815 31.4456 58.6543 32 58.6543C32.5544 58.6543 33.095 58.4815 33.5466 58.16L43.28 51.2267C46.3915 49.0049 48.9272 46.0719 50.6759 42.6719C52.4246 39.2719 53.3357 35.5033 53.3333 31.68V11.8133C53.3347 11.4149 53.2467 11.0213 53.076 10.6614C52.9052 10.3014 52.656 9.9843 52.3466 9.73332ZM48 31.68C48.002 34.6527 47.2941 37.5829 45.935 40.2267C44.576 42.8705 42.6052 45.1516 40.1866 46.88L32 52.72L23.8133 46.88C21.3947 45.1516 19.4239 42.8705 18.0649 40.2267C16.7059 37.5829 15.9979 34.6527 16 31.68V14.88C21.5904 15.3585 27.1894 14.0614 32 11.1733C36.8105 14.0614 42.4095 15.3585 48 14.88V31.68ZM36.1066 25.5733L28.9333 32.7733L26.56 30.3733C26.0578 29.8712 25.3768 29.5891 24.6666 29.5891C23.9565 29.5891 23.2755 29.8712 22.7733 30.3733C22.2712 30.8755 21.9891 31.5565 21.9891 32.2667C21.9891 32.9768 22.2712 33.6578 22.7733 34.16L27.04 38.4267C27.2879 38.6766 27.5828 38.875 27.9078 39.0104C28.2327 39.1457 28.5813 39.2154 28.9333 39.2154C29.2853 39.2154 29.6339 39.1457 29.9588 39.0104C30.2838 38.875 30.5787 38.6766 30.8266 38.4267L40 29.3333C40.5021 28.8312 40.7842 28.1501 40.7842 27.44C40.7842 26.7298 40.5021 26.0488 40 25.5467C39.4978 25.0445 38.8168 24.7624 38.1066 24.7624C37.3965 24.7624 36.7154 25.0445 36.2133 25.5467L36.1066 25.5733Z"
                  fill="#2FD9B9"
                />
              </svg>
              <h3>нам доверяют</h3>
              <p>Мы уже на протяжении четырёх лет радуем наших клиентов чудесными напитками</p>
            </div>
            <div className="about-block__card">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32 5.33334C26.342 5.33334 20.9158 7.58096 16.915 11.5817C12.9142 15.5825 10.6666 21.0087 10.6666 26.6667C10.6666 41.0667 29.4666 57.3333 30.2666 58.0267C30.7496 58.4398 31.3644 58.6669 32 58.6669C32.6356 58.6669 33.2503 58.4398 33.7333 58.0267C34.6666 57.3333 53.3333 41.0667 53.3333 26.6667C53.3333 21.0087 51.0857 15.5825 47.0849 11.5817C43.0841 7.58096 37.6579 5.33334 32 5.33334V5.33334ZM32 52.4C26.32 47.0667 16 35.5733 16 26.6667C16 22.4232 17.6857 18.3536 20.6863 15.353C23.6868 12.3524 27.7565 10.6667 32 10.6667C36.2434 10.6667 40.3131 12.3524 43.3137 15.353C46.3142 18.3536 48 22.4232 48 26.6667C48 35.5733 37.68 47.0933 32 52.4ZM32 16C29.8903 16 27.828 16.6256 26.0739 17.7977C24.3198 18.9697 22.9526 20.6356 22.1452 22.5847C21.3379 24.5338 21.1267 26.6785 21.5382 28.7476C21.9498 30.8168 22.9657 32.7174 24.4575 34.2092C25.9492 35.7009 27.8499 36.7168 29.919 37.1284C31.9881 37.54 34.1328 37.3287 36.0819 36.5214C38.031 35.7141 39.6969 34.3469 40.869 32.5928C42.041 30.8386 42.6666 28.7763 42.6666 26.6667C42.6666 23.8377 41.5428 21.1246 39.5424 19.1242C37.542 17.1238 34.8289 16 32 16ZM32 32C30.9451 32 29.914 31.6872 29.0369 31.1012C28.1599 30.5151 27.4763 29.6822 27.0726 28.7077C26.6689 27.7331 26.5633 26.6608 26.7691 25.6262C26.9749 24.5916 27.4828 23.6413 28.2287 22.8954C28.9746 22.1496 29.9249 21.6416 30.9595 21.4358C31.994 21.23 33.0664 21.3357 34.0409 21.7393C35.0155 22.143 35.8484 22.8266 36.4345 23.7036C37.0205 24.5807 37.3333 25.6118 37.3333 26.6667C37.3333 28.0812 36.7714 29.4377 35.7712 30.4379C34.771 31.4381 33.4144 32 32 32Z"
                  fill="#2FD9B9"
                />
              </svg>
              <h3>Большой охват</h3>
              <p>Наши кофейни есть уже в 30 городах России, а всего мы имеем 412 фелиалов</p>
            </div>
            <div className="about-block__card">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M58.6666 45.3333H5.33329C4.62605 45.3333 3.94777 45.6143 3.44767 46.1144C2.94758 46.6145 2.66663 47.2927 2.66663 48C2.66663 48.7072 2.94758 49.3855 3.44767 49.8856C3.94777 50.3857 4.62605 50.6667 5.33329 50.6667H58.6666C59.3739 50.6667 60.0521 50.3857 60.5522 49.8856C61.0523 49.3855 61.3333 48.7072 61.3333 48C61.3333 47.2927 61.0523 46.6145 60.5522 46.1144C60.0521 45.6143 59.3739 45.3333 58.6666 45.3333ZM58.6666 56H5.33329C4.62605 56 3.94777 56.2809 3.44767 56.781C2.94758 57.2811 2.66663 57.9594 2.66663 58.6667C2.66663 59.3739 2.94758 60.0522 3.44767 60.5523C3.94777 61.0524 4.62605 61.3333 5.33329 61.3333H58.6666C59.3739 61.3333 60.0521 61.0524 60.5522 60.5523C61.0523 60.0522 61.3333 59.3739 61.3333 58.6667C61.3333 57.9594 61.0523 57.2811 60.5522 56.781C60.0521 56.2809 59.3739 56 58.6666 56ZM16 18.6667C15.4725 18.6667 14.957 18.8231 14.5184 19.1161C14.0799 19.4091 13.7381 19.8256 13.5363 20.3128C13.3344 20.8001 13.2816 21.3363 13.3845 21.8536C13.4874 22.3708 13.7414 22.846 14.1143 23.2189C14.4873 23.5919 14.9624 23.8459 15.4797 23.9487C15.997 24.0516 16.5332 23.9988 17.0204 23.797C17.5077 23.5952 17.9242 23.2534 18.2172 22.8148C18.5102 22.3763 18.6666 21.8607 18.6666 21.3333C18.6666 20.6261 18.3857 19.9478 17.8856 19.4477C17.3855 18.9476 16.7072 18.6667 16 18.6667ZM53.3333 2.66666H10.6666C8.54489 2.66666 6.51006 3.50951 5.00977 5.0098C3.50948 6.51009 2.66663 8.54492 2.66663 10.6667V32C2.66663 34.1217 3.50948 36.1566 5.00977 37.6568C6.51006 39.1571 8.54489 40 10.6666 40H53.3333C55.455 40 57.4899 39.1571 58.9901 37.6568C60.4904 36.1566 61.3333 34.1217 61.3333 32V10.6667C61.3333 8.54492 60.4904 6.51009 58.9901 5.0098C57.4899 3.50951 55.455 2.66666 53.3333 2.66666V2.66666ZM56 32C56 32.7072 55.719 33.3855 55.2189 33.8856C54.7188 34.3857 54.0405 34.6667 53.3333 34.6667H10.6666C9.95938 34.6667 9.2811 34.3857 8.78101 33.8856C8.28091 33.3855 7.99996 32.7072 7.99996 32V10.6667C7.99996 9.95941 8.28091 9.28113 8.78101 8.78104C9.2811 8.28094 9.95938 7.99999 10.6666 7.99999H53.3333C54.0405 7.99999 54.7188 8.28094 55.2189 8.78104C55.719 9.28113 56 9.95941 56 10.6667V32ZM32 13.3333C30.4177 13.3333 28.871 13.8025 27.5554 14.6816C26.2398 15.5606 25.2144 16.81 24.6089 18.2719C24.0034 19.7337 23.845 21.3422 24.1537 22.894C24.4624 24.4459 25.2243 25.8714 26.3431 26.9902C27.4619 28.109 28.8874 28.8709 30.4392 29.1796C31.9911 29.4883 33.5996 29.3299 35.0614 28.7244C36.5232 28.1189 37.7727 27.0935 38.6517 25.7779C39.5308 24.4623 40 22.9156 40 21.3333C40 19.2116 39.1571 17.1768 37.6568 15.6765C36.1565 14.1762 34.1217 13.3333 32 13.3333ZM32 24C31.4725 24 30.957 23.8436 30.5184 23.5506C30.0799 23.2576 29.7381 22.8411 29.5363 22.3538C29.3344 21.8665 29.2816 21.3304 29.3845 20.8131C29.4874 20.2958 29.7414 19.8206 30.1143 19.4477C30.4873 19.0748 30.9624 18.8208 31.4797 18.7179C31.997 18.615 32.5332 18.6678 33.0204 18.8696C33.5077 19.0715 33.9242 19.4133 34.2172 19.8518C34.5102 20.2903 34.6666 20.8059 34.6666 21.3333C34.6666 22.0406 34.3857 22.7188 33.8856 23.2189C33.3855 23.719 32.7072 24 32 24ZM48 18.6667C47.4725 18.6667 46.957 18.8231 46.5184 19.1161C46.0799 19.4091 45.7381 19.8256 45.5363 20.3128C45.3344 20.8001 45.2816 21.3363 45.3845 21.8536C45.4874 22.3708 45.7414 22.846 46.1143 23.2189C46.4873 23.5919 46.9624 23.8459 47.4797 23.9487C47.997 24.0516 48.5332 23.9988 49.0204 23.797C49.5077 23.5952 49.9242 23.2534 50.2172 22.8148C50.5102 22.3763 50.6666 21.8607 50.6666 21.3333C50.6666 20.6261 50.3857 19.9478 49.8856 19.4477C49.3855 18.9476 48.7072 18.6667 48 18.6667Z"
                  fill="#2FD9B9"
                />
              </svg>
              <h3>отличные цены</h3>
              <p>
                Мы не накручиваем стоимость своих товаров, опорой цены считаем себестоемость
                состовляющих
              </p>
            </div>
            <div className="about-block__card">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M37.3333 48C38.0406 48 38.7188 47.719 39.2189 47.2189C39.719 46.7188 40 46.0406 40 45.3333V40C40 39.2927 39.719 38.6145 39.2189 38.1144C38.7188 37.6143 38.0406 37.3333 37.3333 37.3333C36.6261 37.3333 35.9478 37.6143 35.4477 38.1144C34.9476 38.6145 34.6666 39.2927 34.6666 40V45.3333C34.6666 46.0406 34.9476 46.7188 35.4477 47.2189C35.9478 47.719 36.6261 48 37.3333 48ZM26.6666 48C27.3739 48 28.0522 47.719 28.5523 47.2189C29.0524 46.7188 29.3333 46.0406 29.3333 45.3333V40C29.3333 39.2927 29.0524 38.6145 28.5523 38.1144C28.0522 37.6143 27.3739 37.3333 26.6666 37.3333C25.9594 37.3333 25.2811 37.6143 24.781 38.1144C24.2809 38.6145 24 39.2927 24 40V45.3333C24 46.0406 24.2809 46.7188 24.781 47.2189C25.2811 47.719 25.9594 48 26.6666 48ZM50.6666 16H46.9866L42.3733 6.79999C42.2323 6.46147 42.0231 6.15565 41.7586 5.90167C41.4941 5.64768 41.18 5.45097 40.8361 5.32384C40.4921 5.1967 40.1256 5.14188 39.7595 5.16279C39.3934 5.18369 39.0356 5.27988 38.7083 5.44535C38.3811 5.61081 38.0914 5.84199 37.8576 6.12444C37.6237 6.40689 37.4506 6.73454 37.3491 7.08691C37.2476 7.43928 37.2198 7.8088 37.2676 8.17238C37.3154 8.53596 37.4376 8.88578 37.6266 9.19999L41.0133 16H22.9866L26.3733 9.19999C26.6322 8.57841 26.6463 7.88192 26.4128 7.25036C26.1794 6.61879 25.7157 6.09892 25.1148 5.7951C24.5139 5.49128 23.8204 5.42602 23.1733 5.61241C22.5263 5.79881 21.9738 6.22306 21.6266 6.79999L17.0133 16H13.3333C11.4485 16.0287 9.63431 16.722 8.21077 17.9577C6.78724 19.1934 5.84577 20.8921 5.55243 22.7541C5.25909 24.6162 5.63271 26.5221 6.60741 28.1356C7.5821 29.7491 9.09525 30.9666 10.88 31.5733L12.8533 51.4667C13.0523 53.4468 13.9822 55.2818 15.4615 56.6131C16.9408 57.9445 18.8632 58.6766 20.8533 58.6667H43.2C45.1901 58.6766 47.1125 57.9445 48.5918 56.6131C50.0711 55.2818 51.001 53.4468 51.2 51.4667L53.1733 31.5733C54.9619 30.9648 56.4775 29.7428 57.4515 28.1239C58.4255 26.505 58.7951 24.5937 58.4948 22.7284C58.1946 20.8631 57.2439 19.1642 55.8111 17.9327C54.3783 16.7012 52.5559 16.0166 50.6666 16V16ZM45.84 50.9333C45.7736 51.5934 45.4637 52.205 44.9706 52.6488C44.4775 53.0926 43.8367 53.3366 43.1733 53.3333H20.8266C20.1633 53.3366 19.5225 53.0926 19.0294 52.6488C18.5363 52.205 18.2263 51.5934 18.16 50.9333L16.2666 32H47.7333L45.84 50.9333ZM50.6666 26.6667H13.3333C12.6261 26.6667 11.9478 26.3857 11.4477 25.8856C10.9476 25.3855 10.6666 24.7072 10.6666 24C10.6666 23.2927 10.9476 22.6145 11.4477 22.1144C11.9478 21.6143 12.6261 21.3333 13.3333 21.3333H50.6666C51.3739 21.3333 52.0522 21.6143 52.5523 22.1144C53.0524 22.6145 53.3333 23.2927 53.3333 24C53.3333 24.7072 53.0524 25.3855 52.5523 25.8856C52.0522 26.3857 51.3739 26.6667 50.6666 26.6667Z"
                  fill="#2FD9B9"
                />
              </svg>
              <h3>это удобно</h3>
              <p>
                Мы хотим, чтобы вы могли преобрести свой любимый напиток так, как вам этого хочется
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="catalog-block">
        <div className="container">
          <Title title="наши товары" link="Каталог" />
          {products && <CatalogSlider products={products} />}
        </div>
      </div>
      <div className="promo-block">
        <div className="container">
          <Title title="Акции" link="Акции" />
          <div className="promo-block__wrapper">
            {promos && promos.map((promo) => <PromoCard key={promo.id} promo={promo} />)}
          </div>
        </div>
      </div>
      <div className="presets-block">
        <div className="container">
          <Title title="Готовые наборы" link="Наборы" />
          <div className="presets-block__wrapper">
            {presets && presets.map((preset) => <PresetCard key={preset.id} preset={preset} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
