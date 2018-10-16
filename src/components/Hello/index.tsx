import * as React from "react";
import { Button } from 'reactstrap';

import * as styles from "./styles.scss";

interface IProps {
  num: number;
  message: string,
  onClick: (e: any) => void;
}

const Hello: React.SFC<IProps> = props => (
  <div className={styles.hello}>
    <h1 className="big-title">Hello!</h1>

    <h2>Redux state</h2>
    <p>  : : <span>{props.num}</span> : :</p>

    <h2>Sage middleware</h2>
    <p>  : : <span>{props.message}</span> : :</p>

    <Button color="success" onClick={props.onClick}>click</Button>

  </div>
);

export { Hello };
