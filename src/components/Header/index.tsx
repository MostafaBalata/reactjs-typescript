import * as React from "react";
import * as styles from "./styles.scss";

export const Header: React.SFC = () => {
  return (
    <div className={styles.header}>
      <h2>Admin Dashboard</h2>
    </div>
  );
};
