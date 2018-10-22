// React & libs
import * as React from "react";

// styles
import * as styles from './styles.scss';

// helpers
import { routes } from '../../routes';

// componets
import { LeftMenuHeader } from "../../components/LeftMenuHeader";
import { LeftMenuLink } from "../../components/LeftMenuLink";

export const LeftMenu: React.SFC = () => {
  return (

    <div className={styles.leftMenu}>
      <LeftMenuHeader />

      <div className={styles.leftMenuLinkContainer}>
        <ul className={styles.list} >
          {
            routes.map((route, i) => {
              const title = <p key={i} className={styles.title}>{route.title}</p>
              const links = route.elements.map((link, j) => <LeftMenuLink key={j} content={link.content} icon={(link.icon as any)} link={link.link} />);

              return [title, links];
            })
          }
        </ul>
      </div>
    </div>
  );
}
