import * as React from "react";
import * as styles from "./styles.scss";

interface IProps {
  num: number;
  onClick: (e: any) => void;
}

const Hello: React.SFC<IProps> = props => (
  <div className={styles.hello}>
    <h1>Hello!</h1>
    <br />
    Redux Test: : <b>[{props.num}]</b> :D
    <br />
    <button className="btn btn-success" onClick={props.onClick}>
      Check
    </button>
  </div>
);

export { Hello };
