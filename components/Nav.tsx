import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <menu className={styles.menu}>
        <li className={styles.logo}>
          <Image
            src="/aploskod.png"
            alt="aploskod logo"
            width={35}
            height={31}
          />
        </li>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </menu>
    </nav>
  );
};
export default Nav;
