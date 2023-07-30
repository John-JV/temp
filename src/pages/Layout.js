import { Outlet, Link } from "react-router-dom";
import styles from './lo.module.css';

const Layout = (props) => {
  return (
    <>
      <header className={styles.header}>
        <ul >
          <li className={styles.logo}>
            <span><b style={{color:"red",fontFamily:"cursive"}}>KOZI</b><br/>BONDA</span>
          </li>
          <li className={styles.li} style={{marginLeft:"80px"}}>
            <Link className={styles.link+ ' ' + styles.fromLeft} to="/" >Home</Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="/blogs">About Us</Link>
          </li>
        </ul>
          <ul>
            <li className={styles.buto+' '+styles.tbut}><div onClick={props.amh}><b className={styles.span}>Amh</b></div></li>
            <li className={styles.but+' '+styles.tbut}><div onClick={props.eng}><b className={styles.span}>Eng</b></div></li>
        </ul>
      </header>

      <Outlet />
    </>
  )
};

export default Layout;

