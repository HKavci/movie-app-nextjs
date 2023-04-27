import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/HKavci" target="_blank">
        Hakan Kavcı
      </Link>
    </footer>
  )
}

export default Footer