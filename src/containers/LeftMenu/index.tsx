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
          <LeftMenuLink content="Home" icon="home" />
          <LeftMenuLink content="Service 1" icon="eye-dropper" />
          <LeftMenuLink content="Service 2" icon="expand" />
          <LeftMenuLink content="Service 3" icon="paw" />
          <p className={styles.title}>Settings</p>
          <LeftMenuLink content="Profile" icon="expand" />
          <LeftMenuLink content="Account" icon="eye-dropper" />
        </ul>
      </div>
    </div>
  );
}
