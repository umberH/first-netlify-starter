import styles from "./Main.module.css";

export default function Main() {
  return (
    <>
      <footer className={styles.footer}>
        <img
          src="/logo-netlify.svg"
          alt="Netlify Logo"
          className={styles.logo}
        />
      </footer>
    </>
  );
}
