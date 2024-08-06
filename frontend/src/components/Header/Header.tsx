import React from "react";
import styles from "./header.module.css";
// import logo from "@/assets/logo.png";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/assets/logo.png" />
      </div>
      <div className={styles.logoText}>SME HealthCheck - Get Started</div>
    </div>
  );
}

export default Header;
