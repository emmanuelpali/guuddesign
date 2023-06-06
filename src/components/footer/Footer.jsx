import React from 'react';
import styles from './footer.module.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>Footer</div>
        <div className={styles.socials}>
          <div className={styles.img__container}>
            <BsFacebook/>
          </div>
          <div className={styles.img__container}>
            <BsInstagram/>
          </div>
        </div>
    </div>
  )
}

export default Footer