import styles from './sidemenu.module.scss';

const SideMenu = () => {
  return (
    <nav className={styles.sideMenuContainer}>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default SideMenu;
