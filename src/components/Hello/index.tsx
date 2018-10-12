import * as React from 'react';
import * as styles from "./styles.scss";

interface IProps {
    num: number,
    onClick: (e: any) => void
}

const Hello: React.SFC<IProps> = (props) => <div className={styles.hello}>
    Redux example: store: <b>[{props.num}]</b> :D
    <br />
    <button className="btn btn-danger" onClick={props.onClick}>Increase</button>
</div>

export {
    Hello
}