import styles from "./index.module.css";
import clsx from "clsx";
import { useTranslations } from "../../hooks/useI18n";
import { Header } from "../../components/Header";

export const HomePage = () => {
  const t = useTranslations();

  return (
    <>
      <div className={clsx(styles["h-100vh"], styles.container)}>
        <Header background translation buttons="upAndDown" />
        <section
          className={clsx(
            styles["bg-img"],
            styles["max-section-hero"],
            styles["h-100"]
          )}
        >
          <div className="">
            <div className={styles.intro}>
              <p>{t["home.arrived"]}</p>
            </div>
            <div>
              <h1 className={styles.center}>
                <svg
                  role="img"
                  aria-labelledby="max-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 280 76.64"
                  style={{ fill: "#fff" }}
                >
                  <title id="max-logo">Max</title>
                  <path d="M192.93,74.7h24.13a159.5,159.5,0,0,1,19.53-25.47,164.51,164.51,0,0,1,19,25.47H280a292.93,292.93,0,0,0-28.38-36.86A279.48,279.48,0,0,0,280,1.94H256.11a170.86,170.86,0,0,1-19.52,24.62A155.25,155.25,0,0,1,217.06,1.94H192.93a241.68,241.68,0,0,0,28.5,35.9A310.78,310.78,0,0,0,192.93,74.7Z"></path>
                  <path d="M145.52,76.64a31,31,0,0,0,24.86-11.52V74.7h19V1.94h-19v9.58A31,31,0,0,0,145.52,0c-19.89,0-36.38,17.1-36.38,38.32S125.63,76.64,145.52,76.64ZM127.09,38.32a21.46,21.46,0,1,1,21.46,21.46A21.42,21.42,0,0,1,127.09,38.32Zm5,0a16.49,16.49,0,1,0,16.49-16.61A16.53,16.53,0,0,0,132.06,38.32Z"></path>
                  <path d="M0,74.7H20V29.47c8.73-6.91,12.73-9.1,16-9.1,3.88,0,6.42,2.43,6.42,8.49V74.7h20V29.35c8.73-6.79,12.61-9,16-9,3.88,0,6.43,2.43,6.43,8.49V74.7h20V21.83C104.89,5.46,95.56,0,86.58,0,78.94,0,71.18,3.15,61,10.91,57.72,2.79,50.57,0,44.14,0,36.5,0,28.74,3.4,18.8,11V1.94H0Z"></path>
                </svg>
              </h1>
            </div>
            <div className={styles.subtitle}>
              <p>{t["home.description"].toUpperCase()}</p>
            </div>
            <div className={styles.prices}>
              <p>
                <span>{t["home.plans"]}</span>
                <span className={styles["price-bold"]}>{t["home.price"]}</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};