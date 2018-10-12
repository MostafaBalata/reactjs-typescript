import * as React from "react";
import * as styles from "./styles.scss";

export const Header: React.SFC = () => {
  return (
    <div className={styles.header}>
      <h2>Example project</h2>
      <p>Reactjs, Redux, Bootstrap, Redux Saga, Typescript, Saas, Webpack</p>
    </div>
  );
};
