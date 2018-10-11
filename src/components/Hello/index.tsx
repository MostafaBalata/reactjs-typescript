import * as React from 'react';
import * as styles from "./styles.scss";

interface IProps {
    num: number,
    onClick: (e: any) => void
}
const Hello: React.SFC<IProps> = (props) => <div className={styles.header}>
    Hello [{props.num}] from the other live3
<button className="btn btn-danger" onClick={props.onClick}>click</button>
</div>

export {
    Hello
}