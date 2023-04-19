import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const MainTitle = () => {
  return (
    <div className={styles.main_title}>
      <div>
        <h1 className={styles.title}>
          Estamos <br /> más cerca
        </h1>
        <p>Lorem ipsun dolor</p>
        <div className={styles.button_menu}>
          <Link href="/">Leer más</Link>
        </div>
      </div>
      <div className={styles.container_tasks}>
        <Image
          className={styles.home_tasks}
          src="/images/tasks.png"
          alt="tasks"
          width={500}
          height={560}
        />
      </div>
    </div>
  );
};

export default MainTitle;
