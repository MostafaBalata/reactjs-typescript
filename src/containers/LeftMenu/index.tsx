// React & libs
import * as React from "react";

// styles
import * as styles from './styles.scss';

// componets
import { LeftMenuLink } from "../../components/LeftMenuLink";


export const LeftMenu: React.SFC = () => {
  return (

    <div className={styles.leftMenu}>
      <div className={styles.leftMenuLinkContainer}>
        <ul className={styles.list} >
          <p className={styles.title}>Services</p>
          <LeftMenuLink content="Home" icon="home" />
          <LeftMenuLink content="Account Deletion" icon="eye-dropper" />
          <LeftMenuLink content="CDB" icon="expand" />
          <LeftMenuLink content="Streaming" icon="paw" />
          <p className={styles.title}>Settings</p>
          <LeftMenuLink content="Profile" icon="expand" />
          <LeftMenuLink content="Account" icon="eye-dropper" />
        </ul>
      </div>
    </div>
  );
}
