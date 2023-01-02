import React from "react";
import { Link } from "react-router-dom";
import styles from "../myStyle.module.css";
import ShopIcon from "../assets/cart.png";

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <img
          src="https://img.icons8.com/ios-filled/100/null/menu-rounded.png"
        />
        <div className={styles.dropdown}>
          
          <span >hello user</span>
          <br/>
          <span> <Link className={styles.outlink} to="/">logout </Link> </span>
           
          </div>
      </div>
      <div className={styles.title}> <h2 > Fake onlineShop</h2></div>
     

      <div className={styles.right}>
        <img className={styles.basketIcon} src={ShopIcon} />
      </div>
    </div>
  );
}

export default Header;
