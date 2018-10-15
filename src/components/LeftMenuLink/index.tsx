// React & libs
import * as React from "react";

// Styles
import * as styles from './styles.scss';

// Fonts
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas)

interface IProps {
  content: string,
  icon: IconProp
}

const LeftMenuLink: React.SFC<IProps> = ({ content, icon }) => {
  return (
    <li className={styles.item}>
      <a className={`${styles.link}`} href="#">
        <FontAwesomeIcon className={styles.linkIcon} icon={icon} />
        <span>{content} </span>
      </a>
    </li>
  )
}


export {
  LeftMenuLink
}
