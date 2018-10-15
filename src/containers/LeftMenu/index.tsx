// React & libs
import * as React from "react";

// styles
import * as styles from './styles.scss';

// componets
import { LeftMenuHeader } from "../../components/LeftMenuHeader";
import { LeftMenuLink } from "../../components/LeftMenuLink";


export const LeftMenu: React.SFC = () => {
  return (

    <div className={styles.leftMenu}>
      <LeftMenuHeader />

      <div className={styles.leftMenuLinkContainer}>
        <ul className={styles.list} >
          <p className={styles.title}>Services</p>
          <LeftMenuLink content="Home" icon="home" link="/" />
          <LeftMenuLink content="Service 1" icon="eye-dropper" link="/" />
          <LeftMenuLink content="Service 2" icon="expand" link="/" />
          <LeftMenuLink content="Not Found" icon="paw" link="/not-found" />
          <p className={styles.title}>Settings</p>
          <LeftMenuLink content="Profile" icon="expand" link="/" />
          <LeftMenuLink content="Account" icon="eye-dropper" link="/" />
        </ul>
      </div>
    </div>
  );
}
